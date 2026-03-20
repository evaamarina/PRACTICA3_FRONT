import type { Product } from "../types";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
};

const ProductGrid = ({ products }: Props) => {
  return (
    <div className="container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;