import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";



const Login: NextPage = () => {
    const router = useRouter()
    const {error} = router.query
    return <div>
        <Head>
            <title>Authentification</title>
        </Head>
        {error ? <p>Mauvais email ou mot de passe</p> : ""}
    <form action="/api/auth" method="post">
        <label htmlFor="email"></label>
        <input name="email" type="text" />
        <label htmlFor="password"></label>
        <input name="password" type="password" />
        <button type="submit"></button>
    </form>
    </div>
}

export default Login