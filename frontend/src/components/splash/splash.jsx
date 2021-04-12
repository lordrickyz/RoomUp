import React from 'react';
import { connect } from 'react-redux';
import { submitRoom } from '../../actions/roomActions'

const splash = ({ submitRoom }) => {

  return(
    <>
     {/* 
      button to create room;
      form to join a room
     */}
    </>
  )
}

const mdp = dispatch => ({
  submitRoom: room => dispatch(submitRoom(room))
})

export default connect(null, mdp)(splash);