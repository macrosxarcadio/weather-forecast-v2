import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const weatherSlice = createSlice({
  name: 'Location',
  initialState,
  reducers: {
    setNewWeather: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setNewWeather } = weatherSlice.actions

export default weatherSlice.reducer