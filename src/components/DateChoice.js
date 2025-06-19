// app/components/DateChoice.jsx   (بكون هذا ملف Server Component)
"use client";
import React from 'react'
import DateRangePickerClient from '../components/DateRangePickerClient'

export default function DateChoice() {
  // عند انتهاء الاختيار، ممكن تتعاملي مع `selection` هنا
  const handleDateChange = (selection) => {
    console.log('Selected range:', selection)
    // هنا يمكنك إرسال البيانات إلى API أو تضمينها في فورم
  }

  return (
    <div>
      <h1 className='text-2xl font-bold mb-6'>ادخل تفاصيل الرحلة</h1>
      <p className='mb-6'>اختر التاريخ، عدد المسافرين، ونوع الغرف.</p>

      <div>
        <h2 className='text-md font-medium mb-4'>تاريخ الذهاب والعودة</h2>
        {/* هذا هو الـClient Component */}
        <DateRangePickerClient onChange={handleDateChange} />
      </div>
    </div>
  )
}
