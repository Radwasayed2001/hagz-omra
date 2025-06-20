// src/components/RoomType.jsx
'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRoomCount } from '@/store/slices/roomSlice';

// مصفوفة أنواع الغرف
const roomTypes = [
  { key: 'single', label: 'غرفة مفردة', unitPrice: 100, min: 1 },
  { key: 'double', label: 'غرفة ثنائية', unitPrice: 150, min: 0 },
  { key: 'triple', label: 'غرفة ثلاثية', unitPrice: 200, min: 0 },
  { key: 'quad',   label: 'غرفة رباعية', unitPrice: 250, min: 0 },
];

export default function RoomType() {
  const dispatch = useDispatch();
  // نقرأ counts من Redux
  const counts = useSelector(state => state.room.counts);

  const increment = (key) => {
    dispatch(setRoomCount({ key, count: counts[key] + 1 }));
  };

  const decrement = (key, min) => {
    const newCount = Math.max(counts[key] - 1, min);
    dispatch(setRoomCount({ key, count: newCount }));
  };

  return (
    <section className="bg-white lg:w-[45%] w-full mb-8 md:px-4 px-8">
      <h2 className="text-md font-medium mb-4">نوع الغرفة</h2>
      <div className="flex flex-col gap-4 md:px-6 px-8">
        {roomTypes.map(({ key, label, unitPrice, min }) => {
          const count = counts[key];
          const showPrice = count > 0;
          const total = unitPrice * count; // nights will be applied in the selector

          return (
            <div key={key} className="flex items-center justify-between">
              {/* اسم الغرفة */}
              <p>{label}</p>

              {/* أدوات التحكم والـ price */}
              <div className="flex items-center space-x-4">
                {/* زر – */}
                <button
                  onClick={() => decrement(key, min)}
                  className="rounded-full w-[25px] h-[25px] flex items-center justify-center border border-gray-300"
                >
                  <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 1.5H1.5" stroke="#37322C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* العدد */}
                <span className="w-6 text-center">{count}</span>

                {/* زر + */}
                <button
                  onClick={() => increment(key)}
                  className="bg-[#AE7639] text-white rounded-full w-[25px] h-[25px] flex items-center justify-center"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 1.5V13.5M13.5 7.5H1.5" stroke="#F8FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* السعر الإجمالي يظهر فقط إذا count > 0 */}
                {showPrice && (
                  <span className="text-sm font-semibold text-[#AE7639]">
                    {total} ريال
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
