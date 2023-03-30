import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../api/firebase";
import ProductCard from "../components/ProductCard";

export default function AllProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const handleRedirect = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <>
      {products ? (
        <ul>
          {Object.keys(products).map((key) => (
            <ProductCard
              key={key}
              product={products[key]}
              onRedirect={handleRedirect}
            />
          ))}
        </ul>
      ) : (
        <p>상품이 없습니다.</p>
      )}
    </>
  );
}
