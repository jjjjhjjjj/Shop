import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import User from "./User";

export default function Header() {
  const { user, login, logout } = useAuth();

  return (
    <header>
      <Link to="/">
        <h1>Shoppy</h1>
      </Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/carts">Cart</Link>
        <Link to="/products/new">AddProduct</Link>
        {user && <User user={user} />}
        {user ? (
          <button onClick={logout}>로그아웃</button>
        ) : (
          <button onClick={login}>로그인</button>
        )}
      </nav>
    </header>
  );
}
