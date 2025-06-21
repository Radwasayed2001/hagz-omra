'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SlLocationPin } from 'react-icons/sl';
import { setTransport } from '../store/slices/transportationSlice';
import { selectTotalCost } from '../store/slices/totalCostSlice';

// --- Inline SVG Components ---
const CarIcon = ({ color }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    {/* ...paths... */}
  </svg>
);
const BusIcon = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    {/* ...paths... */}
  </svg>
);
const PlaneIcon = ({ color }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    {/* ...paths... */}
  </svg>
);

// City → transports + prices + matching icon component
const cityTransports = {
  الرياض: [ { key:'bus', label:'باص',   Icon:BusIcon,   price:60 },
            { key:'car', label:'سيارة', Icon:CarIcon,   price:120 },
            { key:'plane',label:'طائرة', Icon:PlaneIcon, price:250 } ],
  جدة:    [ { key:'bus', label:'باص',   Icon:BusIcon,   price:50 },
            { key:'car', label:'سيارة', Icon:CarIcon,   price:100 } ],
  الدمام: [ { key:'bus', label:'باص',   Icon:BusIcon,   price:40 },
            { key:'plane',label:'طائرة', Icon:PlaneIcon, price:220 } ],
  أبها:  [ { key:'car', label:'سيارة', Icon:CarIcon,   price:140 },
            { key:'plane',label:'طائرة', Icon:PlaneIcon, price:260 } ],
};

export default function Transportation() {
  const dispatch = useDispatch();
  const totalCost = useSelector(selectTotalCost);

  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTransport, setSelectedTransport] = useState('');
  const dropdownRef = useRef(null);

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // log total when it changes
  useEffect(() => {
    console.log('Total cost updated:', totalCost);
  }, [totalCost]);

  const transports = selectedCity ? cityTransports[selectedCity] || [] : [];

  // handle selection and dispatch
  const handleSelectTransport = ({ key, price }) => {
    setSelectedTransport(key);
    dispatch(setTransport({ city: selectedCity, method: key, price }));
  };

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
                onClick={() => handleSelectTransport({ key, price })}
                className={
                  `flex flex-col items-center justify-center p-4 rounded-lg shadow-sm cursor-pointer border ${borderColor} ${bgColor} hover:shadow-md transition`
                }
              >
                <Icon color={iconColor} />
                <span className={`font-medium mt-2 ${isSelected ? 'text-[#AE7639]' : ''}`}>{label}</span>
                {isSelected && (
                  <span className="mt-1 text-sm font-semibold" style={{ color: '#AE7639' }}>
                    {price} ريال
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}