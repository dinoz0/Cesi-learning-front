import { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Roles } from "../../../utils/roles";

type User = {
  _id?: string;
  contenu: string;
  propriétaire: string;
  nom: string;
  description: string;
  ressouces: string;
};

const AdminIndex: NextPage = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [contenu, setContenu] = useState("");
  const [ressouces, setRessouces] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const add = async () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const res = await fetch("/api/cours", {
      method: "POST",
      body: JSON.stringify({
        nom,
        description,
        contenu,
        ressouces,
      }),
      headers,
    });
    const data = await res.json();
    if (res.status === 401) return router.push("/login");
    if (res.status === 201) return router.push("/prof/cours");
    setError(data.message);
  };
  return (
    <div>
      <h1>Dashboard User</h1>
      <h1>{error ? error : ""}</h1>
      <h2>Ajouter un utilisateur</h2>
      <label htmlFor="nom">Nom </label>
      <input
        name="nom"
        value={nom}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNom(e.target.value)}
      />
      <label htmlFor="description">Description </label>
      <input
        name="description"
        value={description}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
      />
      <label htmlFor="contenu">Contenu </label>
      <input
        name="contenu"
        value={contenu}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setContenu(e.target.value)
        }
      />
      <label htmlFor="ressouces">Ressources </label>
      <input
        name="ressouces"
        value={ressouces}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setRessouces(e.target.value)
        }
      />
      <button onClick={add}>Ajouter</button>
    </div>
  );
};
export default AdminIndex;
