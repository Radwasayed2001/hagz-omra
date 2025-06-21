// /store/slices/transportationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: '',
  method: '',    // e.g. 'bus' | 'car' | 'plane'
  price: 0       // numeric cost per person/group
};

const transportationSlice = createSlice({
  name: 'transportation',
  initialState,
  reducers: {
    setTransport(state, action) {
      const { city, method, price } = action.payload;
      state.city   = city;
      state.method = method;
      state.price  = price;
    },
    resetTransport(state) {
      state.city = '';
      state.method = '';
      state.price = 0;
    }
  }
});

export const { setTransport, resetTransport } = transportationSlice.actions;
export default transportationSlice.reducer;
