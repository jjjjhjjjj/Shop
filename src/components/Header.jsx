import { useState, useEffect } from "react";
import { login, getUserState, logout } from "../api/firebase";
import User from "./User";

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserState((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  return (
    <header>
      <h1>Shoppy</h1>
      {user && <User user={user} />}
      {user ? (
        <button onClick={logout}>로그아웃</button>
      ) : (
        <button onClick={login}>로그인</button>
      )}
    </header>
  );
}
