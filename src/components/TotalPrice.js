// src/components/TotalPrice.jsx
'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalCost } from '@/store/slices/totalCostSlice';

export default function TotalPrice() {
  // Hooks at top
  const total      = useSelector(selectTotalCost);
  const method     = useSelector(s => s.transportation.method);
  const travellers = useSelector(s => s.travellers);
  const hotel      = useSelector(s => s.hotel);
  const room       = useSelector(s => s.room);
  const days       = useSelector(s => s.dateRange.days);
  const services   = useSelector(s => s.services.selected);

  if (total <= 0) return null;
  const nights = days > 0 ? days : 1;

  // Transport label (unchanged) …
  const { adults, children, infants } = travellers;
  const totalPax = adults + children + infants;
  let transportLabel = '';
  if (method === 'plane') {
    transportLabel = `طيران: 800×${adults} + 600×${children} + 400×${infants}`;
  } else if (method === 'bus') {
    transportLabel = `باص: 200×${totalPax}`;
  } else if (method === 'car') {
    transportLabel = `سيارة: 4000×(${Math.ceil(totalPax/4)})`;
  }

  // *** تحديث حساب الفندق ***
  // نجمع عدد جميع الغرف المختارة من slice الـ room
  const totalRooms = Object.values(room.counts).reduce((a, b) => a + b, 0);
  // ثم نعمل ليبل بالصيغة: سعر الليلة × عدد الغرف × عدد الليالي
  const hotelLabel =
    hotel.pricePerNight && totalRooms > 0
      ? `${hotel.pricePerNight} × ${totalRooms} غرفة × ${nights} ليلة`
      : null;

  // Room breakdown (unchanged) …
  const roomLines = Object.entries(room.counts)
    .filter(([key, cnt]) => cnt > 0)
    .map(([key, cnt]) => {
      const price = room.prices[key];
      const label =
        key === 'single' ? 'مفردة' :
        key === 'double' ? 'ثنائية' :
        key === 'triple' ? 'ثلاثية' :
        'رباعية';
      return `${label}: ${price}×${cnt}×${nights}`;
    });

  // Services breakdown (unchanged) …
  const serviceLabels = services.map(key => {
    switch (key) {
      case 'meals':      return `إفطار: 60×${nights}×(${adults}+${children})`;
      case 'transfer':   return `استقبال/توصيل: 100 مرة واحدة`;
      case 'guidedTour': return `جولة سياحية: 250×${Math.ceil(totalPax/4)}`;
      case 'comfortPack':return `راحة معتمر: 20 مرة واحدة`;
      default:           return '';
    }
  });

  return (
    <section className="sticky top-20 mt-8 bg-[#FAF5EE] rounded-lg shadow-md p-6 lg:mx-0 mx-auto">
      <h3 className="text-xl font-bold mb-4 text-[#37322C]">تفاصيل السعر</h3>

      <ul className="space-y-2 mb-4 text-[#37322C]">
        {/* النقل */}
        <li className="flex justify-between">
          <span>النقل</span>
          <span>{transportLabel}</span>
        </li>

        {/* الفندق (مع عدد الغرف والليالي) */}
        {hotelLabel && (
          <li className="flex justify-between">
            <span>الفندق</span>
            <span>{hotelLabel}</span>
          </li>
        )}

        {/* تفاصيل الغرف */}
        {/* {roomLines.map((line, i) => (
          <li key={i} className="flex justify-between">
            <span>نوع الغرفة</span>
            <span>{line}</span>
          </li>
        ))} */}

        {/* الخدمات الإضافية */}
        {serviceLabels.map((line, i) => (
          <li key={i} className="flex justify-between">
            <span>خدمة إضافية</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      {/* السعر الإجمالي */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-600">السعر الإجمالي</span>
        <span className="text-2xl font-semibold text-[#AE7639]">
          {total.toFixed(2)} ريال
        </span>
      </div>

      <button className="w-full bg-[#AE7639] text-white py-3 rounded-md hover:bg-[#8f5f29] transition cursor-pointer">
        احجز الآن
      </button>
    </section>
  );
}
