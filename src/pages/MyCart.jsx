import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { getCart } from "../api/firebase";
import CartItem from "../components/CartItem";

export default function MyCart() {
  const { user } = useAuth();
  const [carts, setCarts] = useState();

  useEffect(() => {
    getCart(user.uid).then(setCarts);
  }, []);

  // const totalPrice =
  //   carts &&
  //   Object.values(carts).reduce(
  //     (prev, current) => prev + parseInt(current.price) * current.quantity,
  //     0
  //   );

  // console.log(totalPrice);
  return (
    <section>
      {!carts && <p>장바구니에 상품이 없습니다.</p>}
      {carts && (
        <ul>
          {Object.keys(carts).map((key) => (
            <CartItem key={key} cart={carts[key]} id={key} />
          ))}
        </ul>
      )}
    </section>
  );
}
