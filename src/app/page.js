import Hero from "@/components/Hero";
import Image from "next/image";
// src/app/_app.js أو src/pages/_app.js
import '../styles/fonts.css';
import './globals.css'; // أو أي ملف الـ global styles عندك
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

export default function Home() {
  return (
    <>
    <Hero />
    <div className='mt-10 max-w-5xl px-2 mx-auto' dir='rtl'>
      

    <Transportation />
    <Details />
    <div className="flex flex-wrap justify-between ps-4">
    <TravellerNum />
    <RoomType />
    </div>
    <HotelChoice />
    <AdditionalServices />
    <FAQ />
    
    </div>
    <div className='mt-10 px-2' dir='rtl'>
      
    <Testimonials />

    </div>
    <WhyUs />
    <Footer />
    </>
  );
}
