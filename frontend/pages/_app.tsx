import Layout from "../Layout/Layout";
import UserProvider from "../context/UserContext";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  <Script
    src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"
    strategy="beforeInteractive"
  />;
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
