// src/store/slices/servicesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: []  // array of service keys
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    toggleService(state, action) {
      const key = action.payload;
      if (state.selected.includes(key)) {
        state.selected = state.selected.filter(k => k !== key);
      } else {
        state.selected.push(key);
      }
    },
    resetServices(state) {
      state.selected = [];
    }
  }
});

export const { toggleService, resetServices } = servicesSlice.actions;
export default servicesSlice.reducer;
