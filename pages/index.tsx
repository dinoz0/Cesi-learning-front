import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cesi Learning</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-cesi.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Liste des formations disponibles</a>
        </h1>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>
              <Link href={"/cours"}>Cours de React</Link>
            </h2>
            <p>Cours de React facile.</p>
          </a>
          <a className={styles.card}>
            <h2>
              <Link href={"/cours"}>Cours de React</Link>
            </h2>
            <p>Cours de React moyen.</p>
          </a>
          <a className={styles.card}>
            <h2>
              <Link href={"/cours"}>Cours de React</Link>
            </h2>
            <p>Cours de React difficile.</p>
          </a>
          <a className={styles.card}>
            <h2>
              <Link href={"/cours"}>Cours de React</Link>
            </h2>
            <p>Cours de React facile.</p>
          </a>
          <a className={styles.card}>
            <h2>
              <Link href={"/cours"}>Cours de React</Link>
            </h2>
            <p>Cours de React moyen.</p>
          </a>
          <a className={styles.card}>
            <h2>
              <Link href={"/cours"}>Cours de React</Link>
            </h2>
            <p>Cours de React difficile.</p>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://www.cesi.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/logo-cesi.png"
              alt="Logo Cesi Petit"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
