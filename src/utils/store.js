
import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from '../features/weather/weatherSlice';
import locationSlice from '../features/weather/LocationSlice';
import forecastSlice from '../features/weather/forecastSlice';

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    location:locationSlice,
    forecast:forecastSlice
  },
})


