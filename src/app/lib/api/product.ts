import { api } from "./axios";
import type { Product, ProductsResponse } from "../../types";

export const getProducts = async () => {
  const response = await api.get<ProductsResponse>("/products");
  return response.data.products || [];
};

export const getProductById = async (id: string) => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data || null;
};