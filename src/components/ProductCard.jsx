import { Navigate, useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { id, name, img, price, category } = product;
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
    >
      <img src={img} alt="" />
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <span>{category}</span>
    </li>
  );
}
