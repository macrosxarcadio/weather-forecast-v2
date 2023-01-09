import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const forecastSlice = createSlice({
  name: 'Location',
  initialState,
  reducers: {
    setNewForecast: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setNewForecast } = forecastSlice.actions

export default forecastSlice.reducer