import React from 'react';

class Home extends React.Component {
  createRoom() {
    this.props.submitRoom()
      .then(uuid => {
        this.props.history.push(`/rooms/${uuid}`)
      })
  }

  render() {
    return(
      <div className="home-bg">
        <button onClick={() => this.createRoom()}> Create Room </button>
      </div>
    )
  }
}

export default Home;