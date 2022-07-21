import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Connect = () => {
  return (
    <div className={styles.navigate}>
      <Link href={"/login"}>Se connecter</Link>
    </div>
  );
};
const Disconnect = () => {
  return (
    <div className={styles.navigate}>
      <Link href={"/api/logout"}>Se déconnecter</Link>
    </div>
  );
};
function Navbar() {
  let logged = false
  const router = useRouter()
  if (router.pathname.includes("login")) {
    logged = false
  } else {
    logged = true
  }
  return (
    <div className={styles.nav}>
      <div className={styles.navigate}>
        <Link href={"/"}>
          <Image src="/logo-cesi.png" alt="logo-cesi" width={167} height={76} />
        </Link>
      </div>
      {logged ? <Disconnect/> : <Connect />}
    </div>
  );
}

export default Navbar;
