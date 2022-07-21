import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ListeCours from "../components/ListeCours/listeCours";
const Home = ({ cours }: { cours: cours[] }) => {
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
          {cours.map((cours) => (
            <ListeCours
              key={cours._id}
              id={cours._id}
              name={cours.nom}
              description={cours.description}
            ></ListeCours>
          ))}
        </div>
      </main>
    </div>
  );
};

type cours = {
  _id: string;
  nom: string;
  description: string;
  contenu: string;
  propriétaire: string;
};
type response = {
  message: string;
  data: cours[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const headers = new Headers();
  headers.append("authorization", "Bearer " + context.req.cookies.token);
  const resUser = await fetch(`${process.env.API_URL}/user`, {
    method: "GET",
    headers,
  });
  if (resUser.status === 401) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
  const res = await fetch(`${process.env.API_URL}/cours`, { headers });
  const data: response = await res.json();

  return {
    props: { cours: data.data },
  };
};

export default Home;
