import { NextPage } from "next";
import { GetServerSideProps } from 'next'
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

const AdminIndex: NextPage<{user: User}> = ({user}: {user: User}) => {
    const [nom, setNom] = useState(user.nom);
    const [prenom, setPrenom] = useState(user.prenom);
    const [email, setEmail] = useState(user.email);
    const [role, setRole] = useState(user.role)
    return <div>
        <h1>Dashboard User</h1>
        <h2>{user.prenom} {user.nom}</h2>
        <label htmlFor="nom">Nom </label>
        <input name="Email" value={nom} onChange={(e: ChangeEvent<HTMLInputElement>) => setNom(e.target.value)}/>
        <label htmlFor="prenom">Prénom </label>
        <input name="Email" value={prenom} onChange={(e: ChangeEvent<HTMLInputElement>) => setPrenom(e.target.value)}/>
        <label htmlFor="Email">Email </label>
        <input name="Email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
        <label htmlFor="role">Role </label>

<select name="role" value={role} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRole(e.target.value as Roles)}>
    <option value={Roles.Admin}>Admin</option>
    <option value={Roles.Teacher}>Mentor</option>
    <option value={Roles.Student}>Etudiant</option>
</select>
    <button>Modifier</button>
    <button>Supprimer</button>
    </div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const headers = new Headers()
    headers.append('authorization', 'Bearer '+context.req.cookies.token)
    const resUser = await fetch(`${process.env.API_URL}/user/${context.params?.id}`, {
        method: "GET",
        headers
    })
    if (resUser.status === 401) {
        return {
            redirect: {
                permanent: false,
                destination: "/login",
            },
            props:{},
        };
    }
    const dataUser = await resUser.json()
    return {
        props: {user: dataUser.data}
    }
}
export default AdminIndex