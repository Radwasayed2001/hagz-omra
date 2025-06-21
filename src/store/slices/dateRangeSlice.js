// /store/slices/dateRangeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { differenceInCalendarDays } from 'date-fns';

const initialState = {
  startDate: null,
  endDate: null,
  days: 0
};

const dateRangeSlice = createSlice({
  name: 'dateRange',
  initialState,
  reducers: {
    setDateRange(state, action) {
      const { startDate, endDate } = action.payload;
      state.startDate = startDate;
      state.endDate   = endDate;
      // +1 if you want inclusive nights
      state.days      = differenceInCalendarDays(new Date(endDate), new Date(startDate));
    }
  }
});

export const { setDateRange } = dateRangeSlice.actions;
export default dateRangeSlice.reducer;
