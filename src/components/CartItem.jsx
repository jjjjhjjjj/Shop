import useCarts from "../hooks/useCarts";

export default function CartItem({
  cart,
  cart: { img, name, option, price, count },
}) {
  const { addOrModifyItem, removeItem } = useCarts();

  const handlePlus = () => {
    addOrModifyItem.mutate({ ...cart, count: count + 1 });
  };

  const handleMinus = () => {
    if (count < 2) {
      return;
    }

    addOrModifyItem.mutate({ ...cart, count: count - 1 });
  };

  const handleRemove = () => {
    removeItem.mutate(cart.id);
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
