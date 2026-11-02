import { FOUNDER_NAME } from "@/lib/site";
import { ScrollTrigger } from "./ScrollTrigger";
import styles from "./LaunchLog.module.css";

const LOG = [
  ["2013 – 14", "Neon Gaming Studio", "Co-founded an e-sports studio running online tournaments in India.", "Founded"],
  ["2015 – 17", "Uber · Nagpur", "Launched Uber from 0 to 1 as City Launcher. Ops, marketing, local regulatory relationships.", "Launched"],
  ["2015 – 17", "Uber · Trivandrum", "Second city launched from zero.", "Launched"],
  ["2017", "Uber Eats India", "2nd employee. Part of the small team that launched in the first 5 major Indian cities.", "Launched"],
  ["2017 – 19", "Uber Eats · Bengaluru", "Built and led a team of 12 operations managers across 4k+ partnerships.", "Scaled"],
  ["2019 – 21", "Uber Eats · US & Canada", "Built scaled processes for merchant operations, San Francisco.", "Scaled"],
  ["2021 – 24", "Uber Eats · Global", "Consumer app features, some 0 to 1 at a global level, across NA, LATAM, APAC, EMEA.", "Shipped"],
  ["2025 – 26", "Deel", "Staff Product Operations Manager.", "Shipped"],
  ["Oct 2026", "Deployyard", "Building the infrastructure for scaled robotics deployment.", "Building"],
];

export function LaunchLog() {
  return (
    <section className="sec" id="log" data-sec="3">
      <div className="wrap">
        <div className="shead rv">
          <span className="num">03 / Launch log</span>
          <h2 className="h2">Zero to one, <span style={{ color: "var(--yel)" }}>many times.</span></h2>
          <p className="lede">Before robots: cities, markets and products, launched from the ground up and then scaled.</p>
        </div>
        <ScrollTrigger className={styles.log} activeClassName={styles.go} at={0.8}>
          <div className={styles.loghead}>
            <span>deployment_history.log</span>
            <span>founder · {FOUNDER_NAME}</span>
          </div>
          <div className={styles.logrows} role="region" aria-label="Launch log" tabIndex={0}>
            {LOG.map(([when, where, what, status], i) => (
              <div className={styles.lr} style={{ "--dl": `${(i * 0.07).toFixed(2)}s` } as React.CSSProperties} key={where}>
                <span className={styles.t}>{when}</span>
                <span className={styles.wh}>{where}</span>
                <span className={styles.ds}>{what}</span>
                <span className={`${styles.chip} ${status === "Building" ? styles.y : ""}`}>{status.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
}
