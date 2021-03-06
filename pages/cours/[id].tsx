import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import styles from "../../styles/cours.module.css";

type Cours = {
  nom: string;
  description: string;
  contenu: string;
};

const CoursPage: NextPage<{ cours: Cours }> = ({ cours }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{cours.nom}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo-cesi.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>{cours.nom}</a>
        </h1>

        <div>
          <h2 className={styles.h2}>{cours.description}</h2>

          <p>{cours.contenu}</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const headers = new Headers();
  headers.append("authorization", "Bearer " + context.req.cookies.token);
  const resUser = await fetch(
    `${process.env.API_URL}/cours/${context.params?.id}`,
    {
      method: "GET",
      headers,
    }
  );
  if (resUser.status === 401) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
  const dataUser = await resUser.json();
  return {
    props: { cours: dataUser.data },
  };
};

export default CoursPage;
