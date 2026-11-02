import { ScrollTrigger } from "./ScrollTrigger";
import styles from "./Building.module.css";

const LEGEND = [
  ["01", "Infrastructure", "The layer underneath, not a single robot."],
  ["02", "Scaled", "Built for many, not a one-off pilot."],
  ["03", "Robotics", "Machines working in the real world."],
  ["04", "Deployment", "Getting them into operation."],
];

export function Building() {
  return (
    <section className="sec" id="building" data-sec="1">
      <ScrollTrigger className={`wrap ${styles.stmt}`} activeClassName={styles.go} at={0.7}>
        <span className="num">01 / What we&apos;re building</span>
        <p className={styles.statement}>
          Building the <span className={styles.w}>infrastructure<sup>01</sup></span> for{" "}
          <span className={styles.w}>scaled<sup>02</sup></span>{" "}
          <span className={styles.w}>robotics<sup>03</sup></span>{" "}
          <span className={styles.w}>deployment.<sup>04</sup></span>
        </p>
        <div className={styles.legend}>
          {LEGEND.map(([k, title, text]) => (
            <div className={styles.lg} key={k}>
              <span className={styles.k}>{k}</span>
              <b>{title}</b>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="lab" style={{ marginTop: 22 }}>More detail when we come out of stealth.</p>
      </ScrollTrigger>
    </section>
  );
}
