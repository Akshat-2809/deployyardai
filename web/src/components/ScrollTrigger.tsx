"use client";

import { useEffect, useRef, useState } from "react";

type Props = React.HTMLAttributes<HTMLElement> & {
  as?: "div" | "footer";
  /** Added once the element's top is above this fraction of the viewport height. Stays on. */
  activeClassName: string;
  at: number;
};

/** Plays a one-shot CSS transition (statement callouts, launch log, footer line) when the element scrolls into view. */
export function ScrollTrigger({ as: Tag = "div", activeClassName, at, className, children, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const el = ref.current;
      if (el && el.getBoundingClientRect().top < window.innerHeight * at) setActive(true);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [at]);

  return (
    <Tag ref={ref as never} className={`${className ?? ""} ${active ? activeClassName : ""}`} {...rest}>
      {children}
    </Tag>
  );
}
