export default function ProductCard({
  product: { name, img, price, category },
}) {
  return (
    <li>
      <img src={img} alt="" />
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <span>{category}</span>
    </li>
  );
}
