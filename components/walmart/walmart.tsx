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
import { fetchWalmartProducts } from "@/lib/product";
import { walmart } from "@/types/data";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Pagination config
const ITEMS_PER_PAGE = 8; // adjust per need

const PersianOriental: React.FC = () => {
  const [products, setProducts] = useState<walmart[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<walmart[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState<Record<string, string[]>>({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const productData = await fetchWalmartProducts();
        setProducts(productData);
        setFilteredProducts(productData);

        // Generate filter options
        const options: Record<string, string[]> = {};
        options["Categories"] = [...new Set(productData.map((p) => p.category).filter(Boolean))];
        options["brands"] = [...new Set(productData.map((p) => p.brand).filter(Boolean))];

        // Price ranges
        const prices = productData.map((p) => p.price).filter((p) => p > 0);
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
        case "brands":
          filtered = filtered.filter((p) => p.brand === filterValue);
          break;
        case "Product Type":
          filtered = filtered.filter((p) => p.type === filterValue);
          break;
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
    setCurrentPage(1); // reset to first page when filters change
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

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
            Showing {currentProducts.length} of {filteredProducts.length} products
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-2"
                />
                <h3 className="text-sm font-medium text-gray-900">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm">${product.price}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-6 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i + 1}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersianOriental;
