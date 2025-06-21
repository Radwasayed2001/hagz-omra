// src/store/slices/travellersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adults:   1,
  children: 0,
  infants:  0
};

const travellersSlice = createSlice({
  name: 'travellers',
  initialState,
  reducers: {
    setTravellerCount(state, action) {
      const { category, count } = action.payload;
      state[category] = count;
    }
  }
});

export const { setTravellerCount } = travellersSlice.actions;
export default travellersSlice.reducer;
