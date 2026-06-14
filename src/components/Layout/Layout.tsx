// src/components/Layout/Layout.tsx
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className="app-container">
      {/* Persistant Top Navigation Shell */}
      <Header />

      {/* Dynamic View Mounting Area */}
      <main className={styles.layoutContainer}>
        <Outlet />
      </main>

      {/* Persistant Footer */}
      <Footer />
    </div>
  );
}
