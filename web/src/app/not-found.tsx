import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found — Deployyard",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={`wrap ${styles.inner}`}>
        <Link className={styles.logo} href="/" aria-label="Deployyard home">
          <LogoMark />
          <b>Deploy<span>yard</span></b>
        </Link>
        <span className="lab">Error 404</span>
        <h1 className={styles.big}>404</h1>
        <p className={styles.note}>Nothing is deployed at this address.</p>
        <Link className="btn btn-y" href="/">Back to the yard</Link>
      </div>
    </main>
  );
}
