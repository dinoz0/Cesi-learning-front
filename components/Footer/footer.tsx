import Image from "next/image";
import styles from "../../styles/Home.module.css";

function Footer() {
  const scrollTop = () => {
    if (window) window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className={styles.footer}>
      <span className={styles.logo} style={{ cursor: "pointer" }}>
        <Image
          src="/favicon.ico"
          alt="Les2 Logo"
          width={32}
          height={32}
          onClick={scrollTop}
        />
      </span>
    </footer>
  );
}

export default Footer;
