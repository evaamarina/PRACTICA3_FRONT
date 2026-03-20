export type ProductDimensions = {
  width: number;
  height: number;
  depth: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  brand?: string;
  weight?: number;
  dimensions?: ProductDimensions;
  thumbnail: string;
  images: string[];
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};