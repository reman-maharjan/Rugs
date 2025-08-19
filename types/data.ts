// /types/data.ts

export type product = {
  id: string; // MongoDB _id is string
  title: string;
  price: number;
  type?: string; // optional, API may not always send it
  description: string;
  category: string;
  image: string;
  size?: string; // optional, API may not always send it
};

export type walmart = {
  id: string;
  title: string;
  price: number;
  type?: string;
  description: string;
  category: string;
  image: string;
  brand: string;
};

export type amazon = {
  id: string;
  title: string;
  price: number;
  type?: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
