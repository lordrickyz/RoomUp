const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const RoomSchema = new Schema ({
  uuid: {
    type: String,
    default: uuidv4,
    require: true
  },
  private: {
    type: Boolean,
    default: false,
  },
  pass: {
    type: String
  },
}, {
  timestamps: true,
})

module.exports = Room = mongoose.model('Room', RoomSchema);