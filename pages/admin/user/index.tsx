import { NextPage } from "next";
import { GetServerSideProps } from 'next'
import Link from "next/link";
import {Roles} from '../../../utils/roles'
import styles from '../../../styles/adminUser.module.css'

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
    return <div>
        <h1>Dashboard User</h1>
        {arrayUser}
        <Link href={"/admin/user/add"}><button>Ajouter un utilisateur</button></Link>
    </div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const headers = new Headers()
    headers.append('authorization', 'Bearer '+context.req.cookies.token)
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