import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { configureAppStore } from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  let store = configureAppStore({});

  console.log(process.env.NODE_ENV)

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
})
