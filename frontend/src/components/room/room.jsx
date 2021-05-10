import React from 'react';

class Channel extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <div class="row">
          <div class="video-screen">Video Screen</div>
          <div class="chat-log">Chat Logs</div>
        </div>
      </>
    );
  }
}

export default Channel;