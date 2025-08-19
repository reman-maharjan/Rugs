"use client";

import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const categories = [
  {
    title: "Home Decor",
    items: ["Handmade Pillows", "Throw Blankets", "Table Runners", "Pet Beds", "Handmade Trunks", "All Home Decor"],
  },
  {
    title: "Rug Pads",
    items: ["Indoor / Outdoor", "Non-Slip", "Uni-Eco", "Uni-Luxe", "All Rug Pads"],
  },
  {
    title: "More",
    items: ["Custom-Size Rugs", "Seasonal", "Rug Cleaner"],
  },
];

const images = [
  { title: "Pet Beds", src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80" },
  { title: "Throw Blankets", src: "https://images.unsplash.com/photo-1611599530975-6ab27f9b4c2f?auto=format&fit=crop&w=400&q=80" },
  { title: "Freeform Rugs", src: "https://images.unsplash.com/photo-1589987605180-23855d7dc35c?auto=format&fit=crop&w=400&q=80" },
];

export default function TrendingPopover() {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="font-semibold"
        >
          New & Trending
        </button>
      </PopoverTrigger>

      <PopoverContent
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="w-[1500px] p-6 flex gap-6"
      >
        {/* Left Sidebar */}
        <div className="flex-1">
          {categories.map((cat) => (
            <div key={cat.title} className="mb-4">
              <h3 className="font-bold mb-2">{cat.title}</h3>
              <ul className="space-y-1">
                {cat.items.map((item) => (
                  <li key={item} className="text-gray-700 hover:text-blue-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Images */}
        <div className="flex-1 grid grid-cols-3 gap-10">
          {images.map((img) => (
            <div key={img.title} className="text-center">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-80 object-cover rounded-lg shadow-sm"
              />
              <p className="mt-2 text-gray-800 font-medium">{img.title}</p>
              <button className="mt-1 text-blue-600 hover:underline">Shop All</button>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
