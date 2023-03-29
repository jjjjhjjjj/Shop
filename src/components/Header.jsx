import { useState, useEffect } from "react";
import { googleLoginPopup, getUserState } from "../api/firebase";

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserState(setUser);
  }, []);

  return (
    <header>
      <h1>Shoppy</h1>
      <button onClick={googleLoginPopup}>로그인</button>
    </header>
  );
}
