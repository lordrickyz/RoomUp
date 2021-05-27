import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomeContainer from './routes/home/homeContainer';
import RoomPage from './routes/room/channel';

function App({ store }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/room/:roomID" component={RoomPage}/>
      </Switch>
    </div>
  );
}

export default App;