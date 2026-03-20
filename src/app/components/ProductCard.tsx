"use client";

import { useRouter } from "next/navigation";
import type { Product } from "../types";
import SectionContainer from "./SectionContainer";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const router = useRouter();

  return (
    <SectionContainer>
      <div className="card">
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="badge">{product.category}</p>
        <p className="price">{product.price.toFixed(2)}€</p>

        <div className="cardButtons">
          <button onClick={() => {router.push(`/product/${product.id}`);}}
        >
            Ver detalles
          </button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProductCard;