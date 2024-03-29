import { createContext, useContext, useEffect, useState } from "react";
import { getUserState, login, logout } from "../api/firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const uid = user && user.uid;

  useEffect(() => {
    getUserState(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, uid, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
