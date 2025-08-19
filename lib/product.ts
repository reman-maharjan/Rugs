// /lib/product.ts
import { product, walmart, amazon } from "@/types/data";

type ApiResponse<T> = {
  data: T[];
};

// Define raw API response types (matching backend schema)
type ProductApi = {
  _id: string;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
  size?: string;
  type?: string;
};

type WalmartApi = {
  _id: string;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
  brand: string;
  type?: string;
};

type AmazonApi = {
  _id: string;
  title: string;
  price: number;
  category: string;
  type?: string;
  image: string;
  description: string;
  rating?: {
    rate?: number;
    count?: number;
  };
};

export async function fetchProducts(): Promise<product[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const res = await fetch(`${baseUrl}/api/products?limit=50/`);
    if (!res.ok) throw new Error("Failed to fetch products");

    const data: ApiResponse<ProductApi> = await res.json();

    return data.data.map((item) => ({
      id: item._id,
      title: item.title,
      price: item.price,
      category: item.category,
      image: item.image,
      description: item.description,
      size: item.size,
      type: item.type,
    }));
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
}

export async function fetchWalmartProducts(): Promise<walmart[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const res = await fetch(`${baseUrl}/api/walmartproducts?limit=50/`);
    if (!res.ok) throw new Error("Failed to fetch products");

    const data: ApiResponse<WalmartApi> = await res.json();

    return data.data.map((item) => ({
      id: item._id,
      title: item.title,
      price: item.price,
      category: item.category,
      image: item.image,
      description: item.description,
      brand: item.brand,
      type: item.type,
    }));
  } catch (error) {
    console.error("Error fetching walmart products", error);
    return [];
  }
}

export async function fetchAmazonProducts(): Promise<amazon[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const res = await fetch(
      `${baseUrl}/api/amazonproducts?category=outdoor&limit=50`
    );
    if (!res.ok) throw new Error("Failed to fetch products");

    const data: ApiResponse<AmazonApi> = await res.json();

    return data.data.map((item) => ({
      id: item._id,
      title: item.title,
      price: item.price,
      category: item.category,
      type: item.type,
      image: item.image,
      description: item.description,
      rating: {
        rate: item.rating?.rate ?? 0,
        count: item.rating?.count ?? 0,
      },
    }));
  } catch (error) {
    console.error("Error fetching amazon products", error);
    return [];
  }
}
