// src/store/slices/totalCostSlice.js
import { createSelector, createSlice } from '@reduxjs/toolkit';

const totalCostSlice = createSlice({
  name: 'totalCost',
  initialState: { value: 0 },
  reducers: {}
});

export const selectTotalCost = createSelector(
  state => state.packages.items,
  state => state.dateRange.days,
  state => state.transportation.method,
  state => state.travellers,
  state => state.hotel,
  state => state.services.selected,
  state => state.room,
  (
    packages,
    days,
    method,
    travellers,
    hotel,
    selectedServices,
    room
  ) => {
    if (!method) return 0;               // لا يبدأ إلا بعد اختيار المواصلات
    const nights = days > 0 ? days : 1;
    const { adults, children, infants } = travellers;
    const totalPassengers = adults + children + infants;

    // 1) النقل
    let transportTotal = 0;
    if (method === 'plane') {
      transportTotal = 800 * adults + 600 * children + 400 * infants;
    } else if (method === 'bus') {
      transportTotal = 200 * totalPassengers;
    } else if (method === 'car') {
      transportTotal = 4000 * Math.ceil(totalPassengers / 4);
    }

    // 2) الباقات (packages)
    const pkgTotal = packages.reduce(
      (sum, p) => sum + p.price * p.quantity * nights,
      0
    );

    // 3) الفندق
    const hotelTotal = hotel.pricePerNight
      ? hotel.pricePerNight * nights * Object.values(room.counts).reduce((a, b) => a + b, 0)
      : 0;

    // 4) الغرف
    const roomTotal = Object.entries(room.counts).reduce(
      (sum, [key, cnt]) => sum + cnt * room.prices[key] * nights,
      0
    );

    // 5) الخدمات الإضافية الجديدة
    let servicesTotal = 0;
    for (const key of selectedServices) {
      switch (key) {
        case 'meals':
          // وجبات يومية: 60 ريال × ليلة × (بالغين + أطفال)
          servicesTotal += 60 * nights * (adults + children);
          break;
        case 'transfer':
          // استقبال وتوصيل: 100 ريال (مرة واحدة)
          servicesTotal += 100;
          break;
        case 'guidedTour':
          // جولة سياحية: 250 ريال لكل 4 مسافرين
          servicesTotal += 250 * Math.ceil(totalPassengers / 4);
          break;
        case 'comfortPack':
          // باقة راحة المعتمر (ماء زمزم): 20 ريال (مرة واحدة)
          servicesTotal += 20;
          break;
        default:
          break;
      }
    }

    return transportTotal
      + pkgTotal
      + hotelTotal
      // + roomTotal
      + servicesTotal;
  }
);

export default totalCostSlice.reducer;
