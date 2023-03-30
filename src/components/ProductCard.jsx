export default function ProductCard({
  product: { id, name, img, price, category },
  onRedirect,
}) {
  const handleClick = () => {
    onRedirect(id);
  };

  return (
    <li onClick={handleClick}>
      <img src={img} alt="" />
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <span>{category}</span>
    </li>
  );
}
