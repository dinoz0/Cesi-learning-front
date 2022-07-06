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

const Seartchbar = () => {
  return (
    <div>
      <label className="hidden">Search</label>
      <input placeholder="Search for products..." defaultValue={""} />
      <div>
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
      </div>
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
      <Seartchbar />
      <Client />
    </div>
  );
}

export default Navbar;
