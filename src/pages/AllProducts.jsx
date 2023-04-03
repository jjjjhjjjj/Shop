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
        <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
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
