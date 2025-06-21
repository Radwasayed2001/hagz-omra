// src/components/DateRangePickerClient.jsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { addDays, format, differenceInCalendarDays } from 'date-fns';
import { useDispatch } from 'react-redux';
import { setDateRange } from '@/store/slices/dateRangeSlice';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './DateRangeOverrides.css';

const DateRange = dynamic(
  () => import('react-date-range').then((m) => m.DateRange),
  { ssr: false }
);

export default function DateRangePickerClient() {
  const dispatch = useDispatch();
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate:   addDays(new Date(), 1),
      key:       'selection'
    }
  ]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    const onChange = (e) => setIsMobile(e.matches);
    onChange(mql);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  // When the user picks new dates:
  const handleChange = (item) => {
    const { startDate, endDate } = item.selection;
    setRange([item.selection]);

    // compute days difference (you can adjust +1 if you want inclusive nights)
    const days = Math.max(
      differenceInCalendarDays(endDate, startDate),
      1
    );

    // dispatch into Redux
    dispatch(setDateRange({ startDate, endDate, days }));
  };

  const formatted = `${format(range[0].startDate, 'yyyy-MM-dd')} → ${format(
    range[0].endDate,
    'yyyy-MM-dd'
  )}`;

  return (
    <div className="relative inline-block w-full" ref={containerRef} dir="rtl">
      {/* Input Field */}
      <input
        type="text"
        readOnly
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-500 cursor-pointer"
        onClick={() => setOpen((o) => !o)}
        value={formatted}
        placeholder="تاريخ الوصول ↔ تاريخ المغادرة"
      />

      {/* Picker Panel */}
      {open && (
        <div className="absolute right-0 z-20 mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <DateRange
            editableDateInputs
            onChange={handleChange}
            moveRangeOnFirstSelection={false}
            months={2}
            direction={isMobile ? 'vertical' : 'horizontal'}
            ranges={range}
            rangeColors={['#AE7639']}
            className="!rounded-2xl !shadow-none !border-none !bg-transparent !p-4"
            locale={{
              localize: {
                day: (n) =>
                  ['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'][n],
                month: (n) =>
                  ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'][n],
              },
              options: { weekStartsOn: 6 },
            }}
          />
        </div>
      )}
    </div>
  );
}
