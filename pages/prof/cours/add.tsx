import { NextPage } from "next";
import { GetServerSideProps } from 'next'
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {Roles} from '../../../utils/roles'

type User = {
	_id?: string;
	email: string;
	password: string;
	nom: string;
	prenom: string;
    role: Roles;
};

const AdminIndex: NextPage = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState(Roles.Student)
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()
    const add = async () => {
        const headers = new Headers()
        headers.append("Content-Type", "application/json");
        const res = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({nom, prenom, email, role, password}),
            headers
        })
        const data = await res.json()
        if (res.status === 401) return router.push("/login")
        if (res.status === 201) return router.push("/admin/user")
        setError(data.message)
    }
    return <div>
        <h1>Dashboard User</h1>
        <h1>{error ? error : ""}</h1>
        <h2>Ajouter un utilisateur</h2>
        <label htmlFor="nom">Nom </label>
        <input name="nom" value={nom} onChange={(e: ChangeEvent<HTMLInputElement>) => setNom(e.target.value)}/>
        <label htmlFor="prenom">Prénom </label>
        <input name="prenom" value={prenom} onChange={(e: ChangeEvent<HTMLInputElement>) => setPrenom(e.target.value)}/>
        <label htmlFor="email">Email </label>
        <input name="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
        <label htmlFor="role">Role </label>

<select name="role" value={role} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRole(e.target.value as Roles)}>
    <option value={Roles.Admin}>Admin</option>
    <option value={Roles.Teacher}>Mentor</option>
    <option value={Roles.Student}>Etudiant</option>
</select>
<label htmlFor="password">Mot de passe </label>
        <input name="password" value={password} type="Password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
    <button onClick={add}>Ajouter</button>
    </div>
}
export default AdminIndex