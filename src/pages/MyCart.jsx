import { useAuth } from "../context/authContext";
import CartItem from "../components/CartItem";
import useCarts from "../hooks/useCarts";

const SHIP_PRICE = 3000;

export default function MyCart() {
  const {
    cartsQuery: { isLoading, data: carts },
  } = useCarts();

  const hasCarts = carts && carts.length > 0;

  const totalPrice =
    carts &&
    carts.reduce(
      (prev, current) => prev + parseInt(current.price) * current.count,
      0
    );

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <section>
      {!hasCarts && <p>장바구니에 상품이 없습니다.</p>}
      {hasCarts && (
        <>
          <ul>
            {carts.map((cart) => (
              <CartItem key={cart.id} cart={cart} />
            ))}
          </ul>
          <ul>
            <li>{totalPrice}</li>
            <li>{SHIP_PRICE}</li>
            <li>{totalPrice + SHIP_PRICE}</li>
          </ul>
        </>
      )}
    </section>
  );
}
