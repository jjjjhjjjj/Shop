import { useState, useEffect } from "react";
import { login, getUserState, logout } from "../api/firebase";

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserState((user) => {
      setUser(user);
    });
  }, []);

  return (
    <header>
      <h1>Shoppy</h1>
      {user ? (
        <button onClick={logout}>로그아웃</button>
      ) : (
        <button onClick={login}>로그인</button>
      )}
    </header>
  );
}
