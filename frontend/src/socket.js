import io from 'socket.io-client';

// const sockets = io('http://localhost:3000', { autoConnect: true })
const sockets = io('/');
// Change Connect to Heroku/Netify host later

export default sockets