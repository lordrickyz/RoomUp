import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { submitRoom } from '../../actions/roomActions'

const RoomForm = ({ submitRoom }) => {
  useEffect(() => {
    submitRoom();
  }, [])

  return (
    <button onClick={() => submitRoom()}>Create A Room</button>
  )
}

const mdp = dispatch => ({
  submitRoom: () => dispatch(submitRoom())
})

const RoomFormContainer = connect(null, mdp)(RoomForm);

export default RoomFormContainer;