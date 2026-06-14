import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.copyright}>
          © 2026 Wisdom Wellbeing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
