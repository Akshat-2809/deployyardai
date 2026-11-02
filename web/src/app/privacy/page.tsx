import type { Metadata } from "next";
import { LegalDoc, type LegalSection, type LegalSummaryRow } from "@/components/LegalDoc";
import s from "@/components/LegalDoc.module.css";
import { LEGAL_LOCATION } from "@/lib/legal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy — Deployyard",
  description: "What Deployyard asks for when you get in touch, why, who sees it, and the rights you have under Indian law.",
  alternates: { canonical: "/privacy" },
};

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const SUMMARY: LegalSummaryRow[] = [
  { subject: "The form", answer: "It doesn’t send or store what you type. It stays in your browser and is gone when you leave the page." },
  { subject: "To reach us", answer: <>Write to {mail}. We then hold your email address and whatever you include.</> },
  { subject: "What we never do", answer: "Sell your data, use it for advertising, or follow you around the web." },
  { subject: "Changing your mind", answer: <>Write to {mail} and we’ll delete your emails.</> },
];

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Deployyard is based in {LEGAL_LOCATION}. We are building the infrastructure for scaled robotics deployment, and we are
          currently in stealth.
        </p>
        <p>
          This policy covers this website and any email you send us. For the data described here, we decide why and how it is
          used, so under Indian law we are the <b>Data Fiduciary</b> and you are the <b>Data Principal</b>. We follow the
          Information Technology Act, 2000 and the SPDI Rules, 2011, and we are aligning with the Digital Personal Data Protection
          Act, 2023 and its Rules of 2025 (the &ldquo;DPDP law&rdquo;) as they come into force.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <h3>When you use the &ldquo;Get in touch&rdquo; form</h3>
        <p>Nothing. The form checks your entries in your browser. What you type isn&apos;t sent to us or stored anywhere.</p>
        <h3>When you email us</h3>
        <p>Your email address and whatever you choose to include.</p>
        <h3>When you visit</h3>
        <p>
          Our hosting provider keeps standard request logs (IP address, time, page, browser) for security and reliability. We
          use no advertising or analytics cookies, and our fonts are served from our own domain.
        </p>
        <h3>Please leave out</h3>
        <p>Passwords, bank or card details, health information and the like. We don&apos;t need them and don&apos;t want them.</p>
      </>
    ),
  },
  {
    id: "why-we-use-it",
    title: "Why we use it",
    body: (
      <ul>
        <li><b>To reply to you,</b> when you email us. Basis: your consent, given when you write to us.</li>
        <li><b>To keep the website safe</b> and running. Basis: the reasonable security practices the law requires.</li>
        <li><b>To meet legal duties</b> and answer lawful requests.</li>
      </ul>
    ),
  },
  {
    id: "who-can-see-it",
    title: "Who can see it",
    body: (
      <>
        <p>Our team, and only where needed:</p>
        <ul>
          <li><b>Service providers</b> that run this website and our email for us, under contract.</li>
          <li><b>Professional advisers,</b> such as lawyers and auditors, under a duty of confidentiality.</li>
          <li><b>Authorities and courts,</b> where the law requires it or to protect our legal rights.</li>
          <li><b>A buyer or successor,</b> if we are part of a merger or sale, with this policy still protecting your data.</li>
        </ul>
        <p>
          Our providers may store or process data outside India. The DPDP law allows that except to countries the Central
          Government restricts, and we won&apos;t transfer data to a restricted country.
        </p>
      </>
    ),
  },
  {
    id: "how-long",
    title: "How long we keep it",
    body: (
      <>
        <ul>
          <li><b>Emails:</b> up to 24 months after our last exchange, or until you ask us to delete them.</li>
          <li><b>Hosting logs:</b> a short period, typically no more than 30 days.</li>
        </ul>
        <p>If you withdraw consent or ask us to erase your data, we will, unless the law requires us to keep it.</p>
      </>
    ),
  },
  {
    id: "how-we-protect-it",
    title: "How we look after it",
    body: (
      <>
        <p>We keep reasonable security practices, as section 43A of the IT Act and the SPDI Rules require. This website is served over an encrypted connection, and only the people who need access to our email have it.</p>
        <p>
          Nothing online is perfectly secure. If a personal data breach happens, we will tell the people affected and the Data
          Protection Board of India as the DPDP law requires, and report cyber security incidents to CERT-In within the time its
          directions set.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Subject to the law, you can:</p>
        <ul>
          <li>ask what data we hold about you, how we use it and who we&apos;ve shared it with;</li>
          <li>ask us to correct or update it;</li>
          <li>ask us to erase it;</li>
          <li>withdraw your consent at any time, as easily as you gave it, which doesn&apos;t affect what already happened;</li>
          <li>nominate someone to use these rights for you if you die or can&apos;t act yourself; and</li>
          <li>complain to us, and then to the Data Protection Board of India if you aren&apos;t satisfied.</li>
        </ul>
        <p>
          Email {mail} with the subject &ldquo;Privacy request&rdquo;. We may ask you to confirm who you are, and we&apos;ll respond
          within 30 days. The DPDP law also expects you not to impersonate anyone or file false complaints.
        </p>
      </>
    ),
  },
  {
    id: "grievance-officer",
    title: "Something wrong? Our Grievance Officer",
    body: (
      <>
        <p>Under Rule 5(9) of the SPDI Rules and the DPDP law, complaints about your data go to our Grievance Officer:</p>
        <div className={s.stuck}>
          <p><b>Grievance Officer, Deployyard</b></p>
          <p>Email: {mail} (subject: &ldquo;Grievance&rdquo;)</p>
          <p>Address: {LEGAL_LOCATION}</p>
        </div>
        <p>
          We&apos;ll acknowledge your complaint promptly and resolve it within 30 days. If you aren&apos;t satisfied, you may go to
          the Data Protection Board of India once the relevant provisions are in force.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: <p>This website is for adults. We don&apos;t knowingly collect personal data from anyone under 18. If you think a child has sent us personal data, tell us and we&apos;ll delete it.</p>,
  },
  {
    id: "other-sites",
    title: "Other websites",
    body: <p>Some links lead to other websites. Their own privacy policies apply there, not this one.</p>,
  },
  {
    id: "changes",
    title: "When this policy changes",
    body: <p>We&apos;ll post the new version here with a new date. If the form starts sending or storing what you type, this policy will say so first.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy policy"
      intro="What we ask for when you get in touch, why, and what happens to it."
      summary={SUMMARY}
      sections={SECTIONS}
    />
  );
}
