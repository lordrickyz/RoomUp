import React from 'react';
import '../../css/room/channel.css'

class Channel extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="channel-box">
        <div className="channel-view">
          <div className="channel-video">Video Screen</div>
          <div className="channel-video-buttons">Buttons</div>
        </div>
        <div className="channel-sidebar">
          <div className="channel-people">People Count</div>
          <div className="channel-chat">Chat Logs</div>
        </div>
      </div>
    );
  }
}

export default Channel;