'use client';
import React, { useState } from 'react';

const faqs = [
  {
    question: 'كيف يمكنني حجز رحلة عمرة؟',
    answer: `يمكنك استخدام المنصة لاختيار وسيلة النقل، الوجهة، التواريخ،
      وعدد المسافرين ثم إتمام الحجز بسهولة من خلال صفحة الدفع.`,
  },
  {
    question: 'هل يمكنني تعديل أو إلغاء الحجز؟',
    answer: `نعم، يمكنك تعديل أو إلغاء الحجز من خلال صفحة "إدارة الحجز"
      قبل 48 ساعة من موعد السفر بدون أي رسوم إضافية.`,
  },
  {
    question: 'كيف أعرف إن كان الباص متاحًا في يوم معين؟',
    answer: `بمجرد اختيار التاريخ في حقل "تاريخ الذهاب"، ستظهر لك خيارات
      وسائل النقل المتاحة لذلك اليوم مع الأسعار والمقاعد المتبقية.`,
  },
  {
    question: 'هل الدفع آمن على المنصة؟',
    answer: `نعم، نحن نستخدم بروتوكولات التشفير القياسية (SSL/TLS)
      لضمان أمان بياناتك عند الدفع عبر البطاقات الائتمانية.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-full px-0 md:px-24 py-10 lg:py-14 mt-8" id="faq">
      <div className="mb-10 lg:mb-14 text-center">
        <h2 className="text-3xl font-bold md:text-5xl md:leading-tight text-[#0F1A24]">
          الأسئلة <span className="text-[#AE7639]">الشائعة</span>
        </h2>
        <p className="mt-1 text-[#37322C] text-lg">
          إجابات على أكثر الأسئلة التي قد تخطر ببالك لتسهيل عملية الحجز.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map(({ question, answer }, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl p-6 border-2 ${
                isOpen
                  ? 'border-[#AE7639] bg-gray-100'
                  : 'border-[#AE7639] bg-white'
              } transition`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full cursor-pointer flex items-center justify-between text-[#37322C] font-semibold text-lg"
                aria-expanded={isOpen}
              >
                <span>{question}</span>

                {/* closed: down arrow; open: up arrow */}
                {isOpen ? (
                  <svg
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="p-4 bg-[#AE7639] text-white rounded-full w-12 h-12"
                >
                  <path
                    d="M13.1816 1.33691C13.1816 1.33691 8.76269 7.3369 7.18159 7.33691C5.60049 7.33692 1.18164 1.33691 1.18164 1.33691"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                
                ) : (
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="p-4 text-[#AE7639] w-12 h-12"
                  >
                    <path
                      d="M13.1816 7.67139C13.1816 7.67139 8.76269 1.6714 7.18159 1.67139C5.60049 1.67138 1.18164 7.67139 1.18164 7.67139"
                      stroke="#AE7639"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              {isOpen && (
                <div className="mt-4 text-[#37322C] text-base">
                  {answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
