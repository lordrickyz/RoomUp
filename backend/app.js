const express = require('express');
const app = express();
const mongoose = require('mongoose');

const db = require('./config/keys.js').mongoURI;

app.use(express.json());

mongoose
  .connect(db, { userNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send("Welcome World"));
app.use('/api/questions', questions);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is serving on port ${port}`));