// src/components/TravellerNum.jsx
'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTravellerCount } from '@/store/slices/travellersSlice';

const categories = [
  {
    key: 'adults',
    label: 'البالغين',
    subtitle: '13 سنة فما فوق',
    icon: (
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.75 6.875C12.75 4.80393 11.071 3.125 9 3.125C6.92893 3.125 5.25 4.80393 5.25 6.875C5.25 8.94605 6.92893 10.625 9 10.625C11.071 10.625 12.75 8.94605 12.75 6.875Z" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.25 15.875C14.25 12.9755 11.8995 10.625 9 10.625C6.10051 10.625 3.75 12.9755 3.75 15.875" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    unitPrice: 100,
    min: 1,
  },
  {
    key: 'children',
    label: 'الأطفال',
    subtitle: '2-12 سنة',
    icon: (
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.625 8.75C2.00368 8.75 1.5 8.2463 1.5 7.625C1.5 7.00368 2.00368 6.5 2.625 6.5H3.18902C3.85509 3.91216 6.20424 2 9 2C11.7958 2 14.1449 3.91216 14.811 6.5H15C15.6213 6.5 16.125 7.00368 16.125 7.625C16.125 8.2463 15.6213 8.75 15 8.75H14.9536C14.5845 11.7097 12.0597 14 9 14C5.94029 14 3.41549 11.7097 3.04642 8.75H2.625Z" stroke="#37322C" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M9 11.75C9.41422 11.75 9.75 11.4142 9.75 11H8.25C8.25 11.4142 8.58578 11.75 9 11.75Z" stroke="#37322C" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
    unitPrice: 80,
    min: 0,
  },
  {
    key: 'infants',
    label: 'الرضع',
    subtitle: 'أقل من سنتين',
    icon: (
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.75 8V8.0075" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    unitPrice: 20,
    min: 0,
  },
];

export default function TravellerNum() {
  const dispatch = useDispatch();
  const counts = useSelector(state => state.travellers);

  const increment = (key) => {
    const newCount = counts[key] + 1;
    dispatch(setTravellerCount({ category: key, count: newCount }));
  };

  const decrement = (key, min) => {
    const newCount = Math.max(counts[key] - 1, min);
    dispatch(setTravellerCount({ category: key, count: newCount }));
  };

  return (
    <section className="bg-white lg:w-[45%] w-full flex flex-col mb-4 md:px-4 px-8">
      <h2 className="text-md font-medium mb-4">عدد المسافرين</h2>
      <div className="flex flex-col gap-4 md:px-6 px-8">
        {categories.map(({ key, label, subtitle, icon, unitPrice, min }) => {
          const count = counts[key];
          const showPrice = unitPrice > 0 && count > 0;
          const total = unitPrice * count;

          return (
            <div key={key} className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  {icon}
                  <span className="font-medium">{label}</span>
                </div>
                <p className="text-sm text-[#aaa]">{subtitle}</p>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => decrement(key, min)}
                  className="rounded-full w-[25px] h-[25px] flex items-center justify-center border border-gray-300"
                >
                  <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 1.5H1.5" stroke="#37322C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <span className="w-6 text-center">{count}</span>

                <button
                  onClick={() => increment(key)}
                  className="bg-[#AE7639] text-white rounded-full w-[25px] h-[25px] flex items-center justify-center"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 1.5V13.5M13.5 7.5H1.5" stroke="#F8FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

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
