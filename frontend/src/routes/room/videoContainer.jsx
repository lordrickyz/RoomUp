import React, { useEffect, useRef, useState } from "react";
import Peer from 'simple-peer';
import socket from '../../socket';
import VideoCard from './videoCard';
import "../../css/room/video.css"

const VideoContainer = (props) => {
    const roomID = props.roomId
    const [ peers, setPeers ] = useState([]);
    const userVideoRef = useRef();
    const peersRef = useRef([]);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            userVideoRef.current.srcObject = stream;

            socket.emit("join-room", roomID);
            socket.on("all-users", (users) => {
              console.log("all users", users) 
                const peers = [];
                users.forEach((userID) => {
                    const peer = createPeer(userID, socket.id, stream);

                    peersRef.current.push({
                        peerID: userID,
                        peer,
                    })

                    peers.push(peer);
                })
                setPeers(peers);
            })

            socket.on("user-joined", payload => {
              console.log('user-joined')
              const peer = addPeer(payload.signal, payload.callerID, stream);
              peersRef.current.push({
                  peerID: payload.callerID,
                  peer,
              })

              setPeers(users => [...users, peer]);
            });

            socket.on("returning-call", payload => {
              console.log('call-acepted')
              const item = peersRef.current.find(p => p.peerID === payload.id);
              item.peer.signal(payload.signal);
            });
        })
    }, []);

    function createPeer(userToCall, callerID, stream) {
        const peer = new Peer({
          initiator: true,
          trickle: false,
          stream,
        });

        peer.on("signal", signal => {
          console.log("Create-Peer")
          socket.emit("send-call", { userToCall, callerID, signal })
        })

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
          initiator: false,
          trickle: false,
          stream,
        })

        peer.on("signal", signal => {
          console.log("Add-Peer")
          socket.emit("returning-call", { signal, callerID })
        })

        peer.signal(incomingSignal);

        return peer;
    }

  return (
    <div className="channel-video">
      <video playsInline autoPlay muted ref={userVideoRef} className="video-card"/>
      { peers.map((peer, index) => {
          return (
            <VideoCard key={index} peer={peer}/>
          )
        })
      }
      <h1> {peers.length}</h1>
    </div>
  )
}

export default VideoContainer