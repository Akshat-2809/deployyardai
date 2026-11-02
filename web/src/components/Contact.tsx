import { CONTACT_EMAIL } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className="sec" id="contact" data-sec="5" style={{ paddingTop: 20 }}>
      <div className="wrap">
        <div className="shead rv">
          <span className="num">05 / Get in touch</span>
          <h2 className="h2">Working with robots? <span style={{ color: "var(--yel)" }}>Let&apos;s talk.</span></h2>
        </div>
        <div className={styles.ctg}>
          <ContactForm />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p className="lede">Building robots, running operations where they&apos;ll work, investing, or want to build this with us. Write to</p>
            <a className={styles.mail} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
