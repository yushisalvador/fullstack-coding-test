//file with authentication functions
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "./config/firebase.config";
import Router, { useRouter } from "next/router";

// interface AuthData {
//   user: object | null;
//   setUser: (user: object | null) => void;
//   login: () => Promise<UserCredential>;
//   logout: () => void;
// }
const authContext = createContext<any | null>(null);

export default function useAuth() {
  return useContext(authContext) as any;
}

export function AuthProvider(props: any) {
  const [user, setUser] = useState<object | null>(null);

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  async function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    setUser(null);
    signOut(auth);
  }

  const value: any = {
    user,
    setUser,
    signup,
    login,
    logout,
  };
  return <authContext.Provider value={value}>{props.children} </authContext.Provider>;
}
