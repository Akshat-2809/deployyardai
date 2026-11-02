"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const LEVELS = [
  { label: "Pilot", sub: "1 unit", n: 1 },
  { label: "Site", sub: "12 units", n: 12 },
  { label: "Fleet", sub: "96 units", n: 96 },
  { label: "Network", sub: "240 units", n: 240 },
];
const BAYS = 240;

// Each bay's place in the fill order, spreading out from the middle of the yard.
const RANK: number[] = [];
Array.from({ length: BAYS }, (_, i) => i)
  .sort((a, b) => {
    const ax = (a % 24) - 11.5, ay = Math.floor(a / 24) - 4.5, bx = (b % 24) - 11.5, by = Math.floor(b / 24) - 4.5;
    return ax * ax + ay * ay * 2.2 - (bx * bx + by * by * 2.2);
  })
  .forEach((bay, i) => { RANK[bay] = i; });

/** The hero's scale-it panel: cycles through the levels on its own until someone picks one. */
export function Yard() {
  const [lv, setLv] = useState(0);
  const [touched, setTouched] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Runs only while on screen, and not at all with reduced motion.
  useEffect(() => {
    if (touched || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      clearInterval(timer);
      if (entry.isIntersecting) timer = setInterval(() => setLv((l) => (l + 1) % LEVELS.length), 2800);
    });
    observer.observe(ref.current!);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [touched]);

  const { label, n } = LEVELS[lv];

  return (
    <div className={`${styles.yard} corners`} ref={ref}>
      <div className={styles.ytop}>
        <span className="lab">The yard · scale it</span>
        <div className={styles.levels} role="group" aria-label="Scale">
          {LEVELS.map((l, i) => (
            <button
              type="button"
              key={l.label}
              className={`${styles.lv} ${i === lv ? styles.on : ""}`}
              aria-pressed={i === lv}
              onClick={() => { setLv(i); setTouched(true); }}
            >
              <span>{l.label}</span>
              <small>{l.sub}</small>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.bays} aria-hidden="true">
        {RANK.map((r, i) => (
          <span
            key={i}
            className={`${styles.bay} ${r < n ? styles.bayOn : ""} ${i % 24 >= 12 ? styles.mob : ""}`}
            style={{ "--dl": `${r < n ? Math.min(r, 120) * 6 : 0}ms` } as React.CSSProperties}
          >
            <i />
          </span>
        ))}
      </div>
      {/* Announced only when someone picks a level, not on every automatic change. */}
      <div className={styles.ystat} aria-live={touched ? "polite" : "off"}>
        <b>{n}<small>{n === 1 ? "unit" : "units"} · {label.toLowerCase()}</small></b>
        <span className="ill">Illustration · not real deployment data</span>
      </div>
    </div>
  );
}
