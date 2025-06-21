'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleService } from '@/store/slices/servicesSlice';
import { selectTotalCost } from '@/store/slices/totalCostSlice';

// List of additional services
const services = [
  {
    key: 'meals',
    label: 'وجبات يومية في الفندق',
    price: 60,
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14.5H22" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 22.5L5.93056 21.5694C6.45933 21.0407 6.72371 20.7763 7.05684 20.626C7.38997 20.4756 7.76314 20.4523 8.50947 20.4057L11.7619 20.2024C13.3604 20.1025 14.1597 20.0525 14.863 19.7148C15.5664 19.377 16.1051 18.7844 17.1824 17.5993L20 14.5H16.5L14.7071 16.2929C14.5879 16.4121 14.5282 16.4718 14.4662 16.5244C14.1472 16.7954 13.7512 16.9594 13.3341 16.9934C13.2529 17 13.1686 17 13 17M13 17C13 16.5353 13 16.303 12.9616 16.1098C12.8038 15.3164 12.1836 14.6962 11.3902 14.5384C11.197 14.5 10.9647 14.5 10.5 14.5H9.71849C8.67345 14.5 8.15093 14.5 7.66095 14.626C7.29599 14.7198 6.94612 14.8647 6.62171 15.0564C6.18617 15.3138 5.81669 15.6833 5.07774 16.4223L2 19.5M13 17H9.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12C5 7.58171 8.58171 4 13 4M13 4C17.4183 4 21 7.58171 21 12M13 4V2.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      
    ),
  },
  {
    key: 'transfer',
    label: 'خدمة الاستقبال والتوصيل',
    price: 100,
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21V22.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 21V22.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 7.28186C4 6.64251 4 6.32283 4.17387 5.93355C4.34773 5.54428 4.52427 5.38606 4.87736 5.06964C6.03437 4.03277 8.36029 2.5 12 2.5C15.6397 2.5 17.9656 4.03277 19.1226 5.06964C19.4757 5.38606 19.6523 5.54428 19.8261 5.93355C20 6.32283 20 6.64251 20 7.28186V14.5C20 17.3284 20 18.7426 19.1213 19.6213C18.2426 20.5 16.8284 20.5 14 20.5H10C7.17157 20.5 5.75736 20.5 4.87868 19.6213C4 18.7426 4 17.3284 4 14.5V7.28186Z" stroke="#AE7639" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M4 14.5C4 14.5 7.73333 15.5 12 15.5C16.2667 15.5 20 14.5 20 14.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 18H6" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 18H19.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 18H13" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6.5H20" stroke="#AE7639" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M2 9.5V10.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 9.5V10.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      
    ),
  },
  {
    key: 'guidedTour',
    label: 'جولة دينية إرشادية',
    price: 60,
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12L6.58998 13.7453C5.6458 14.2285 4.92974 15.0647 4.64652 16.0868C4.16954 17.8083 3.5 20.5686 3.5 22.5M15 12L18.41 13.7453C19.3542 14.2285 20.0703 15.0647 20.3535 16.0868C20.8305 17.8083 21.5 20.5686 21.5 22.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7.5 22.5C7.5 21.3473 8 17.5 8.50137 16.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8.5 17.4586C9.9359 17.6947 13.3462 17.0336 15.5 12.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12.5 20.5C12.5 20.5 17.5 18.5 18.5 14" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round"/>
<path d="M20.5 17C20.0452 19.2075 19 21.5 17.5 22.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round"/>
<path d="M16.0005 9.55826L16.421 7.4029C16.9159 4.86646 15.0233 2.5 12.5 2.5C9.97667 2.5 8.08414 4.86646 8.57901 7.4029L8.99952 9.55826C9.33325 11.2688 10.7983 12.5 12.5 12.5C14.2017 12.5 15.6668 11.2688 16.0005 9.55826Z" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8.5 6.5L11.5299 5.6362C12.1668 5.4546 12.8332 5.4546 13.4701 5.6362L16.5 6.5" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
  {
    key: 'comfortPack',
    label: 'باقة راحة المعتمر',
    price: 20,
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14C14.7614 14 17 11.7614 17 9Z" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21" stroke="#AE7639" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
  },
];

export default function AdditionalServices() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.services.selected);
  const totalCost = useSelector(selectTotalCost);

  useEffect(() => {
    console.log('✅ Total cost after update:', totalCost);
  }, [totalCost]);

  const toggle = (key) => dispatch(toggleService(key));

  const baseBtn = 'text-sm font-semibold px-4 py-2 m-2 rounded flex items-center justify-center';
  const inactive = 'bg-[#AE7639] text-white';
  const active = 'bg-white border border-[#AE7639] text-[#AE7639]';

  return (
    <>
      <div className="max-w-full md:px-0 px-6">
        <h1 className="text-2xl font-bold mb-2 mt-12">خدمات إضافية لتحسين تجربتك</h1>
        <p className="mb-6">اختر من بين مجموعة من الخدمات التي تجعل رحلتك أكثر راحة وسهولة.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
        {services.map(({ key, label, icon }) => {
          const isSelected = selected.includes(key);
          return (
            <div
              key={key}
              className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
              style={{
                border: '1px solid rgba(255,255,255,1)',
                boxShadow: '0px 1px 3px rgba(13, 13, 18, 0.05)',
              }}
            >
              <div className="flex items-center gap-3">
                {icon}
                <span className="font-medium text-[#37322C]">{label}</span>
              </div>

              <button
                onClick={() => toggle(key)}
                className={`${baseBtn} ${isSelected ? active : inactive}`}
              >
                {isSelected ? ( <><svg
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
                    </svg>تم الإضافة </> ) : 'أضف الخدمة'}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
