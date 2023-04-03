import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import useCarts from "../hooks/useCarts";
import Button from "../components/ui/Button";

export default function ProductDetail() {
  const { user } = useAuth();
  const selectRef = useRef();
  const [isShow, setIsShow] = useState(false);
  const {
    state: {
      product: { id, category, img, name, price, options, desc },
    },
  } = useLocation();

  const { addOrModifyItem } = useCarts();

  const handleClick = () => {
    const cart = {
      id: Date.now(),
      name,
      price,
      img,
      count: 1,
      productId: id,
      option: selectRef.current.value,
    };

    addOrModifyItem.mutate(cart, {
      onSuccess: showMessage,
    });
  };

  const showMessage = () => {
    setIsShow(true);

    setTimeout(() => {
      setIsShow(false);
    }, 5000);
  };

  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">{category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img className="w-full px-4 basis-7/12" src={img} alt="" />
        <div className="w-full basis-5/12 flex flex-col p-4">
          <h3 className="text-3xl font-bold py-2">{name}</h3>
          <strong className="text-2xl font-bold py-2  border-b border-gray-400">
            {price}
          </strong>

          <p className="py-4 text-lg">{desc}</p>

          <select
            className="p-2 m-4 border-2 border-dashed border-brand outline-none"
            name="option"
            ref={selectRef}
          >
            {getOptions(options)}
          </select>

          {user && <Button text="장바구니에 추가" onClick={handleClick} />}

          {isShow && <p className="my-2">✅ 장바구니에 담겼습니다.</p>}
        </div>
      </section>
    </>
  );
}

const getOptions = (options) => {
  const optionsArray = options.split(",");
  return optionsArray.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));
};
