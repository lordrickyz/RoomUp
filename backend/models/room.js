const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import { v4 as uuidv4 } from 'uuid';

function uuidGenerator() {
  return uuidv4();
}

const RoomSchema = new Schema ({
  uuid: {
    type: String,
    default: uuidGenerator(),
    require: true
  },
  participants: {
    type: Schema.Types.ObjectId,
    //  ref: 'users' if scaled on larger userbase.
  },
  emptied: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
}, {
  timestamps: true,
})

module.exports = Room = mongoose.model('Room', RoomSchema);