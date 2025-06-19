import React from 'react'

function RoomType() {
  return (
    <>
      <section className="bg-white lg:w-[45%]  w-full flex flex-col justify-center mb-8">
        <h2  className='text-md font-medium mb-4'>نوع الغرفة</h2>
        <div className="flex flex-col gap-4">

          <div className="flex items-center w-[100%] justify-between">
            <p>غرفة مفردة</p>
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
            <p>غرفة ثنائية</p>
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
            <p>غرفة ثلاثية</p>
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
            <p>غرفة رباعية</p>
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

export default RoomType
