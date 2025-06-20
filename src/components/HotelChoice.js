'use client';
import Image from 'next/image'
import React, { useState } from 'react'

function HotelChoice() {
  const [selectedHotel, setSelectedHotel] = useState(null);

  // pull out the common button classes
  const baseBtn = 'px-4 py-2 m-2 rounded font-semibold flex items-center justify-center';
  const activeBtn = 'bg-white border border-[#AE7639] text-[#AE7639]';
  const inactiveBtn = 'bg-[#AE7639] text-white cursor-pointer';

  return (
    <>
      <div className='max-w-full md:px-0 px-6'>
        <h1 className='text-2xl font-bold mb-2 mt-12'>اختر فندقك المفضل</h1>
        <p className='mb-6'>نوفر لك مجموعة مختارة من أفضل الفنادق القريبة من الحرم المكي لتناسب جميع احتياجاتك</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
        {[{
           img: '/ماريوت.png',
           name:'فندق ماريوت جبل عمر',
           price:100,
         },{
           img:'/هوليدي.png',
           name:'فندق هوليدي ان',
           price:70,
         }].map((hotel, idx) => {
          const isSel = selectedHotel === idx;
          return (
            <div 
              key={idx}
              className='bg-white rounded-lg shadow-md'
              style={{
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 1)',
                boxShadow: '0px 1px 3px 0px rgba(13, 13, 18, 0.05)',
              }}
            >
              <div 
                style={{
                  height: '200px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              >
                <Image 
                  src={hotel.img} 
                  alt='Hotel Image' 
                  layout="fill" 
                  objectFit="cover" 
                  objectPosition='center'
                  style={{
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                  }}
                />
              </div>

              <div className='flex items-center justify-between m-4'>
                <h2 className='text-xl font-semibold mb-2 text-[#37322C]'>{hotel.name}</h2>
                {/* stars omitted for brevity */}
              </div>

              <div className='flex items-center justify-between m-4 flex-wrap'>
                {/* show check icon when selected */}
                {isSel ?(
                  <button
                  onClick={() => setSelectedHotel(idx)}
                  className={`${baseBtn} ${isSel ? activeBtn : inactiveBtn}`}
                >
                  
                    <svg 
                      width="25" 
                      height="24" 
                      viewBox="0 0 25 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                    >
                      <path 
                        d="M7.5 12.9L10.6429 16.5L18.5 7.5" 
                        stroke="#AE7639" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>

                  تم اختيار هذا الفندق
                </button>
                  ) : (
                    <button
                  onClick={() => setSelectedHotel(idx)}
                  className={`${baseBtn} ${isSel ? activeBtn : inactiveBtn}`}
                >
                  
                    

                  اختيار هذا الفندق
                </button>
                  )
                }

                <h2 className='md:text-xl text-lg text-[#37322C]'>
                  <span className='font-[500] md:text-2xl'>{hotel.price}</span> ريال/لليلة
                </h2>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default HotelChoice
