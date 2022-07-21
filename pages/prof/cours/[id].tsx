import { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Roles } from "../../../utils/roles";

type Cours = {
  _id?: string;
  nom: string;
  description: string;
  contenu: string;
  ressouces: string[];
  propriétaire: string;
};

const AdminIndex: NextPage<{ cours: Cours }> = ({
  cours,
}: {
  cours: Cours;
}) => {
  const [nom, setNom] = useState(cours.nom);
  const [description, setDescription] = useState(cours.description);
  const [contenu, setContenu] = useState(cours.contenu);
  const [ressouces, setRessouces] = useState(cours.ressouces);
  const [propriétaire, setPropriétaire] = useState(cours.ressouces);
  const [error, setError] = useState("");
  const router = useRouter();
  const modify = async () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const res = await fetch("/api/cours/" + router.query.id, {
      method: "PATCH",
      body: JSON.stringify({
        nom,
        description,
        contenu,
        ressouces,
        propriétaire,
      }),
      headers,
    });
    const data = await res.json();
    if (data.message === "OK") return router.replace("/admin/cours");
    setError(data.message);
  };
  const remove = async () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const res = await fetch("/api/cours/" + router.query.id, {
      method: "DELETE",
      headers,
    });
    const data = await res.json();
    console.log(res);
    if (res.status === 401) return router.replace("/login");
    if (res.status === 200) return router.replace("/prof");
    setError(data.message);
  };
  return (
    <div>
      <h1>Dashboard Cours</h1>
      <h1>{error ? error : ""}</h1>
      <h2 style={{ fontWeight: "400" }}>{cours.nom}</h2>
      <label htmlFor="nom">Nom </label>
      <input
        name="Contenu"
        value={nom}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNom(e.target.value)}
      />
      <label htmlFor="description">Description </label>
      <input
        name="Description"
        value={description}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
      />
      <label htmlFor="Contenu">Contenu </label>
      <textarea
        name="Contenu"
        value={contenu}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setContenu(e.target.value)
        }
      />

      <button onClick={modify}>Modifier</button>
      <button onClick={remove}>Supprimer</button>
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
export default AdminIndex;
