import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { login, getUserState, logout } from "../api/firebase";
import User from "./User";

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserState((user) => {
      setUser(user);
    });
  }, []);

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
