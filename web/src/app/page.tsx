import { Building } from "@/components/Building";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Founder } from "@/components/Founder";
import { Hero } from "@/components/Hero";
import { LaunchLog } from "@/components/LaunchLog";
import { Nav } from "@/components/Nav";
import { Record } from "@/components/Record";
import { CONTACT_EMAIL, FOUNDER_LINKEDIN, FOUNDER_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: CONTACT_EMAIL,
  description: SITE_DESCRIPTION,
  slogan: "Infrastructure for robots at scale.",
  founder: { "@type": "Person", name: FOUNDER_NAME, jobTitle: "Founder", sameAs: [FOUNDER_LINKEDIN] },
  address: { "@type": "PostalAddress", addressCountry: "IN" },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Nav home />
      <main>
        <Hero />
        <Building />
        <Record />
        <LaunchLog />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
