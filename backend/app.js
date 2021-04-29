const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const db = require('./config/keys.js').mongoURI;
const rooms = require('./routes/api/rooms');

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

app.use(express.static("frontend"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

mongoose
  .connect(db, { userNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send("Welcome Roommie"));
app.use('/api/rooms', rooms);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is serving on port ${port}`));