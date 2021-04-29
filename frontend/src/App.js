import { Provider } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import SplashPage from './components/splash/splash'
// import RoomPage from ''

function App({ store }) {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" component={SplashPage}/>
          {/* <Route path="/room/:roomId" component={RoomPage}/> */}
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;