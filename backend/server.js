// Middleware Imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Data Imports
const db = require('./config/keys.js').mongoURI;
const cors = require('cors');
const rooms = require('./routes/api/rooms');

// Socket.IO Imports
const server = require("http").Server(app);
const options = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
};
const io = require("socket.io")(server, options);
const { ExpressPeerServer } = require('peer');


if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
    app.get("/", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
} else {
  app.use(cors(), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
}


// Main Server
app.use(express.static("frontend"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send("Welcome Roommie"));
app.use('/api/rooms', rooms);


// PeerJS Server
const peerServer = ExpressPeerServer(server, {
  debug: true,
})
app.use('/peerjs', peerServer)

// SocketIO Server
const users = {};
const socketToRoom = {};

io.on("connection", (socket) => {
  console.log("New Client Connected", new Date().toLocaleDateString())
  console.log('---')
  //join room
  socket.on("join-room", (roomID) => {
    if (users[roomID]) {
      const length = users[roomID].length;
      if (length === 6) {
        socket.emit("room-full")
        return;
      }
      users[roomID].push(socket.id);
    } else {
      users[roomID] = [socket.id];
    }
    socketToRoom[socket.id] = roomID;
    const usersInRoom = users[roomID].filter(id => id !== socket.id)

    socket.emit("all-users", usersInRoom);
  })

  socket.on("send-call", payload => {
    io.to(payload.userToCall).emit("user-joined", { signal: payload.signal, callerID: payload.callerID });
  });

  socket.on("receive-call", payload => {
    io.to(payload.callerID).emit("returning-call", { signal: payload.signal, id: socket.id });
  });

  // disconnect call
  socket.on("disconnect", () => {
    console.log("user disconnected!")
    const roomID = socketToRoom[socket.id];
    let room = users[roomID]
    if (room) {
      room = room.filter(id => id !== socket.id);
      users[roomID] = room;
    }
    
    socket.broadcast.emit("end-call")
    console.log('User Disconnected!')
  })
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is serving on port ${port}`));