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
import { fetchProducts } from "@/lib/product";
import Image from "next/image"; // Use Next.js Image

export type Product = {
  id: number;
  title: string;
  price: number;
  type: string;
  description: string;
  category: string;
  image: string;
  size: string;
};

const FilterBar: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState<Record<string, string[]>>({});

useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        // Ensure fetched products are mapped to the correct Product type
        const productData = await fetchProducts();
        // Map id to number if needed
        const normalizedProducts: Product[] = productData.map((p: any) => ({
          ...p,
          id: typeof p.id === "string" ? parseInt(p.id, 10) : p.id,
        }));
        setProducts(normalizedProducts);
        setFilteredProducts(normalizedProducts);

        // Generate filter options
        const options: Record<string, string[]> = {};
        options["Categories"] = [...new Set(normalizedProducts.map((p) => p.category).filter(Boolean))];
        options["Sizes"] = [...new Set(normalizedProducts.map((p) => p.size).filter(Boolean))];

        // Price ranges
        const prices = normalizedProducts.map((p) => p.price).filter((p) => p > 0);
        if (prices.length > 0) {
          const minPrice = Math.min(...prices);
          const maxPrice = Math.max(...prices);
          const priceStep = (maxPrice - minPrice) / 4;

          options["Price"] = [
            `$${minPrice} - $${Math.round(minPrice + priceStep)}`,
            `$${Math.round(minPrice + priceStep)} - $${Math.round(minPrice + priceStep * 2)}`,
            `$${Math.round(minPrice + priceStep * 2)} - $${Math.round(minPrice + priceStep * 3)}`,
            `$${Math.round(minPrice + priceStep * 3)} - $${maxPrice}`,
          ];
        }

        setFilterOptions(options);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);


  useEffect(() => {
    let filtered = [...products];

    Object.entries(selectedFilters).forEach(([filterType, filterValue]) => {
      if (!filterValue) return;

      switch (filterType) {
        case "Categories":
          filtered = filtered.filter((p) => p.category === filterValue);
          break;
        case "Sizes":
          filtered = filtered.filter((p) => p.size === filterValue);
          break;
        // Removed "Product Type" filter
        case "Price":
          const priceRange = filterValue.match(/\$(\d+) - \$(\d+)/);
          if (priceRange) {
            const [, min, max] = priceRange;
            filtered = filtered.filter(
              (p) => p.price >= parseInt(min) && p.price <= parseInt(max)
            );
          }
          break;
      }
    });

    setFilteredProducts(filtered);
  }, [selectedFilters, products]);

  const handleFilterSelect = (category: string, option: string | null) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      if (option) {
        newFilters[category] = option;
      } else {
        delete newFilters[category];
      }
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
  };

  const activeFilterCount = Object.values(selectedFilters).filter(Boolean).length;

  if (loading) {
    return <p className="p-6 text-gray-500">Loading products...</p>;
  }

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2 flex-wrap gap-y-2">
            {Object.entries(filterOptions).map(([categoryName, options]) => (
              <DropdownMenu key={categoryName}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className={`h-9 px-4 text-sm font-medium border-gray-300 hover:bg-gray-50 ${
                      selectedFilters[categoryName]
                        ? "bg-blue-50 border-blue-300 text-blue-700"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {selectedFilters[categoryName] || categoryName}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 max-h-64 overflow-y-auto"
                >
                  {options.map((option) => (
                    <DropdownMenuItem
                      key={option}
                      onClick={() => handleFilterSelect(categoryName, option)}
                      className="cursor-pointer"
                    >
                      {option}
                    </DropdownMenuItem>
                  ))}
                  {selectedFilters[categoryName] && (
                    <>
                      <div className="border-t border-gray-200 my-1"></div>
                      <DropdownMenuItem
                        onClick={() => handleFilterSelect(categoryName, null)}
                        className="cursor-pointer text-gray-500"
                      >
                        Clear selection
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          <Button
            variant="ghost"
            onClick={clearAllFilters}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            Clear All Filters
            {activeFilterCount > 0 && (
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </Button>
        </div>

        {/* Products Grid */}
        <div className="py-6">
          <p className="text-sm text-gray-600 mb-4">
            Showing {filteredProducts.length} of {products.length} products
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={192}
                  className="w-full h-48 object-contain mb-2"
                />
                <h3 className="text-sm font-medium text-gray-900">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar