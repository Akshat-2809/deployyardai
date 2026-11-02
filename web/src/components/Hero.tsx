import Link from "next/link";
import { Yard } from "./Yard";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="yard" data-sec="0">
      <div className={`wrap ${styles.hgrid}`}>
        <div className={styles.hl}>
          <span className={styles.stealth} style={{ alignSelf: "flex-start" }}><i />Building in stealth · India</span>
          <h1 className={styles.h1}>Infrastructure for robots <span>at scale.</span></h1>
          <p className="lede">We&apos;re building the infrastructure for scaled robotics deployment. Led by an operator who has launched businesses from zero, city by city.</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn btn-y" href="/#contact">Get in touch</Link>
            <Link className="btn btn-l" href="/#log">See the launch log</Link>
          </div>
        </div>
        <Yard />
      </div>
    </section>
  );
}
