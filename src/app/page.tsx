"use client";

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductGrid from "./components/ProductGrid";
import SectionContainer from "./components/SectionContainer";
import { getProducts } from "./lib/api/product";
import type { Product } from "./types";
import styles from "./page.module.css";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const filteredProducts = products.filter((product) => {
    const text = searchTerm.toLowerCase();

    return (
      product.title.toLowerCase().includes(text) ||
      product.category.toLowerCase().includes(text)
    );
  });

  return (
    <main className={styles.page}>
      <h1>Catálogo de Productos</h1>

      <SectionContainer>
        <div className={styles.topBlock}>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <p className="resultText">
            Resultados encontrados: {filteredProducts.length}
          </p>
        </div>
      </SectionContainer>

      <ProductGrid products={filteredProducts} />
    </main>
  );
};

export default Home;