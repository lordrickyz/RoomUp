import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomeContainer from './routes/home/homeContainer';
import RoomContainer from './routes/room/channelContainer';

function App({ store }) {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer}/>
      <Route exact path="/rooms/:roomId" component={RoomContainer}/>
    </Switch>
  );
}

export default App;