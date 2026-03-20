"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getProductById } from "../../lib/api/product";
import type { Product } from "../../types";

const ProductDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (id) {
      getProductById(id as string).then((res) => {
        setProduct(res);

        if (res?.images?.length) {
          setSelectedImage(res.images[0]);
        }
      });
    }
  }, [id]);

  return (
    <main className="detailPage">
      <div className="detailWrapper">
        {product && (
          <>
            <div className="detail">
              <button
                className="backButton"
                onClick={() => {
                  router.back();
                }}
              >
                Volver
              </button>

              <h1>{product.title}</h1>

              <div className="detailTop">
                <div className="detailGallery">
                  <div className="mainImageContainer">
                    <img
                      className="mainDetailImage"
                      src={selectedImage || product.thumbnail}
                      alt={product.title}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/600x400?text=Sin+imagen";
                      }}
                    />
                  </div>

                  <div className="detailImages">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`thumbButton ${
                          selectedImage === image ? "activeThumb" : ""
                        }`}
                        onClick={() => {
                          setSelectedImage(image);
                        }}
                      >
                        <img
                          className="detailThumb"
                          src={image}
                          alt={`${product.title} ${index + 1}`}
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://via.placeholder.com/100x100?text=Sin+img";
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="buyBlock">
                  <p className="priceDetail">{product.price.toFixed(2)}€</p>
                  <p><strong>Marca:</strong> {product.brand || "Sin marca"}</p>
                  <p><strong>Valoración:</strong> {product.rating}</p>
                  <p><strong>Stock:</strong> {product.stock}
                    {product.stock <= 10
                      ? " (Quedan pocas unidades)"
                      : " (Disponible)"}
                  </p>
                  <p><strong>Peso:</strong> {product.weight ?? "No disponible"}</p>
                </div>
              </div>
            </div>

            <div className="descriptionBlock">
              <h2>Descripción</h2>
              <p>{product.description}</p>

              <h2>Dimensiones</h2>
              {product.dimensions ? (
                <div className="dimensionsBlock">
                  <p><strong>Ancho:</strong> {product.dimensions.width}</p>
                  <p><strong>Alto:</strong> {product.dimensions.height}</p>
                  <p><strong>Profundidad:</strong> {product.dimensions.depth}</p>
                </div>
              ) : (
                <p>No disponibles.</p>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;