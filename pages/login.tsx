import { NextPage } from "next";

const Login: NextPage = () => {
    return <form action="/api/auth" method="post">
        <label htmlFor="email"></label>
        <input name="email" type="text" />
        <label htmlFor="password"></label>
        <input name="password" type="password" />
        <button type="submit"></button>
    </form>
}

export default Login