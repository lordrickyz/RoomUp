import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { configureAppStore } from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  let store = configureAppStore({});

  console.log(process.env.NODE_ENV)

  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
       <App />
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  );
})
