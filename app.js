// Run Server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(res)
  res.send("Hello World")
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
// Note: killall -9 node [If node unable to run]

// Room ID Creation
const { v4: uuidv4 } = require('uuid')

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})
