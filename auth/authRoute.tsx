// file that takes care of making route public or private

import React from "react";
import { useRouter } from "next/router";
import useAuth from "auth/auth";
import { Box } from "@chakra-ui/react";

export function Public(Component: any) {
  return function Public({ ...props }) {
    const auth = useAuth();
    const router = useRouter();

    if (auth?.user) {
      router.replace("/");
      return <Box>Loading</Box>;
    }
    return <Component auth={auth} {...props} />;
  };
}

export function Private(Component: any) {
  return function Private({ ...props }) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth?.user) {
      router.replace("/login");
      return <Box>Redirecting you to login</Box>;
    }
    return <Component auth={auth} {...props} />;
  };
}
