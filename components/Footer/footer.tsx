import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

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
      <Link
          href="/about"
        >
          <span className={styles.about}>
            A propos
          </span>
        </Link>
    </footer>
  );
}

export default Footer;
