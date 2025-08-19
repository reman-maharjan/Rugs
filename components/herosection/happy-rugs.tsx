"use client";
import React from "react";
import { useEffect,useState } from "react";
import { product } from "@/types/data";
import { fetchProducts } from "@/lib/product";

export default function VideoAndImages() {
  const [products, setProducts] = useState<product[]>([]);

 useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      console.log(data)
   setProducts(data.slice(0, 3));   
      
    }
    loadProducts();
  }, []);
  return (
    <div className="bg-gray-100 rounded-xl p-8 flex gap-8 items-center mt-8">
    
      <div className="w-1/2">
        <video
          src="/happy-rugs.mp4"
        
          loop
          
          autoPlay
          muted
          className="rounded-xl w-full h-[350px] object-cover"
        />
       
      </div>
      {/* Right: Products */}
      <div className="w-1/2">
        <h2 className="font-bold text-2xl mb-8">Happy Rugs!</h2>
        <div className="flex gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="text-center w-56">
              <img
                src={product.image}
                alt={product.title}
                className="w-56 h-56 rounded-xl bg-white mx-auto"
              />
              <div className="mt-4 font-medium text-base">{product.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}