import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo-cesi.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href={"/cours"}>Cours de React</Link>
        </h1>
      </main>
{/* 
      <footer className={styles.footer}>
        <Link
          href="/about"
        >
          <span>
            A propos
          </span>
        </Link>
      </footer> */}
    </div>
  );
};

export default Home;
