import React from 'react'

function TravellerNum() {
  return (
    <>
      <section className="bg-white lg:w-[45%]  w-full flex flex-col justify-center mb-4">
        <h2  className='text-md font-medium mb-4'>عدد المسافرين</h2>
        <div className="flex flex-col gap-4">

          <div className="flex items-center w-[100%] justify-between">
            <div>
              <p className='flex gap-2'><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 6.875C12.75 4.80393 11.071 3.125 9 3.125C6.92893 3.125 5.25 4.80393 5.25 6.875C5.25 8.94605 6.92893 10.625 9 10.625C11.071 10.625 12.75 8.94605 12.75 6.875Z" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.25 15.875C14.25 12.9755 11.8995 10.625 9 10.625C6.10051 10.625 3.75 12.9755 3.75 15.875" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
</svg> البالغين</p>
              <p className="text-sm text-[#aaa]">13 سنة فما فوق</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className=" rounded-full w-[25px] h-[25px] flex justify-center items-center"><svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 1.5H1.5" stroke="#37322C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></button>
              <span className="w-6 text-center">1</span>
              <button className=" bg-[#AE7639] text-white rounded-full w-[25px] h-[25px] flex justify-center items-center"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 1.5V13.5M13.5 7.5H1.5" stroke="#F8FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></button>
            </div>
          </div>

          <div className="flex items-center w-[100%] justify-between">
            <div>
              <p  className='flex gap-2'><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.625 8.75C2.00368 8.75 1.5 8.2463 1.5 7.625C1.5 7.00368 2.00368 6.5 2.625 6.5H3.18902C3.85509 3.91216 6.20424 2 9 2C11.7958 2 14.1449 3.91216 14.811 6.5H15C15.6213 6.5 16.125 7.00368 16.125 7.625C16.125 8.2463 15.6213 8.75 15 8.75H14.9536C14.5845 11.7097 12.0597 14 9 14C5.94029 14 3.41549 11.7097 3.04642 8.75H2.625Z" stroke="#37322C" strokeWidth="1.2" strokeLinejoin="round"/>
<path d="M3.375 6.5H4.5C6.98528 6.5 9 4.48528 9 2" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.625 6.5H13.5C11.0147 6.5 9 4.48528 9 2" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 11.75C9.41422 11.75 9.75 11.4142 9.75 11H8.25C8.25 11.4142 8.58578 11.75 9 11.75Z" stroke="#37322C" strokeWidth="1.2" strokeLinejoin="round"/>
<path d="M13.5 17C13.5 15.656 12.9108 14.4496 11.9765 13.625M4.5 17C4.5 15.656 5.08922 14.4496 6.02344 13.625" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round"/>
<path d="M6.75 8V8.0075" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round"/>
<path d="M11.25 8V8.0075" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round"/>
</svg>الأطفال</p>
              <p className="text-sm text-[#aaa]">2-12 سنة</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className=" rounded-full w-[25px] h-[25px] flex justify-center items-center"><svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 1.5H1.5" stroke="#37322C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></button>
              <span className="w-6 text-center">0</span>
              <button className=" bg-[#AE7639] text-white rounded-full w-[25px] h-[25px] flex justify-center items-center"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 1.5V13.5M13.5 7.5H1.5" stroke="#F8FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></button>
            </div>
          </div>
          <div className="flex items-center w-[100%] justify-between">
            <div>
              <p  className='flex gap-2'><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 4.80343C10.5 4.80343 9.66367 5.17856 9.07627 4.89238C8.35979 4.54339 7.64932 3.08464 9.06854 2" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.00673 7.25H6M12 7.25H11.9933" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 11.75C6.68409 12.6608 7.77323 13.25 9 13.25C10.2268 13.25 11.3159 12.6608 12 11.75" stroke="#37322C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>الرضع</p>
              <p className="text-sm text-[#aaa]">أقل من سنتين</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className=" rounded-full w-[25px] h-[25px] flex justify-center items-center"><svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 1.5H1.5" stroke="#37322C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></button>
              <span className="w-6 text-center">0</span>
              <button className=" bg-[#AE7639] text-white rounded-full w-[25px] h-[25px] flex justify-center items-center"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 1.5V13.5M13.5 7.5H1.5" stroke="#F8FAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TravellerNum
