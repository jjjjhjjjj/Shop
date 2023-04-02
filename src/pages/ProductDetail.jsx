import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { addCartProduct } from "../api/firebase";
import { useAuth } from "../context/authContext";

export default function ProductDetail() {
  const { user } = useAuth();
  const selectRef = useRef();
  const [isShow, setIsShow] = useState(false);
  const {
    state: {
      product: { id, category, img, name, price, options, desc },
    },
  } = useLocation();

  const handleClick = () => {
    const cart = {
      name,
      price,
      img,
      count: 1,
      productId: id,
      option: selectRef.current.value,
    };

    addCartProduct(user.uid, cart).then(showMessage);
  };

  const showMessage = () => {
    setIsShow(true);

    setTimeout(() => {
      setIsShow(false);
    }, 5000);
  };

  return (
    <>
      {id && (
        <section>
          <p>{category}</p>
          <img src={img} alt="" />
          <div>
            <h3>{name}</h3>
            <strong>{price}</strong>
            <hr />
            <p>{desc}</p>

            <select name="option" ref={selectRef}>
              {getOptions(options)}
            </select>

            {user && (
              <button type="button" onClick={handleClick}>
                장바구니에 추가
              </button>
            )}

            {isShow && <p>✅ 장바구니에 담겼습니다.</p>}
          </div>
        </section>
      )}
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
