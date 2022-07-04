import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const Client = () => {
  return (
    <div className={styles.navigate}>
      <Link href={"/login"}>Se connecter</Link>
    </div>
  );
};
function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.navigate}>
        <Link href={"/"}>
          <Image src="/logo-cesi.png" alt="logo-cesi" width={167} height={76} />
        </Link>
      </div>
      <Client />
    </div>
  );
}

export default Navbar;
