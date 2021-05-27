import React from 'react';
import '../../css/navbar/navbar.css';

class NavBar extends React.Component {
  renderNav(arg) {
    if (arg === "home") {
      return (
        <nav className="channel-nav">
          <h1> RoomUP Home </h1>
        </nav>
      )
    } else if (arg === "room") {
      return (
        <nav className="channel-nav">
          <h1> RoomUP Channel</h1>
        </nav>
      )
    }
  }

  render() {
    return (
      <>
        {this.renderNav(this.props.page)}
      </>
    )
  }
}


export default NavBar