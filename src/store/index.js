import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import packagesReducer       from './slices/packagesSlice';
import totalCostReducer      from './slices/totalCostSlice';
import transportationReducer from './slices/transportationSlice';
import dateRangeReducer      from './slices/dateRangeSlice';
import travellersReducer     from './slices/travellersSlice';
import hotelReducer          from './slices/hotelSlice';
import servicesReducer          from './slices/servicesSlice';
import { selectTotalCost }   from './slices/totalCostSlice';
import roomReducer          from './slices/roomSlice';
// 1) Define the logger middleware
const totalLogger = storeAPI => next => action => {
  const result = next(action);
  const total = selectTotalCost(storeAPI.getState());
  console.log('🧮 Total cost updated:', total);
  return result;
};

// 2) Configure store with that middleware
export const store = configureStore({
  reducer: {
    packages:       packagesReducer,
    totalCost:      totalCostReducer,
    transportation: transportationReducer,
    dateRange:      dateRangeReducer,
    travellers:     travellersReducer,
    hotel:          hotelReducer,
    room:           roomReducer, 
    services:          servicesReducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(totalLogger),
  devTools: process.env.NODE_ENV !== 'production',
});
