//file that checks changes in user state
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import useAuth from "auth/auth";
import "firebase/compat/auth";

import { Box } from "@chakra-ui/react";

export default function AuthStateChanged({ children }: any) {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      setUser(user);
      setLoading(false);
    });
  }, [setUser]);

  if (loading) {
    return <Box>Loading.....</Box>;
  }

  return children;
}
