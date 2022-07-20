import { NextPage } from "next";
import { GetServerSideProps } from 'next'
import Link from "next/link";
import styles from '../../styles/adminUser.module.css'

const AdminIndex: NextPage<{user: any}> = ({user}: {user: any}) => {
    return <div>
        <h1>Dashboard</h1>
        <Link href={"/admin/user"}><h2 className={styles.link}>{user.length} utilisateurs en base de données.</h2></Link>
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
        props: {user: dataUser.data}
    }
}
export default AdminIndex