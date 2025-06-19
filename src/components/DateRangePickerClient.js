// components/DateRangePickerClient.jsx
"use client"

import React, { useState, useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { addDays, format } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DateRange = dynamic(
  () => import('react-date-range').then(m => m.DateRange),
  { ssr: false }
)

export default function DateRangePickerClient({ onChange }) {
  const [range, setRange] = useState([{
    startDate: new Date(),
    endDate:   addDays(new Date(), 7),
    key:        'selection'
  }])
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  // إغلاق الـ picker عند النقر خارج العنصر
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleChange = item => {
    setRange([item.selection])
    if (onChange) onChange(item.selection)
  }

  // نص العرض في الـ input
  const formatted = `${format(range[0].startDate, 'yyyy-MM-dd')} → ${format(range[0].endDate, 'yyyy-MM-dd')}`

  return (
    <div className="relative inline-block" ref={containerRef} dir="rtl">
      {/* 1. حقل الإدخال */}
      <input
        type="text"
        readOnly
         className='mb-6 ps-4 flex items-center text-[#aaa]'
        onClick={() => setOpen(prev => !prev)}
        value="تاريخ الوصول تاريخ المغادرة"
      />

      {/* 2. إظهار التقويم شرطياً */}
      {open && (
        <div className="absolute z-20 mt-2 shadow-lg">
          <DateRange
            editableDateInputs
            onChange={handleChange}
            moveRangeOnFirstSelection={false}
            months={2}
            direction="horizontal"
            calendarFocus="forwards"
            ranges={range}
            locale={{
              localize: {
                day:   n => ['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'][n],
                month: n => ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'][n],
              },
              options: { weekStartsOn: 6 }
            }}
          />
        </div>
      )}
    </div>
  )
}
