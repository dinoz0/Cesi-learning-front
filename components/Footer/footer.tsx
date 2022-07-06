import Image from "next/image";
import styles from "../../styles/Home.module.css";

function Footer() {
  const scrollTop = () => {
    if (window) window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className={styles.footer}>
      <span className={styles.logo} style={{ cursor: "pointer" }}>
        <a
          href="https://www.cesi.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/logo-cesi.png"
              alt="Logo Cesi Petit"
              width={72}
              height={16}
            />
          </span>
        </a>
      </span>
    </footer>
  );
}

export default Footer;
