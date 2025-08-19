"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { fetchAmazonProducts } from "@/lib/product";
import { amazon } from "@/types/data";
import Image from 'next/image'


const ITEMS_PER_PAGE = 24; // Show more than 20 products per page

const OutdoorRugs: React.FC = () => {
  const [products, setProducts] = useState<amazon[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<amazon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  // Fetch products (API already returns outdoor rugs only)
  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchAmazonProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    loadProducts();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = [...products];
    if (selectedCategory) filtered = filtered.filter((p) => p.category === selectedCategory);
    if (selectedType) filtered = filtered.filter((p) => p.type === selectedType);
    if (selectedRating) filtered = filtered.filter((p) => Math.floor(p.rating.rate) >= selectedRating);

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset page on filter change
  }, [selectedCategory, selectedType, selectedRating, products]);

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedType(null);
    setSelectedRating(null);
  };

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="w-full p-6 bg-white border-b border-gray-200">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        {/* Clear All Filters Button */}
        <Button
          variant="ghost"
          onClick={clearAllFilters}
          className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        >
          Clear All Filters
        </Button>

        {/* Category */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {selectedCategory || "Category"} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedCategory(null)}>All</DropdownMenuItem>
            {[...new Set(products.map((p) => p.category))].map((category, idx) => (
              <DropdownMenuItem
                key={`category-${idx}-${category}`}
                onClick={() => setSelectedCategory(category!)}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Type */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {selectedType || "Type"} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedType(null)}>All</DropdownMenuItem>
            {[...new Set(products.map((p) => p.type))].map((type, idx) => (
              <DropdownMenuItem
                key={`type-${idx}-${type}`}
                onClick={() => setSelectedType(type!)}
              >
                {type}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Rating */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {selectedRating ? `${selectedRating}+ Stars` : "Rating"}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedRating(null)}>All</DropdownMenuItem>
            {[5, 4, 3, 2, 1].map((star) => (
              <DropdownMenuItem
                key={`rating-${star}`}
                onClick={() => setSelectedRating(star)}
              >
                {star}+ Stars
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((p, idx) => (
          <div
            key={p.id || `product-${idx}`} // unique key
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <Image
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-contain mb-2"
            />
            <h3 className="text-sm font-medium text-gray-900">{p.title}</h3>
            <p className="text-gray-600 text-sm">${p.price}</p>
            <p className="text-yellow-500 text-sm">
              ⭐ {p.rating.rate} ({p.rating.count})
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={`page-${i + 1}`}
              variant={currentPage === i + 1 ? "default" : "outline"}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default OutdoorRugs;
