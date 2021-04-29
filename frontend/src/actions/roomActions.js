import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Creating Actions
export const receiveRooms = createAction('RECEIVE_ROOMS');
export const receiveRoom = createAction('RECEIVE_ROOM');
export const removeRoom = createAction('REMOVE_ROOM');

// Axios Dispatchers
// View Rooms
export const fetchRooms = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/rooms')
    dispatch(receiveRooms(res.data))
  }
  catch (err) {
    // Add Errors Reducer in Future.
    console.log(err)
  }
}

// View Room
export const fetchRoom = (uuid) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/api/rooms/${uuid}`)
    dispatch(receiveRoom(res.data))
  }
  catch (err) {
    console.log(err)
  }
}

// Create Room
export const submitRoom = () => async dispatch => {
  try {
    const res = await axios.post('http://localhost:5000/api/rooms')
    dispatch(receiveRoom(res.data))
  }
  catch (err) {
    console.log(err)
  }
}

// Delete Room
export const deleteRoom = (uuid) => async dispatch => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/rooms/${uuid}`)
    dispatch(removeRoom(res.data))
  }
  catch (err) {
    console.log(err)
  }
}