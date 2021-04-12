const express = require('express');
const router = express.Router();
const Room = require('../../models/room')

// Create Room
router.post('/', (req, res) => {
  const newRoom = new Room(req.body)

  newRoom.save()
    .then(room => res.json(room))
    .catch(err => res.status(404).json(err))
})

// Request or View Rooms
router.get('/', (req, res) => {
  Room.find()
    .then(rooms => res.json(rooms))
    .catch(err => res.status('404').json(err));
})


// Delete Room
router.delete('/:room_id', (req, res) => {
  Room.findOneAndDelete({_id: req.params.room_id}, {$set: req.body})
    .then(rooms => res.json({_id: rooms._id}))
    .catch(err => res.status(404).json(err))
})


module.exports = router;