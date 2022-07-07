import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
