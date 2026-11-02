import Link from "next/link";
import { LogoMark } from "./Logo";
import { Readout, Ruler } from "./Ruler";
import styles from "./Nav.module.css";

export function Nav({ home = false }: { home?: boolean }) {
  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.navin}`}>
        <Link className={styles.logo} href="/#yard" aria-label="Deployyard home">
          <LogoMark />
          <b>Deploy<span>yard</span></b>
        </Link>
        <Ruler home={home} />
        <div className={styles.navr}>
          {home && <Readout />}
          <Link className="btn btn-y" href="/#contact" style={{ minHeight: 44 }}>Get in touch</Link>
        </div>
      </div>
    </header>
  );
}
