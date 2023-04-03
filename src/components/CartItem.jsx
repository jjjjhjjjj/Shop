import useCarts from "../hooks/useCarts";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";

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
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={img} alt="" />
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{name}</p>
          <p className="text-xl font-bold text-brand">{option}</p>
          <p>₩{price}</p>
        </div>
      </div>

      <div className="text-2xl flex items-center">
        <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
        <span>{count}</span>
        <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
        <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleRemove} />
      </div>
    </li>
  );
}
