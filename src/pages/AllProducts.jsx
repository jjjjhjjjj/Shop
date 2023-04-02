import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../api/firebase";
import ProductCard from "../components/ProductCard";

export default function AllProducts() {
  const [products, setProducts] = useState();
  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <>
      {products ? (
        <ul>
          {Object.keys(products).map((key) => (
            <ProductCard key={key} product={products[key]} />
          ))}
        </ul>
      ) : (
        <p>상품이 없습니다.</p>
      )}
    </>
  );
}
