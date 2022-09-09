import Layout from "../Layout/Layout";
import AdminUserProvider from "../context/AdminUserContext";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import MapContextProvider from "../context/MapContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  <Script
    src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"
    strategy="beforeInteractive"
  />;
  return (
    <SessionProvider session={session}>
      <AdminUserProvider>
        <MapContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MapContextProvider>
      </AdminUserProvider>
    </SessionProvider>
  );
}

export default MyApp;
