
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk"
import weatherSlice from '../features/weather/weatherSlice';
import locationSlice from '../features/weather/LocationSlice';

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    location:locationSlice,
  },
})


