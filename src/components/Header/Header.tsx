import logo from "@/assets/logo.svg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <img src={logo} className={styles.logo} alt="logo.svg" />

        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/" className={styles.navLink}>
          About
        </Link>
        <Link to="/" className={styles.navLink}>
          Contact
        </Link>
      </div>
    </header>
  );
}
