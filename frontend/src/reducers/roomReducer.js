import { createReducer } from '@reduxjs/toolkit'

export const roomReducer = createReducer({}, builder => {
  builder
    .addCase('RECEIVE_ROOMS', (state, action) => {
      state = action.payload
    })
    .addCase('RECEIVE_ROOM', (state, action) => {
      state[action.payload._id] = action.payload
    })
    .addCase('REMOVE_ROOM', (state, action) => {
      return state.delete(action.payload._id)
    })
    // .addDefaultCase((state => {
    //   return state
    // }))
})