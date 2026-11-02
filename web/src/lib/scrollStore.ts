/** Shared client state for the nav: which section is current, and where the ruler's marker sits. */
export type ScrollState = { cur: number; mk: number };

export const SERVER_SCROLL_STATE: ScrollState = { cur: 0, mk: 0 };

let state = SERVER_SCROLL_STATE;
let raf = 0;
let settle: ReturnType<typeof setTimeout> | undefined;
const listeners = new Set<() => void>();

function measure() {
  raf = 0;
  const vh = window.innerHeight || 800;
  let cur = 0;
  document.querySelectorAll("[data-sec]").forEach((sec) => {
    if (sec.getBoundingClientRect().top < vh * 0.45) cur = Number(sec.getAttribute("data-sec"));
  });
  const link = document.querySelectorAll<HTMLElement>("[data-rl]")[cur];
  const ruler = document.querySelector("[data-ruler]");
  const mk = link && ruler ? Math.round(link.getBoundingClientRect().left - ruler.getBoundingClientRect().left + link.offsetWidth / 2 + ruler.scrollLeft) : 0;
  if (cur === state.cur && mk === state.mk) return;
  state = { cur, mk };
  listeners.forEach((l) => l());
}

function schedule() {
  if (!raf) raf = requestAnimationFrame(measure);
}

export function getScrollState() {
  return state;
}

export function subscribeScroll(listener: () => void) {
  if (listeners.size === 0) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    // The links change width when the fonts arrive.
    settle = setTimeout(schedule, 400);
    document.fonts?.ready.then(schedule);
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      clearTimeout(settle);
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}
