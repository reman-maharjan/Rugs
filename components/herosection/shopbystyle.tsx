"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { fetchProducts } from "@/lib/product";
import { product } from "@/types/data";
import Image from 'next/image'


export default function ShopByStyle() {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      console.log(data);
      setProducts(data.slice(10,20));
    }
    loadProducts();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop by Style</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <Card className="border-0 shadow-none bg-transparent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative mb-4">

                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center p-6 group-hover:from-cyan-200 group-hover:to-cyan-300 transition-all duration-300">
                    <div className="relative">
                      <Image
                        src={product.image}
                        alt={product.title}
                        className="w-32 h-32 object-cover rounded-lg shadow-md transform group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop';
                        }}
                      />

                      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white rounded-lg shadow-sm opacity-80 -z-10 transform rotate-12"></div>
                      <div className="absolute -bottom-1 -right-1 w-28 h-28 bg-gray-100 rounded-lg shadow-sm opacity-60 -z-20 transform rotate-6"></div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {product.category}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}