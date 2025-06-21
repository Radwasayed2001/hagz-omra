// src/store/slices/packagesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []  // each: { id, name, price, quantity }
};

const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    addPackage(state, action) {
      state.items.push(action.payload);
    },
    updatePackageQuantity(state, action) {
      const { id, quantity } = action.payload;
      const pkg = state.items.find(p => p.id === id);
      if (pkg) pkg.quantity = quantity;
    },
    removePackage(state, action) {
      state.items = state.items.filter(p => p.id !== action.payload);
    }
  }
});

export const { addPackage, updatePackageQuantity, removePackage } = packagesSlice.actions;
export default packagesSlice.reducer;
