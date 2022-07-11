import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from '../styles/login.module.css'



const Login: NextPage = () => {
    const router = useRouter()
    const {error} = router.query
    return <div>
        <Head>
            <title>Authentification</title>
        </Head>
        {error ? <p>Mauvais email ou mot de passe</p> : ""}
        <h1 style={{textAlign: "center"}}>Authentification</h1>
    <form action="/api/auth" method="post" className={styles.form}>
        <div className={styles.groupForm}>
        <label htmlFor="email">Email :</label>
        <input name="email" type="text" />
        </div>
        <div className={styles.groupForm}>
        <label htmlFor="password">Mot de Passe :</label>
        <input name="password" type="password" />
        </div>
        <button type="submit">Se connecter</button>
    </form>
    </div>
}

export default Login