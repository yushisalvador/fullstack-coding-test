//file with authentication functions
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "./config/firebase.config";
import firebase from "firebase/compat/app";
import { FirebaseError } from "@firebase/util";

interface AuthData {
  user: firebase.User | null;
  setUser: (user: object | null) => void;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  errorMessage: FirebaseError;
}
const authContext = createContext<AuthData | null>(null);

export default function useAuth() {
  return useContext(authContext) as AuthData;
}

export function AuthProvider(props: any) {
  const [user, setUser] = useState<object | null>(null);
  const [errorMessage, setErrorMessage] = useState<any>(null);

  async function signup(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (error) setErrorMessage(error);
    }
  }
  async function login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (error) setErrorMessage(error);
    }
  }

  function logout() {
    setUser(null);
    signOut(auth);
  }

  const value: any = {
    user,
    errorMessage,
    setUser,
    signup,
    login,
    logout,
  };
  return <authContext.Provider value={value}>{props.children} </authContext.Provider>;
}
