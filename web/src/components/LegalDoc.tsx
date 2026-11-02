import type { ReactNode } from "react";
import { LEGAL_LAST_UPDATED } from "@/lib/legal";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import s from "./LegalDoc.module.css";

export type LegalSection = { id: string; title: string; body: ReactNode };
export type LegalSummaryRow = { subject: string; answer: ReactNode };

type Props = {
  title: string;
  intro: ReactNode;
  summary: LegalSummaryRow[];
  sections: LegalSection[];
};

/** A legal page: the short version on top, then the full text. Server-rendered, no client JS of its own. */
export function LegalDoc({ title, intro, summary, sections }: Props) {
  return (
    <>
      <Nav />
      <main>
        <header className={s.head}>
          <div className={`wrap ${s.headin}`}>
            <span className="lab" style={{ color: "#A7AAA4" }}>Last updated {LEGAL_LAST_UPDATED}</span>
            <h1 className={s.title}>{title}</h1>
            <p className={s.intro}>{intro}</p>
          </div>
        </header>

        <div className={`wrap ${s.page}`}>
          <section className={s.card} aria-labelledby="short-version">
            <div className={s.cardHead}>
              <h2 id="short-version">The short version</h2>
              <span className="lab">The full text below is what counts</span>
            </div>
            <dl className={s.rows}>
              {summary.map((row) => (
                <div className={s.row} key={row.subject}>
                  <dt>{row.subject}</dt>
                  <dd>{row.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className={s.layout}>
            <nav className={s.toc} aria-label="Contents">
              <details open className={s.tocBox}>
                <summary>Contents</summary>
                <ol>
                  {sections.map((sec, i) => (
                    <li key={sec.id}>
                      <a href={`#${sec.id}`}>
                        <span className={s.tocNum}>{String(i + 1).padStart(2, "0")}</span>
                        {sec.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            </nav>

            <article className={s.doc}>
              {sections.map((sec, i) => (
                <section key={sec.id} id={sec.id} className={s.section} aria-labelledby={`${sec.id}-h`}>
                  <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <h2 id={`${sec.id}-h`}>{sec.title}</h2>
                  {sec.body}
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
