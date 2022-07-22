import { NextPage } from "next";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { Roles } from "../../../utils/roles";
import styles from "../../../styles/adminUser.module.css";

type Cours = {
  _id?: string;
  nom: string;
  description: string;
  contenu: string;
  ressouces: string[];
  propriétaire: string;
};

const AdminIndex: NextPage<{ cours: Cours[] }> = ({
  cours,
}: {
  cours: Cours[];
}) => {
  const arrayUser = cours.map((cours) => (
    <Link href={`/prof/cours/${cours._id}`} key={cours._id}>
      <div>
        {" "}
        <p className={styles.link}>{cours.nom}</p>
      </div>
    </Link>
  ));
  return (
    <div>
      <h1>Dashboard Cours</h1>
      {arrayUser}
      <Link href={"/prof/cours/add"}>
        <button>Créer un cours</button>
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const headers = new Headers();
  headers.append("authorization", "Bearer " + context.req.cookies.token);
  const resCours = await fetch(`${process.env.API_URL}/cours`, {
    method: "GET",
    headers,
  });
  if (resCours.status === 401) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
  const dataCours = await resCours.json();
  return {
    props: { cours: dataCours.data },
  };
};
export default AdminIndex;
