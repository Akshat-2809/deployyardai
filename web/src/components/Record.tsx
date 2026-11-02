import styles from "./Record.module.css";

const STATS = [
  ["$300M+", "Uber Eats India business built by the launch team in 30 months"],
  ["2 → 100s", "That team, from 2 people to hundreds. He was employee #2."],
  ["50M+", "Monthly active users reached by features he launched"],
  ["4k+", "Restaurant partnerships run by his team of 12 in Bengaluru"],
];

export function Record() {
  return (
    <section className={styles.band} id="record" data-sec="2" aria-label="Track record">
      <div className={`wrap ${styles.stats}`}>
        {STATS.map(([value, text]) => (
          <div className={styles.stat} key={value}>
            <b>{value}</b>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
