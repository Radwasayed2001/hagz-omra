'use client';
import React, { useState, useRef, useEffect } from 'react';
import { SlLocationPin } from "react-icons/sl";

// --- Inline SVG Components ---
const CarIcon = ({ color }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.668 15.4222V18.5C22.668 18.9659 22.668 19.1989 22.5919 19.3827C22.4904 19.6277 22.2957 19.8224 22.0507 19.9239C21.8669 20 21.6339 20 21.168 20C20.7021 20 20.4691 20 20.2853 19.9239C20.0403 19.8224 19.8456 19.6277 19.7441 19.3827C19.668 19.1989 19.668 18.9659 19.668 18.5C19.668 18.0341 19.668 17.8011 19.5919 17.6173C19.4904 17.3723 19.2957 17.1776 19.0507 17.0761C18.8669 17 18.6339 17 18.168 17H7.16797C6.70203 17 6.46906 17 6.28529 17.0761C6.04026 17.1776 5.84558 17.3723 5.74409 17.6173C5.66797 17.8011 5.66797 18.0341 5.66797 18.5C5.66797 18.9659 5.66797 19.1989 5.59185 19.3827C5.49036 19.6277 5.29568 19.8224 5.05065 19.9239C4.86688 20 4.63391 20 4.16797 20C3.70203 20 3.46906 20 3.28529 19.9239C3.04026 19.8224 2.84558 19.6277 2.74409 19.3827C2.66797 19.1989 2.66797 18.9659 2.66797 18.5V15.4222C2.66797 14.22 2.66797 13.6188 2.8396 13.052C3.01123 12.4851 3.34468 11.9849 4.01157 10.9846L4.66797 10L5.62951 7.69231C6.37523 5.90257 6.7481 5.0077 7.50387 4.50385C8.25964 4 9.22909 4 11.168 4H14.168C16.1069 4 17.0763 4 17.8321 4.50385C18.5879 5.0077 18.9607 5.90257 19.7065 7.69231L20.668 10L21.3244 10.9846C21.9913 11.9849 22.3247 12.4851 22.4964 13.052C22.668 13.6188 22.668 14.22 22.668 15.4222Z"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path
      d="M2.66797 8.5L4.66797 10L6.42911 10.4403C6.58775 10.4799 6.75066 10.5 6.91418 10.5H18.4218C18.5853 10.5 18.7482 10.4799 18.9069 10.4403L20.668 10L22.668 8.5"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.668 14V14.0108" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66797 14V14.0108" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BusIcon = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 20.5V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 20.5V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path
      d="M4 6.78186C4 6.14251 4 5.82283 4.17387 5.43355C4.34773 5.04428 4.52427 4.88606 4.87736 4.56964C6.03437 3.53277 8.36029 2 12 2C15.6397 2 17.9656 3.53277 19.1226 4.56964C19.4757 4.88606 19.6523 5.04428 19.8261 5.43355C20 5.82283 20 6.14251 20 6.78186V14C20 16.8284 20 18.2426 19.1213 19.1213C18.2426 20 16.8284 20 14 20H10C7.17157 20 5.75736 20 4.87868 19.1213C4 18.2426 4 16.8284 4 14V6.78186Z"
      stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M4 14C4 14 7.73333 15 12 15C16.2667 15 20 14 20 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.5 17.5H6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 17.5H19.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 17.5H13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 6H20" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 9V10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 9V10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlaneIcon = ({ color }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.2007 3.7804C17.1271 3.03188 18.1647 2.98644 19.2984 3.00233C19.8848 3.01055 20.178 3.01467 20.4132 3.10588C20.7864 3.2506 21.0834 3.54764 21.2281 3.92081C21.3193 4.15601 21.3234 4.4492 21.3317 5.03557C21.3476 6.16926 21.3021 7.20686 20.5536 8.13326C19.9233 8.91337 18.8399 9.32101 18.3186 10.1821C17.9206 10.8395 18.106 11.5203 18.277 12.2209L19.5568 17.4662C19.8119 18.5115 19.6178 19.1815 18.8869 19.9124C18.498 20.3013 18.1745 20.2816 17.8591 19.779L13.9967 13.6249L12.1521 15.0911C11.4833 15.6228 11.1489 15.8886 10.9732 16.2627C10.5616 17.1388 10.8229 18.4547 10.8362 19.4046C10.8436 19.9296 10.3899 20.9644 9.7479 20.9993C9.35155 21.0209 9.21682 20.5468 9.0888 20.2558L7.85633 17.4544C7.56159 16.7845 7.54951 16.7724 6.87955 16.4777L4.07814 15.2452C3.78717 15.1172 3.31313 14.9824 3.3347 14.5861C3.36964 13.9441 4.40435 13.4904 4.92935 13.4978C5.87931 13.5111 7.19521 13.7724 8.07133 13.3608C8.44541 13.1851 8.71123 12.8507 9.24287 12.1819L10.7091 10.3373L4.55502 6.47489C4.05244 6.15946 4.03271 5.83597 4.42154 5.44715C5.15249 4.7162 5.8225 4.52214 6.86776 4.77718L12.1131 6.05703C12.8137 6.22798 13.4945 6.41343 14.1519 6.0154C15.013 5.49411 15.4206 4.41074 16.2007 3.7804Z"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- City → transports + prices + matching icon component ---
const cityTransports = {
  الرياض: [
    { key:'bus',   label:'باص',   Icon:BusIcon,   price:60 },
    { key:'car',   label:'سيارة', Icon:CarIcon,   price:120 },
    { key:'plane', label:'طائرة', Icon:PlaneIcon, price:250 },
  ],
  جدة: [
    { key:'bus',   label:'باص',   Icon:BusIcon,   price:50 },
    { key:'car',   label:'سيارة', Icon:CarIcon,   price:100 },
  ],
  الدمام: [
    { key:'bus',   label:'باص',   Icon:BusIcon,   price:40 },
    { key:'plane', label:'طائرة', Icon:PlaneIcon, price:220 },
  ],
  أبها: [
    { key:'car',   label:'سيارة', Icon:CarIcon,   price:140 },
    { key:'plane', label:'طائرة', Icon:PlaneIcon, price:260 },
  ],
};

export default function Transportation() {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTransport, setSelectedTransport] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const transports = selectedCity ? cityTransports[selectedCity] || [] : [];

  return (
    <div className="md:px-0 px-6 space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold">اختيار وسيلة النقل</h1>
        <p className="mt-2">حدد كيف تود السفر والمدينة التي تنطلق منها.</p>
      </div>

      {/* City Dropdown */}
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full flex justify-between items-center border border-gray-300 rounded-md px-4 py-3 text-right cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <div className="flex items-center space-x-2">
            <SlLocationPin className="text-[#aaa] text-xl" />
            <span className={`${selectedCity ? 'text-black' : 'text-[#aaa]'}`}>
              {selectedCity || 'اختر المدينة'}
            </span>
          </div>
          <svg
            className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
            {Object.keys(cityTransports).map(city => (
              <li
                key={city}
                onClick={() => {
                  setSelectedCity(city);
                  setSelectedTransport('');
                  setOpen(false);
                }}
                className="cursor-pointer px-4 py-2 hover:bg-[#F6F6F6] text-right"
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Transport Cards */}
      {selectedCity && (
        <div className="grid grid-cols-3 gap-4">
          {transports.map(({ key, label, Icon, price }) => {
            const isSelected = selectedTransport === key;
            const borderColor = isSelected ? 'border-[#AE7639]' : 'border-gray-300';
            const bgColor     = isSelected ? 'bg-[#FAF5EE]'   : 'bg-white';
            const iconColor   = isSelected ? '#AE7639'         : '#ABADB7';

            return (
              <div
                key={key}
                onClick={() => setSelectedTransport(key)}
                className={`
                  flex flex-col items-center justify-center
                  p-4 rounded-lg shadow-sm cursor-pointer
                  border ${borderColor} ${bgColor}
                  hover:shadow-md transition
                `}
              >
                {/* icon */}
                <Icon color={iconColor}/>

                {/* label */}
                

                {/* price: only render when this card is selected */}
                {isSelected ? (
                  <>
                  <span className="font-medium mt-2 text-[#AE7639]">{label}</span>
                  <span className="mt-1 text-sm font-semibold" style={{ color: '#AE7639' }}>
                    {price} ريال
                  </span>
                  </>
                ):
                <span className="font-medium mt-2">{label}</span>
                }
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
