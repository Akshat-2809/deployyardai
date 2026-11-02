import Link from "next/link";
import { CONTACT_EMAIL, FOUNDER_LINKEDIN } from "@/lib/site";
import { FooterContact } from "./FooterContact";
import { LogoMark } from "./Logo";
import { ScrollTrigger } from "./ScrollTrigger";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={`wrap ${styles.fgrid}`}>
        <div className={styles.brand}>
          <Link className={styles.logo} href="/#yard" aria-label="Deployyard home">
            <LogoMark />
            <span className={styles.wm}>Deploy<span>yard</span></span>
          </Link>
          <p className={styles.motto}>Infrastructure for robots at scale.</p>
          <p className={styles.about}>Building the infrastructure for scaled robotics deployment.</p>
          <p className={styles.info}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 21.5s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            India
          </p>
        </div>

        <nav aria-labelledby="f-explore">
          <h2 className={styles.head} id="f-explore">Explore</h2>
          <ul className={styles.list}>
            <li><Link href="/#yard">The yard</Link></li>
            <li><Link href="/#building">What we&apos;re building</Link></li>
            <li><Link href="/#record">Track record</Link></li>
            <li><Link href="/#log">Launch log</Link></li>
            <li><Link href="/#founder">Founder</Link></li>
          </ul>
        </nav>

        <nav aria-labelledby="f-policies">
          <h2 className={styles.head} id="f-policies">Policies</h2>
          <ul className={styles.list}>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </nav>

        <div className={styles.raise}>
          <h2 className={styles.head}>Get in touch</h2>
          <p className={styles.about}>Start with your email. We&apos;ll be in touch.</p>
          <FooterContact />
          <div className={styles.links}>
            <a className={styles.info} href={`mailto:${CONTACT_EMAIL}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              {CONTACT_EMAIL}
            </a>
            <a className={styles.info} href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2.5" />
                <path d="M8 10.5V17M8 7.2v.1M12 17v-6.5M12 13.5c0-1.8 1.2-3 2.6-3s2.4 1 2.4 3V17" />
              </svg>
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
      <ScrollTrigger className={styles.tray} activeClassName={styles.go} at={1} aria-hidden="true">
        <span className={styles.line} />
        <span className={styles.end} />
      </ScrollTrigger>
      <div className={styles.legal}>
        <span>© 2026 Deployyard</span>
        <Link href="/#yard">Back to the top ↑</Link>
      </div>
    </footer>
  );
}
