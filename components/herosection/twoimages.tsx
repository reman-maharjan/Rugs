// app/components/TwoImagesWithSeparateOverlay.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { fetchProducts } from "@/lib/product";
import { product } from "@/types/data";


export default function TwoImagesWithSeparateOverlay() {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <section className="flex w-full h-[500px] gap-4">
      {products.slice(0, 2).map((product) => (
        <div key={product.id} className="relative w-1/2 h-full rounded-2xl overflow-hidden">
          {/* Background image */}
          <Image
            src={product.image}
            alt={product.title}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text + Button overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="mt-2 text-lg">Only ${product.price}</p>
            <Button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium shadow-lg">
              Shop Now
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}
