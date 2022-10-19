import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "auth/auth";
import AuthStateChanged from "auth/authStateChanged";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <AuthStateChanged>
          <Component {...pageProps} />
        </AuthStateChanged>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
