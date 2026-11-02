import Image from "next/image";
import founderPhoto from "@/assets/founder/pramod-patil.jpg";
import { FOUNDER_LINKEDIN, FOUNDER_NAME } from "@/lib/site";
import styles from "./Founder.module.css";

export function Founder() {
  return (
    <section className="sec" id="founder" data-sec="4" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="shead rv">
          <span className="num">04 / Founder</span>
          <h2 className="h2">Launch, product, operations.</h2>
        </div>
        <div className={styles.fdr}>
          <div className={`${styles.badge} corners`}>
            <div className={styles.ph}>
              <Image src={founderPhoto} alt={FOUNDER_NAME} width={220} height={220} sizes="220px" placeholder="blur" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <h3 style={{ fontSize: 44 }}>{FOUNDER_NAME}</h3>
              <span className="lab">Builder · Deployyard</span>
            </div>
            <div className={styles.kv}>
              <div><span>Before</span>Deel · Uber</div>
              <div><span>At Uber</span>8 yrs 10 mos</div>
              <div><span>Worked across</span>Product, Ops, Marketing, CS</div>
              <div><span>Based</span>India</div>
            </div>
            <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15 }}>LinkedIn ↗</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <p className={styles.pull}>Launching businesses <span>ground up.</span></p>
            <p className="lede">From launching Uber in Nagpur and Trivandrum, to being the second employee of Uber Eats India, to prioritising Uber Eats consumer features across North America, LATAM, APAC and EMEA from San Francisco, and then Product Operations at Deel.</p>
            <p className="lede">On the Uber Eats India team, in his words: “To witness a team grow from 2 people to hundreds, and a business grow from nothing to millions, was undoubtedly an experience of a lifetime.”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
