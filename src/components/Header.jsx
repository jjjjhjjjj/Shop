import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import User from "./User";
import Button from "./ui/Button";

export default function Header() {
  const { user, login, logout } = useAuth();

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/">
        <h1 className="flex items-center text-3xl text-brand">Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && <Link to="/carts">Cart</Link>}
        <Link to="/products/new">AddProduct</Link>
        {user && <User user={user} />}
        {user ? (
          <Button text="로그아웃" onClick={logout} />
        ) : (
          <Button text="로그인" onClick={login} />
        )}
      </nav>
    </header>
  );
}
