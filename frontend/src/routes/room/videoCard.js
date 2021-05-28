import React, { useEffect, useRef } from "react";
import '../../css/room/video.css'

const VideoCard = (props) => {
  const peerRef = useRef();
  const peer = props.peer;
  
  useEffect(() => {
      peer.on("stream", stream => {
          peerRef.current.srcObject = stream;
      })
  }, [peer]);

  return (
      <video 
        playsInline 
        autoPlay 
        muted 
        ref={peerRef} 
        className="video-peer-card"/>
  );
};

export default VideoCard
