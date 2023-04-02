import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { getCart } from "../api/firebase";
import CartItem from "../components/CartItem";

const SHIP_PRICE = 3000;

export default function MyCart() {
  const { user } = useAuth();
  const [carts, setCarts] = useState();

  useEffect(() => {
    getCart(user.uid).then((data) => setCarts(Object.values(data)));
  }, []);

  const totalPrice =
    carts &&
    carts.reduce(
      (prev, current) => prev + parseInt(current.price) * current.count,
      0
    );

  return (
    <section>
      {!carts && <p>장바구니에 상품이 없습니다.</p>}
      {carts && (
        <ul>
          {carts.map((cart) => (
            <CartItem key={cart.id} cart={cart} />
          ))}
        </ul>
      )}
      <ul>
        <li>{totalPrice}</li>
        <li>{SHIP_PRICE}</li>
        <li>{totalPrice + SHIP_PRICE}</li>
      </ul>
    </section>
  );
}
