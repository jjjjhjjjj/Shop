import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { id, name, img, price, category } = product;
  return (
    <li
      className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105"
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
    >
      <img className="w-full" src={img} alt="" />
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <p className="truncate">{name}</p>
        <p>{price}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}
