"use client";

import Link from "next/link";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { getScrollState, SERVER_SCROLL_STATE, subscribeScroll } from "@/lib/scrollStore";
import { SECTIONS } from "./sections";
import styles from "./Nav.module.css";

const getServerState = () => SERVER_SCROLL_STATE;
const noSubscribe = () => () => {};

/** The drawing ruler: section links, with a marker on the current one. On the other pages it's only the links. */
export function Ruler({ home }: { home: boolean }) {
  const { cur, mk } = useSyncExternalStore(home ? subscribeScroll : noSubscribe, home ? getScrollState : getServerState, getServerState);
  const ref = useRef<HTMLElement>(null);

  // Below 1000px the ruler scrolls sideways, so keep the current section in view.
  useEffect(() => {
    const ruler = ref.current;
    if (!home || !ruler || ruler.scrollWidth <= ruler.clientWidth) return;
    const link = ruler.querySelectorAll<HTMLElement>("[data-rl]")[cur];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    ruler.scrollTo({ left: link.offsetLeft - (ruler.clientWidth - link.offsetWidth) / 2, behavior: reduced ? "auto" : "smooth" });
  }, [home, cur]);

  return (
    <nav className={styles.ruler} aria-label="Sections" data-ruler="1" ref={ref}>
      <span className={styles.ticks} aria-hidden="true" />
      <span className={styles.base} aria-hidden="true" />
      <div className={styles.rlinks}>
        {SECTIONS.map((sec, i) => {
          const on = home && cur === i;
          return (
            <Link key={sec.n} href={sec.href} className={on ? styles.on : undefined} aria-current={on ? "location" : undefined} data-rl="1">
              <span className={styles.n}>{sec.n}</span>
              <span>{sec.label}</span>
            </Link>
          );
        })}
      </div>
      {home && <span className={styles.marker} style={{ left: `${mk}px` }} aria-hidden="true" />}
    </nav>
  );
}

export function Readout() {
  const { cur } = useSyncExternalStore(subscribeScroll, getScrollState, getServerState);
  return <span className={styles.readout}>Sec <b>{SECTIONS[cur].n}</b> / 05</span>;
}
