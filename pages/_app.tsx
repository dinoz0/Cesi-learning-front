import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon-cesi.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
