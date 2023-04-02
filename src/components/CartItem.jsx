import { modifyCart, removeCart } from "../api/firebase";
import { useAuth } from "../context/authContext";

export default function CartItem({
  cart,
  cart: { img, name, option, price, count },
  id,
}) {
  const {
    user: { uid },
  } = useAuth();

  const handlePlus = () => {
    modifyCart(uid, id, { ...cart, count: count + 1 });
  };

  const handleMinus = () => {
    if (count < 2) return;
    modifyCart(uid, id, { ...cart, count: count - 1 });
  };

  const handleRemove = () => {
    removeCart(uid, id);
  };

  return (
    <li>
      <img src={img} alt="" />
      <div>
        <strong>{name}</strong>
        <p>{option}</p>
        <p>{price}</p>
      </div>
      <div>
        <button type="button" onClick={handlePlus}>
          +
        </button>
        <p>{count}</p>
        <button type="button" onClick={handleMinus}>
          -
        </button>
      </div>
      <button type="button" onClick={handleRemove}>
        x
      </button>
    </li>
  );
}
