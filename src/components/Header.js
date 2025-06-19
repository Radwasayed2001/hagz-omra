"use client";

import { useState } from 'react';
import Link from 'next/link';
import { IoCallOutline } from "react-icons/io5";
import { TbMail } from "react-icons/tb";
import { HiOutlinePhone } from "react-icons/hi";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbBrandFacebook } from "react-icons/tb";
import { PiInstagramLogoBold } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { LuLinkedin } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";

import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="min-h-[60px] tracking-wide relative z-50" dir='rtl'>
      <section className="hidden lg:flex lg:items-center h-12 lg:justify-between bg-[#F6F6F6]  px-4 py-2 sm:px-10  max-sm:flex-col">
        <div className='flex min-h-[40px] bg-[#F6F6F6]  max-sm:flex-col g:flex lg:items-center'>
        <button type="button" className="text-[#37322C] text-sm flex items-center">
          {/* Phone Icon */}
          
          <HiOutlinePhone className="mr-3 inline-block color-white p-2 bg-[#AE7639] text-white rounded-full w-9 h-9"  />
          <span dir='ltr' className='mx-2'>+966512312312</span>
        </button>
        
        
        <button type="button" className="text-[#37322C] text-sm flex items-center">
          {/* Phone Icon */}
          
          <TbMail className="mr-3 inline-block color-white p-2 bg-[#AE7639] text-white rounded-full w-9 h-9"  />
          <span dir='ltr' className='mx-2'>mrmhdcom@gmail.com</span>
        </button>
        
        
        <button type="button" className="text-[#37322C] text-sm flex items-center">
          {/* Phone Icon */}
          
          <HiOutlineLocationMarker className="mr-3 inline-block color-white p-2 bg-[#AE7639] text-white rounded-full w-9 h-9"  />
          <span className='mx-2'> الرياض، المملكة العربية السعودية</span>
        </button>
        </div>
        <div className='flex min-h-[40px] bg-[#F6F6F6]  max-sm:flex-col g:flex lg:items-center'>
        <button type="button" className="text-[#37322C] text-sm flex items-center">
          {/* Phone Icon */}
          
          <TbBrandFacebook className="mr-3 inline-block color-white p-2 bg-[#AE7639] text-white rounded-full w-9 h-9"  />
        </button>
        
        
        <button type="button" className="text-[#37322C] text-sm flex items-center">
          {/* Phone Icon */}
          
          <PiInstagramLogoBold className="mr-3 inline-block color-white p-2 bg-[#AE7639] text-white rounded-full w-9 h-9"  />
        </button>
        
        
        <button type="button" className="text-[#37322C] text-sm flex items-center">
          {/* Phone Icon */}
          
          <BiLogoLinkedin className="mr-3 inline-block color-white p-2 bg-[#AE7639] text-white rounded-full w-9 h-9"  />
        </button>
        </div>
      </section>

      
      <div
  className="relative bg-cover bg-center"
  style={{
    height: "272px",
    backgroundImage: `
      linear-gradient(180deg, rgba(55, 50, 44, 0.16) 0%, rgba(9, 9, 8, 0.16) 99%),
      radial-gradient(50% 50% at 50% 50%, rgba(55, 50, 44, 0.66) 0%, rgba(9, 9, 8, 0.66) 100%),
      linear-gradient(180deg, #090908 0%, rgba(0, 0, 0, 0) 42.67%),
      url('/kaba.png')
    `,
    width: "100vw"
  }}
>
      <div className="flex flex-wrap items-center justify-between lg:justify-between  px-4 sm:px-10 bg-transparent lg:gap-y-4 gap-y-6 gap-x-4">
        <Link href="#" className='flex items-center'>
          <Image src= "/Logo.png" alt="logo" width={90} height={70} />
          <h1 className='text-[#AE7639] font-bold text-xl pb-6'>حجز عمرة</h1>
        </Link>

        {/* Mobile toggle button */}
        <button onClick={handleToggle} className="lg:hidden ml-6 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-white" viewBox="0 0 20 20">
            {menuOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636 10 8.586z" />
            ) : (
              <path fillRule="evenodd" clipRule="evenodd" d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z" />
            )}
          </svg>
        </button>

        {/* Menu Overlay */}
        <div
          className={
            menuOpen
              ? 'fixed inset-0 flex justify-between bg-[#151d20] w-2/3 min-w-[50vw] py-4 px-10 shadow-md overflow-auto z-50 lg:flex lg:items-center lg:static lg:inset-auto lg:w-auto lg:min-w-0 lg:py-0 lg:px-0 lg:shadow-none lg:overflow-visible'
              : 'hidden lg:flex lg:items-center w-[60vw] justify-between'
          }
        >
          {/* Close Button inside menu on mobile */}
          <button onClick={handleToggle} className="lg:hidden absolute top-4 right-4 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white cursor-pointer" viewBox="0 0 20 20">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636 10 8.586z" />
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-10 space-y-3 lg:space-y-0 mt-12 lg:mt-0 z-50 text-[#51586F] font-[700]">
            {['الرئيسية', 'الأسئلة الشائعة', 'آراء العملاء'].map(item => (
              <li
                key={item}
                className="border-b border-gray-100 py-3 lg:border-none lg:py-0 relative lg:after:absolute lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300 lg:after:bg-white lg:after:w-0"
              >
                <Link href="#" className="text-white block text-[15px] font-normal">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-6 lg:mt-0">
            <Link href="#" className="text-[#AE7639] font-bold  py-2 rounded-lg">
              العربية
            </Link>
            <span className="border-l border-[#C4A484] h-3 max-sm:hidden" />
            <Link href="#" dir='ltr' className="text-[#F8FAFB]  py-2 rounded-lg">
              English
            </Link>
          </div>
        </div>
       
      </div>
      <div className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
          <div className="relative z-10 lg:text-center">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white !leading-tight text-center">
            ابدأ رحلتك إلى <span className='text-[#AE7639]'>العمرة بكل سهولة</span>
            </h1>
            <span className="text-[#F8FAFB] block text-lg py-4 text-center"> نوفر لك أفضل الخيارات للنقل والإقامة بأسعار تنافسية وخطوات حجز ميسّرة</span>

          </div>
        </div>
      </div>
    </div>
    </header>
  );
}
