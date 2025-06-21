// src/store/slices/hotelSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  index: null,       // which hotel (0 or 1)
  pricePerNight: 0   // e.g. 750 or 300
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    selectHotel(state, action) {
      const { index, pricePerNight } = action.payload;
      state.index = index;
      state.pricePerNight = pricePerNight;
    },
    resetHotel(state) {
      state.index = null;
      state.pricePerNight = 0;
    }
  }
});

export const { selectHotel, resetHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
