import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { roomReducer } from '../reducers/roomReducer'

export const configureAppStore = preloadedState => {
  const store = configureStore({
    reducer: roomReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
      .concat(process.env.NODE_ENV !== 'production' ? logger : []),
    preloadedState
  })

  return store;
}