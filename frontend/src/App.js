import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomeContainer from './routes/home/homeContainer';
import RoomContainer from './routes/room/channelContainer';

function App({ store }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/rooms/:roomId" component={RoomContainer}/>
      </Switch>
    </div>
  );
}

export default App;