'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// 1) مصفوفة الخدمات الإضافية
const services = [
  {
    key: 'meals',
    label: 'وجبات يومية في الفندق',
    price: 60,
    Icon: () => (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.5H22" stroke="#AE7639" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 22.5L5.93056 21.5694C6.45933 21.0407 6.72371 20.7763 7.05684 20.626C7.38997 20.4756 7.76314 20.4523 8.50947 20.4057L11.7619 20.2024C13.3604 20.1025 14.1597 20.0525 14.863 19.7148C15.5664 19.377 16.1051 18.7844 17.1824 17.5993L20 14.5H16.5L14.7071 16.2929C14.5879 16.4121 14.5282 16.4718 14.4662 16.5244C14.1472 16.7954 13.7512 16.9594 13.3341 16.9934C13.2529 17 13.1686 17 13 17M13 17C13 16.5353 13 16.303 12.9616 16.1098C12.8038 15.3164 12.1836 14.6962 11.3902 14.5384C11.197 14.5 10.9647 14.5 10.5 14.5H9.71849C8.67345 14.5 8.15093 14.5 7.66095 14.626C7.29599 14.7198 6.94612 14.8647 6.62171 15.0564C6.18617 15.3138 5.81669 15.6833 5.07774 16.4223L2 19.5M13 17H9.5" stroke="#AE7639" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12C5 7.58171 8.58171 4 13 4M13 4C17.4183 4 21 7.58171 21 12M13 4V2.5" stroke="#AE7639" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    key: 'pickup',
    label: 'خدمة الاستقبال والتوصيل',
    price: 100,
    Icon: () => (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* … same bus SVG from before … */}
      </svg>
    )
  },
  {
    key: 'guided',
    label: 'جولة دينية إرشادية',
    price: 60,
    Icon: () => (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* … same guide SVG … */}
      </svg>
    )
  },
  {
    key: 'comfort',
    label: 'باقة راحة المعتمر',
    price: 20,
    Icon: () => (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* … same comfort package SVG … */}
      </svg>
    )
  },
];

export default function AdditionalServices() {
  // 2) حالة تخزن set of selected keys
  const [selected, setSelected] = useState(new Set());

  const toggle = (key) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  // 3) Button styles
  const baseBtn = 'text-sm font-semibold md:px-12 px-0 py-2 m-2 rounded flex items-center justify-center';
  const activeBtn = 'bg-white border border-[#AE7639] text-[#AE7639] cursor-pointer';
  const inactiveBtn = 'bg-[#AE7639] text-white cursor-pointer';

  return (
    <>
      <div className='max-w-full md:px-0 px-6'>
        <h1 className='text-2xl font-bold mb-2 mt-12'>خدمات إضافية لتحسين تجربتك</h1>
        <p className='mb-6'>اختر من بين مجموعة من الخدمات التي تجعل رحلتك أكثر راحة وسهولة.</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] px-4'>
        {services.map(({ key, label, price, Icon }) => {
          const isSel = selected.has(key);
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
                <h2 className='md:text-lg text-sm font-semibold text-[#37322C] flex gap-2'>
                  <Icon />
                  {label}
                </h2>

                <div className='flex flex-col items-center'>
                  <span className='md:text-md text-sm text-[#C09C78] text-center'>
                    السعر: <span className='font-[500] md:text-lg'>{price}</span> ريال / يوم
                  </span>

                  <button
                    onClick={() => toggle(key)}
                    className={`${baseBtn} ${isSel ? activeBtn : inactiveBtn}`}
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
                    {isSel ? 'تم الاضافة' : 'أضف الخدمة'}
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
