import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { addCartProduct, getProduct } from "../api/firebase";

export default function ProductDetail() {
  const { id } = useParams();
  const selectRef = useRef();
  const [isShow, setIsShow] = useState(false);
  const [product, setProduct] = useState();

  useEffect(() => {
    getProduct(setProduct, id);
  }, []);

  const getOptions = () => {
    const optionsArray = product.options.split(",");
    return optionsArray.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };

  const handleClick = () => {
    const cart = {
      count: 1,
      productId: product.id,
      option: selectRef.current.value,
    };

    //addCartProduct(user.uid, cart).then(() => {showMessage();});
  };

  const showMessage = () => {
    setIsShow(true);

    setTimeout(() => {
      setIsShow(false);
    }, 5000);
  };

  return (
    <>
      {product && (
        <section>
          <p>{product.category}</p>
          <img src={product.img} alt="" />
          <div>
            <h3>{product.name}</h3>
            <strong>{product.price}</strong>
            <hr />
            <p>{product.desc}</p>

            <select name="option" ref={selectRef}>
              {getOptions()}
            </select>

            <button type="button" onClick={handleClick}>
              장바구니에 추가
            </button>

            {isShow && <p>✅ 장바구니에 담겼습니다.</p>}
          </div>
        </section>
      )}
    </>
  );
}
