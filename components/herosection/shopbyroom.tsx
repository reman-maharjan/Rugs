'use client';

import React, { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/product";
import { product } from "@/types/data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image'


export default function ShopByRooom() {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data.slice(10,40 ));
    }
    loadProducts();
  }, []);

  return (
    <div className="bg-gray-100 rounded-xl p-8 mt-8">
      <h2 className="font-bold text-2xl mb-8">Shop By room</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {products.map((product, idx) => (
            <CarouselItem key={idx} className="basis-1/4">
              <div className="text-center w-56 ">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-56 h-56 object-cover rounded-full bg-white mx-auto"
                />
                <div className="mt-4 font-medium text-base">{product.category}</div>
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