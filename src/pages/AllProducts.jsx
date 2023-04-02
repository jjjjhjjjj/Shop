import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

export default function AllProducts() {
  const {
    productsQuery: { isLoading, data: products },
  } = useProducts();

  if (isLoading) {
    return <p>Loading ...</p>;
  }

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
