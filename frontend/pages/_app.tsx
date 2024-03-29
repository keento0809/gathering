import Layout from "../layouts/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import AdminUserProvider from "../components/context/AdminUserContext";
import MapContextProvider from "../components/context/MapContext";
import LoadingProvider from "../components/context/LoadingContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  <Script
    src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"
    strategy="beforeInteractive"
  />;
  return (
    <SessionProvider session={session}>
      <AdminUserProvider>
        <MapContextProvider>
          <LoadingProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LoadingProvider>
        </MapContextProvider>
      </AdminUserProvider>
    </SessionProvider>
  );
}

export default MyApp;
