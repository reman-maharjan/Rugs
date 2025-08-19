// app/components/PromoSection.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 🔹 Big Promo Image */}
        <Card className="col-span-2 overflow-hidden rounded-2xl shadow-md">
          <CardContent className="p-0 relative">
            <div className="relative w-full h-[200px] lg:h-[400px]">
              <img
                src="/markdownsale.webp"
                alt="Mid-Summer Sale"
                className="object-contain bg-gray-100" 
                
              />
            </div>
            <div className="absolute bottom-6 left-6">
              <Button size="lg" className="bg-green-600 text-center hover:bg-green-700">
                Only 2 Days Left!
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 🔹 Side Deals */}
        <div className="flex flex-col gap-6">
          {/* Deal 1 */}
         <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-md w-full mx-auto">
      
      {/* Left Text Section */}
      <div className="flex flex-col justify-center p-8 lg:w-1/2">
        <h2 className="text-gray-800 font-semibold text-lg mb-2">Outdoor Rugs</h2>
        <p className="text-green-600 font-bold text-4xl lg:text-5xl mb-1">75<span className="text-2xl">%</span> OFF</p>
        <p className="text-gray-500 text-sm uppercase">up to</p>
      </div>

      {/* Right Image Section */}
      <div className="relative lg:w-1/2 h-64 lg:h-auto">
        <img
          src="/markdownsale.webp" // place your image in public/images folder
          alt="Outdoor Rug"
          className="object-cover"
        />
      </div>
    </div>


{/* second */}
     <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-md w-full mx-auto">
      
      {/* Left Text Section */}
      <div className="flex flex-col justify-center p-8 lg:w-1/2">
        <h2 className="text-gray-800 font-semibold text-lg mb-2">Outdoor Rugs</h2>
        <p className="text-green-600 font-bold text-4xl lg:text-5xl mb-1">75<span className="text-2xl">%</span> OFF</p>
        <p className="text-gray-500 text-sm uppercase">up to</p>
      </div>

      {/* Right Image Section */}
      <div className="relative lg:w-1/2 h-64 lg:h-auto">
        <img
          src="/markdownsale.webp" // place your image in public/images folder
          alt="Outdoor Rug"
          className="object-cover"
        />
      </div>
    </div>  

      </div>
      </div>
    </section>
  );
}
