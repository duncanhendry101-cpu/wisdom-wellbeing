// src/components/Layout/Layout.tsx
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css";
import { ResourceModalProvider } from "@/context/ResourceModalContext";
import { ResourceModal } from "../ResourceModal/ResourceModal";

export function Layout() {
  return (
    <ResourceModalProvider>
      <Header />
      <main className={styles.layoutContainer}>
        <Outlet />
      </main>
      <Footer />

      <ResourceModal />
    </ResourceModalProvider>
  );
}
