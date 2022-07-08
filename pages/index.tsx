import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ListeCours from "../components/ListeCours/listeCours";

const Home = () => {
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
          <ListeCours
            id="1"
            name="Cours de React"
            description="Cours sur les base de React"
          />
          <ListeCours
            id="2"
            name="Cours de React"
            description="Cours sur les base de React"
          />
          <ListeCours
            id="3"
            name="Cours de Angular"
            description="Cours sur les base de Angular"
          />
          <ListeCours
            id="4"
            name="Cours de React"
            description="Cours sur les base de React"
          />
          <ListeCours
            id="5"
            name="Cours de React"
            description="Cours sur les base de React"
          />
          <ListeCours
            id="6"
            name="Cours de React"
            description="Cours sur les base de React"
          />
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
