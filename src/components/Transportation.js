import React from 'react'
import { SlLocationPin } from "react-icons/sl";

function Transportation() {
  return (
    <>
    <div className='md:px-0 px-6'>
      <h1 className='text-2xl font-bold mb-6'>اختيار وسيلة النقل</h1>
      <p className='mb-6'>حدد كيف تود السفر والمدينة التي تنطلق منها.</p>
      </div>
      <div className='md:px-0 px-6'>
      <h1 className='text-md font-[500] mb-6'>مدينة الإنطلاق</h1>
      <p className='mb-6 ps-4 flex items-center text-[#aaa]'> <SlLocationPin className='ms-2 text-2xl flex'/>حدد كيف تود السفر والمدينة التي تنطلق منها.</p>
      </div>
    </>
  )
}

export default Transportation
