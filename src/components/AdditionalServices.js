'use client';
import React, { useState } from 'react';

const services = [
  {
    key: 'meals',
    label: 'وجبات يومية في الفندق',
    price: 60,
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* … your meal SVG paths … */}
        <path d="M4 14.5H22" stroke="#AE7639" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* … */}
      </svg>
    ),
  },
  {
    key: 'transfer',
    label: 'خدمة الاستقبال والتوصيل',
    price: 100,
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* … your transfer SVG paths … */}
      </svg>
    ),
  },
  {
    key: 'guidedTour',
    label: 'جولة دينية إرشادية',
    price: 60,
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* … your tour SVG paths … */}
      </svg>
    ),
  },
  {
    key: 'comfortPack',
    label: 'باقة راحة المعتمر',
    price: 20,
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* … your comfort SVG paths … */}
      </svg>
    ),
  },
];

export default function AdditionalServices() {
  // Initialize state as empty array
  const [selected, setSelected] = useState([]);

  const toggle = (key) => {
    setSelected((s) =>
      s.includes(key) ? s.filter((k) => k !== key) : [...s, key]
    );
  };

  const baseBtn = 'text-sm font-semibold px-4 py-2 m-2 rounded flex items-center justify-center';
  const inactive = 'bg-[#AE7639] text-white';
  const active   = 'bg-white border border-[#AE7639] text-[#AE7639]';

  return (
    <>
      <div className='max-w-full md:px-0 px-6'>
        <h1 className='text-2xl font-bold mb-2 mt-12'>خدمات إضافية لتحسين تجربتك</h1>
        <p className='mb-6'>
          اختر من بين مجموعة من الخدمات التي تجعل رحلتك أكثر راحة وسهولة.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] px-4'>
        {services.map(({ key, label, price, icon }) => {
          const isSel = selected.includes(key);

          return (
            <div
              key={key}
              className='bg-white rounded-lg shadow-md'
              style={{
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 1)',
                boxShadow: '0px 1px 3px 0px rgba(13, 13, 18, 0.05)',
              }}
            >
              <div className='flex items-center justify-between md:m-4 flex-wrap'>
                {/* icon + label */}
                <h2 className='md:text-lg text-sm font-semibold text-[#37322C] flex gap-2'>
                  {icon}
                  {label}
                </h2>

                {/* price + toggle button */}
                <div className='flex flex-col flex-wrap items-center'>
                  <h2 className='md:text-md text-sm text-[#C09C78] text-center'>
                    السعر: <span className='font-[500] md:text-lg'>{price}</span> ريال / يوم
                  </h2>

                  <button
                    onClick={() => toggle(key)}
                    className={`${baseBtn} ${isSel ? active : inactive}`}
                  >
                    {isSel && (
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
                    )}
                    {isSel ? 'تم الإضافة' : 'أضف الخدمة'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
