 'use client';
  import Hero from "@/components/Hero";
  import Transportation from "@/components/Transportation";
  import Details from "@/components/Details";
  import TravellerNum from "@/components/TravellerNum";
  import RoomType from "@/components/RoomType";
  import HotelChoice from "@/components/HotelChoice";
  import AdditionalServices from "@/components/AdditionalServices";
  import FAQ from "@/components/FAQ";
  import Testimonials from "@/components/Testimonials";
  import WhyUs from "@/components/WhyUs";
  import Footer from "@/components/Footer";
  import TotalPrice from "@/components/TotalPrice";
  import { useSelector } from 'react-redux';
  import { selectTotalCost } from '@/store/slices/totalCostSlice';

export default function Home() {
  const total = useSelector(selectTotalCost);
  return (
    <>
      <Hero />

      {/* من هنا */}
      <div className="mt-10 max-w-6xl px-4 mx-auto" dir="rtl">
        {/* flex-row على شاشات كبيرة */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* الـ form + controls (يمين) */}
          <div className="flex-1 space-y-8">
            <Transportation />
            <Details />

            <div className="flex flex-wrap justify-between gap-6">
              <TravellerNum />
              <RoomType />
            </div>

            <HotelChoice />
            <AdditionalServices />
            
          </div>

          {/* ONLY RENDER SIDEBAR WHEN total > 0 */}
         {total > 0 && (
            <div className="lg:w-1/3">
              <TotalPrice />
            </div>
         )}
        </div>
      </div>
      {/* لـ هنا */}

      <div className="mt-10 px-4" dir="rtl">
      <FAQ />
        <Testimonials />
      </div>
      <WhyUs />
      <Footer />
    </>
  );
}
