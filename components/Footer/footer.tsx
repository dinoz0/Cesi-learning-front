import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

function Footer() {
  const scrollTop = () => {
    if (window) window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>
        <Image
          src="/favicon.ico"
          alt="Les2 Logo"
          width={32}
          height={32}
          onClick={scrollTop}
        />
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
