import { NextPage } from "next";
import { GetServerSideProps } from 'next'
import Link from "next/link";
import {Roles} from '../../../utils/roles'
import styles from '../../../styles/adminUser.module.css'
import { useState } from "react";
import { useRouter } from "next/router";

type User = {
	_id?: string;
	email: string;
	password: string;
	nom: string;
	prenom: string;
    role: Roles;
};

const AdminIndex: NextPage<{users: User[]}> = ({users}: {users: User[]}) => {
    const arrayUser = users.map(user => <Link href={`/admin/user/${user._id}`} key={user._id}><div> <p className={styles.link}>{user.prenom} {user.nom} {user.email}</p></div></Link>)
    const [role, setRole] = useState("student")
    const [toSearch, setSearch] = useState("")
    const router = useRouter()
    const search = () => {
        router.query.role = role
        router.query.search = toSearch
        console.log(router)
        router.push(router)
    } 
    const reset = () => {
        router.query = {}
        router.push(router.pathname)
    }
    return <div>
        <h1>Dashboard User</h1>
        <div> <select value={role} name="" id="" onChange={(e) => setRole(e.target.value)}>
            <option value="student">Etudiant</option>
            <option value="teacher">Mentor</option>
            <option value="admin">Admin</option>
            </select>
            <input type="text" value={toSearch} onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={search}>Rechercher</button>
            <button onClick={reset}>Reset</button>
            </div>
        {arrayUser}
        <Link href={"/admin/user/add"}><button>Ajouter un utilisateur</button></Link>
    </div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const headers = new Headers()
    headers.append('authorization', 'Bearer '+context.req.cookies.token)
    let param = "/"
    if (context.query.role) {
        param += `${context.query.role}/`
        if (context.query.search) param += `${context.query.search}/`
        const resUser = await fetch(`${process.env.API_URL}/search${param}`, {
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
            props: {users: dataUser.data}
        }
    }
    const resUser = await fetch(`${process.env.API_URL}/user`, {
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
        props: {users: dataUser.data}
    }
}
export default AdminIndex