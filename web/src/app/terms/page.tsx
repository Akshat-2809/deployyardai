import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, type LegalSection, type LegalSummaryRow } from "@/components/LegalDoc";
import { LEGAL_LOCATION } from "@/lib/legal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use — Deployyard",
  description: "The rules for using the Deployyard website and getting in touch through it.",
  alternates: { canonical: "/terms" },
};

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const SUMMARY: LegalSummaryRow[] = [
  { subject: "This website", answer: "It shares how we see the problem. The product isn’t on sale here, and plans may change." },
  { subject: "Getting in touch", answer: "The form on this site doesn’t send or store anything yet. To reach us, email us. Nothing here is a contract or a promise of a reply." },
  { subject: "The illustrations", answer: "The yard on the home page is an illustration. It isn’t real deployment data and doesn’t show a product." },
  { subject: "If we disagree", answer: "Indian law applies, and the courts in India decide." },
];

const SECTIONS: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms cover your use of this website (the &ldquo;Website&rdquo;), run by Deployyard, based in {LEGAL_LOCATION}{" "}
          (&ldquo;we&rdquo; or &ldquo;us&rdquo;). By using it, you agree to them. If you don&apos;t agree, please don&apos;t use it.
        </p>
        <p>
          These terms are an electronic record under the Information Technology Act, 2000 and need no signature. How we handle
          your data is explained in our <Link href="/privacy">privacy policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "who-may-use",
    title: "Who may use the Website",
    body: <p>Anyone may read it. To send us your details, you must be at least 18 and able to contract under the Indian Contract Act, 1872.</p>,
  },
  {
    id: "what-it-is",
    title: "What the Website is, and isn't",
    body: (
      <ul>
        <li><b>In stealth.</b> We are still building and testing. The Website describes our thinking and our progress, and that may change without notice. It isn&apos;t an offer to provide a product or service.</li>
        <li><b>Illustrations.</b> The yard on the home page is an illustration. It isn&apos;t real deployment data or a product, and it doesn&apos;t promise particular features or results.</li>
        <li><b>Past work.</b> The track record and launch log describe the founder&apos;s earlier work at other companies. Those companies&apos; names belong to them, and they are mentioned as history, not as an endorsement of Deployyard.</li>
      </ul>
    ),
  },
  {
    id: "getting-in-touch",
    title: "Getting in touch",
    body: (
      <>
        <p>
          The form on this site doesn&apos;t yet send or store what you type, so we won&apos;t receive it. To reach us, write to {mail}.
        </p>
        <p>When you email us:</p>
        <ul>
          <li>what you tell us must be true, and the email address must be your own;</li>
          <li>it doesn&apos;t create a contract or guarantee a reply, a demo or access to anything; and</li>
          <li>you can ask us to delete your details at any time.</li>
        </ul>
      </>
    ),
  },
  {
    id: "rules",
    title: "Rules",
    body: (
      <>
        <p>Please don&apos;t:</p>
        <ul>
          <li>use the Website for anything unlawful, fraudulent or harmful;</li>
          <li>pretend to be someone else, or submit anyone&apos;s details without their permission;</li>
          <li>send spam, or false, automated or bulk messages;</li>
          <li>scrape or copy the Website by automated means, except search engines that follow our robots.txt;</li>
          <li>probe it for weaknesses, break its security, or introduce harmful code; or</li>
          <li>copy, modify or reverse engineer it, except as the law allows.</li>
        </ul>
        <p>Found a security problem? Tell us at {mail} and give us reasonable time to fix it before sharing it.</p>
      </>
    ),
  },
  {
    id: "our-work",
    title: "Our work",
    body: (
      <>
        <p>
          The Website and everything on it, including the text, illustrations, the Deployyard name and logo and the code, belong to us
          or our licensors and are protected by law. You may view it for your own use. You may not use our name or logo without our
          written permission.
        </p>
        <p>If you send us feedback or ideas, we may use them with no obligation to you.</p>
      </>
    ),
  },
  {
    id: "other-sites",
    title: "Other websites",
    body: <p>Some links lead to sites we don&apos;t run, including LinkedIn. We aren&apos;t responsible for their content, terms or privacy practices.</p>,
  },
  {
    id: "no-promises",
    title: "What we can't promise, and our limits",
    body: (
      <>
        <p>
          As far as the law allows, the Website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties
          of any kind, including accuracy, availability or fitness for a particular purpose. We work to keep it right and running,
          but we can&apos;t guarantee it will be error-free or uninterrupted.
        </p>
        <p>
          As far as the law allows, we aren&apos;t liable for indirect or consequential loss, or for lost profits, data or
          goodwill, and our total liability arising from the Website or these terms won&apos;t exceed ₹5,000. Nothing here limits
          liability that the law doesn&apos;t allow us to limit, including for fraud.
        </p>
        <p>
          You agree to cover claims, losses and reasonable costs, including legal fees, that arise from your breach of these terms
          or misuse of the Website.
        </p>
      </>
    ),
  },
  {
    id: "suspension",
    title: "Suspension",
    body: <p>We may suspend or restrict access to the Website at any time, including to protect its security or if we reasonably believe you have broken these terms.</p>,
  },
  {
    id: "law",
    title: "Law and disputes",
    body: (
      <p>
        These terms are governed by the laws of India, and the courts in India have exclusive jurisdiction. Before
        that, you may raise any complaint with our Grievance Officer at {mail} (subject: &ldquo;Grievance&rdquo;). We resolve
        grievances within 30 days. More is in our <Link href="/privacy#grievance-officer">privacy policy</Link>.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes, and the rest",
    body: (
      <>
        <p>
          We may update these terms. The new version takes effect when we post it here with a new date, and using the Website
          after that means you accept it.
        </p>
        <ul>
          <li><b>Whole agreement:</b> these terms and our privacy policy are the whole agreement between us about the Website.</li>
          <li><b>If part fails:</b> if a provision is held invalid, the rest still stands.</li>
          <li><b>No waiver:</b> if we don&apos;t enforce a provision now, we can still enforce it later.</li>
          <li><b>Transfer:</b> you can&apos;t transfer your rights under these terms. We may transfer ours in a merger or sale.</li>
          <li><b>Beyond our control:</b> we aren&apos;t responsible for delays or failures caused by events outside our reasonable control.</li>
        </ul>
        <p>Any questions? Write to {mail}.</p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of use"
      intro="We're in stealth, so these rules are short. They cover this website and getting in touch through it."
      summary={SUMMARY}
      sections={SECTIONS}
    />
  );
}
