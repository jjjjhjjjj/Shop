import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../api/firebase";
import ProductCard from "../components/ProductCard";

export default function AllProducts() {
  const [products, setProducts] = useState();
  useEffect(() => {
    getProducts().then((data) => setProducts(Object.values(data)));
  }, []);

  return (
    <>
      {products ? (
        <ul>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <p>상품이 없습니다.</p>
      )}
    </>
  );
}
