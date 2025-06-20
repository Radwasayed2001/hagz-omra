import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function WhyUs() {
    const features = [
        {
            title: "حجز آمن",
            description: "حماية كاملة لبياناتك",
            icon: <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 17.3333C12.5 17.3333 13.8333 17.3333 15.1667 20C15.1667 20 19.402 13.3333 23.1667 12" stroke="#F8FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.5 14.9109V11.0402C28.5 8.85356 28.5 7.76021 27.9612 7.04689C27.4224 6.33356 26.2041 5.98725 23.7676 5.29464C22.1029 4.82144 20.6355 4.25134 19.4631 3.73089C17.8645 3.0213 17.0653 2.6665 16.5 2.6665C15.9347 2.6665 15.1355 3.0213 13.5369 3.73089C12.3645 4.25134 10.8971 4.82142 9.23244 5.29464C6.79591 5.98725 5.57763 6.33356 5.03881 7.04689C4.5 7.76021 4.5 8.85356 4.5 11.0402V14.9109C4.5 22.4112 11.2504 26.9112 14.6253 28.6924C15.4348 29.1196 15.8395 29.3332 16.5 29.3332C17.1605 29.3332 17.5652 29.1196 18.3747 28.6924C21.7496 26.9112 28.5 22.4112 28.5 14.9109Z" stroke="#F8FAFB" strokeWidth="2" strokeLinecap="round"/>
            </svg>,
          },
        {
          title: 'دعم على مدار الساعة',
          description: '24/7 فريقنا لمساعدتك',
          icon: <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.166 15.7395C23.166 15.2786 23.166 15.0482 23.2353 14.8428C23.4369 14.246 23.9684 14.0146 24.5008 13.772C25.0993 13.4994 25.3985 13.3631 25.6951 13.3391C26.0317 13.3119 26.3689 13.3844 26.6567 13.5459C27.0381 13.7599 27.3041 14.1667 27.5765 14.4975C28.8344 16.0252 29.4632 16.7892 29.6933 17.6316C29.8791 18.3114 29.8791 19.0223 29.6933 19.702C29.3577 20.9307 28.2973 21.9607 27.5124 22.914C27.1109 23.4016 26.9101 23.6455 26.6567 23.7878C26.3689 23.9492 26.0317 24.0218 25.6951 23.9946C25.3985 23.9706 25.0993 23.8343 24.5008 23.5616C23.9684 23.3191 23.4369 23.0876 23.2353 22.4908C23.166 22.2855 23.166 22.0551 23.166 21.5942V15.7395Z" stroke="#F8FAFB" strokeWidth="2"/>
          <path d="M9.83268 15.7396C9.83268 15.1593 9.81639 14.6377 9.34723 14.2297C9.17659 14.0813 8.95035 13.9783 8.4979 13.7721C7.89936 13.4996 7.6001 13.3633 7.30356 13.3393C6.4139 13.2673 5.93524 13.8745 5.42219 14.4977C4.16435 16.0255 3.53543 16.7893 3.3053 17.6317C3.11959 18.3116 3.11959 19.0225 3.3053 19.7023C3.64095 20.9309 4.70138 21.9608 5.4863 22.9143C5.98107 23.5152 6.45371 24.0635 7.30356 23.9948C7.6001 23.9708 7.89936 23.8344 8.4979 23.5619C8.95035 23.3557 9.17659 23.2527 9.34723 23.1043C9.81639 22.6963 9.83268 22.1748 9.83268 21.5944V15.7396Z" stroke="#F8FAFB" strokeWidth="2"/>
          <path d="M27.1673 13.9998V11.9998C27.1673 6.84518 22.3917 2.6665 16.5007 2.6665C10.6096 2.6665 5.83398 6.84518 5.83398 11.9998V13.9998" stroke="#F8FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M27.1667 23.3335C27.1667 29.3335 21.8333 29.3335 16.5 29.3335" stroke="#F8FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>,
        },
        
        {
            title: "حجز فوري ومضمون",
            description: "تأكيد فوري للحجز",
            icon: <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.8327 15.9998C29.8327 8.63604 23.8631 2.6665 16.4993 2.6665C9.13555 2.6665 3.16602 8.63604 3.16602 15.9998C3.16602 23.3636 9.13555 29.3332 16.4993 29.3332C23.8631 29.3332 29.8327 23.3636 29.8327 15.9998Z" stroke="#F8FAFB" strokeWidth="2"/>
            <path d="M11.166 16.6667L14.4993 20L21.8327 12" stroke="#F8FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
          },
      ];
  return (
    <div
  className="relative bg-cover bg-bottom bg-center lg:h-[360px] h-[685px]"
  style={{
    backgroundImage: `
      linear-gradient(180deg, rgba(55, 50, 44, 0.16) 0%, rgba(9, 9, 8, 0.16) 99%),
      radial-gradient(50% 50% at 50% 50%, rgba(55, 50, 44, 0.66) 0%, rgba(9, 9, 8, 0.66) 100%),
      linear-gradient(180deg, #090908 0%, rgba(0, 0, 0, 0) 42.67%),
      url('/kaba.png')
    `,
    width: "100vw"
  }}
>
      
      <div className="relative overflow-hidden flex items-center h-full">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 flex lg:flex-row gap-4 flex-col lg:items-center lg:justify-between items-center w-full">
            <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white !leading-tight text-start">
         لماذا <span className='text-[#AE7639]'>تختار منصتنا ؟</span>
            </h1>
            <div className='flex gap-2 justify-center lg:flex-row flex-col'>
            {features.map((feature, index) => (
            <div
              key={index}
              className="background-blur-sm  bg-[#F8FAFB]/22 p-6 rounded-lg text-center w-[226px] flex flex-col items-center"
            >
              <div className=" text-3xl mb-4 background-blur-sm bg-[#AE7639]/22 rounded-full w-14 h-14 p-2 flex justify-center items-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#F8FAFB] mb-2">{feature.title}</h3>
              <p className="text-[#F8FAFB]">{feature.description}</p>
            </div>
          ))}
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
