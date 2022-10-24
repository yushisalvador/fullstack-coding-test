//file that checks changes in user state
import React, { useEffect, useState } from "react";
import useAuth from "auth/auth";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";

import { Box } from "@chakra-ui/react";

export default function AuthStateChanged({ children }: any) {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user: firebase.User) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [setUser]);

  if (loading) {
    return <Box>Loading.....</Box>;
  }

  return children;
}
