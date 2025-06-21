// src/store/slices/roomSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counts: {
    single: 1,   // min لكل نوع
    double: 0,
    triple: 0,
    quad:   0,
  },
  prices: {
    single: 100,
    double: 150,
    triple: 200,
    quad:   250,
  }
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoomCount(state, action) {
      const { key, count } = action.payload;
      state.counts[key] = count;
    },
    resetRooms(state) {
      state.counts = { single:1, double:0, triple:0, quad:0 };
    }
  }
});

export const { setRoomCount, resetRooms } = roomSlice.actions;
export default roomSlice.reducer;
