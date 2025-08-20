// app/components/HeroWithCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchProducts } from "@/lib/product";
import { product } from "@/types/data";

export default function OutdoorRugs() {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <section className="w-full mt-10">
     
      {products.length > 0 && (
        <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
          
          <Image
            src={products[10].image}
            alt={products[10].title}
            fill
            className="object-cover"
          />

       
          <div className="absolute inset-0 bg-black/30"></div>

        
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl font-bold">{products[10].title}</h1>
            <p className="mt-2 text-lg">Only ${products[10].price}</p>
            <Button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium shadow-lg">
              Shop Now
            </Button>
          </div>
        </div>
      )}

      
      <div className="relative mt-[-50px] mx-auto max-w-4xl  rounded-2xl shadow-lg p-6">
        <Carousel>
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="basis-1/3">
                <Card className="rounded-2xl ">
                  <CardContent className="flex flex-col rounded-full items-center p-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={160}
                      height={160}
                      className="rounded-full w-30 h-30 object-cover mb-3"
                    />
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
