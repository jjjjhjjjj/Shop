import { useAuth } from "../context/authContext";
import CartItem from "../components/CartItem";
import useCarts from "../hooks/useCarts";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";

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
    <section className="p-8 flex flex-col">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        내 장바구니
      </p>
      {!hasCarts && <p>장바구니에 상품이 없습니다.</p>}
      {hasCarts && (
        <>
          <ul className="border-b border-gray-300 mb-8 p-4 px-8">
            {carts.map((cart) => (
              <CartItem key={cart.id} cart={cart} />
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16">
            <PriceCard text="상품 총액" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="배송액" price={SHIP_PRICE} />
            <FaEquals className="shrink-0" />
            <PriceCard text="총가격" price={totalPrice + SHIP_PRICE} />
          </div>
          <Button text="주문하기" />
        </>
      )}
    </section>
  );
}
