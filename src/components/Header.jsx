import { googleLoginPopup } from "../api/firebase";

export default function Header() {
  return (
    <header>
      <h1>Shoppy</h1>
      <button onClick={googleLoginPopup}>로그인</button>
    </header>
  );
}
