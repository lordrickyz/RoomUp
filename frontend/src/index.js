import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureAppStore } from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  let store = configureAppStore({});

  console.log(process.env.NODE_ENV)

  ReactDOM.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
  document.getElementById('root')
  );
})
