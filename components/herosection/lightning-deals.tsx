'use client';

import React, { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/product";
import { product } from "@/types/data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image'


export default function LightningDeals() {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data.slice(0, 7));
    }
    loadProducts();
  }, []);

  return (
    <div className="bg-gray-100 rounded-xl p-8 mt-8">
      <h2 className="font-bold text-2xl mb-8">Lightning Deals</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {products.map((product, idx) => (
            <CarouselItem key={idx} className="basis-1/4">
              <div className="text-center w-56 ">
                <Image
                  src={product.image}
                  alt={product.title}
                    width={300}
                  height={192}
                  className="w-56 h-56 object-cover rounded-xl bg-white mx-auto"
                />
                <div className="mt-4 font-medium text-base">{product.title}</div>
                <div className="text-green-700 font-bold text-lg mt-2">${product.price}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}