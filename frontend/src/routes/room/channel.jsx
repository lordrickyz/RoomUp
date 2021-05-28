import React from 'react';
import '../../css/room/channel.css';
import NavBar from '../navbar/navbar';
import VideoContainer from './videoContainer';

const Channel = (props) => {
  const roomID = props.match.params.roomId

  return (
    <div className="channel">
      <NavBar page={"room"}/>
      <div className="channel-box">
        <div className="channel-view">
          <VideoContainer roomId={roomID}/>
          <div className="channel-video-buttons">Buttons</div>
        </div>
        <div className="channel-sidebar">
          <div className="channel-people">People Count</div>
          <div className="channel-chat">Chat Logs</div>
        </div>
      </div>
    </div>
  );
  
}

export default Channel;