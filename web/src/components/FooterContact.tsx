"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { setContactDraft } from "@/lib/contact/draft";
import styles from "./Footer.module.css";

/**
 * Starts the request: the email is carried over to the contact form, which
 * still needs a name and a role. Nothing is sent or stored from here.
 * The input has no name, so without JavaScript the form just opens the real one.
 */
export function FooterContact() {
  const router = useRouter();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("f-email") as HTMLInputElement;
    setContactDraft(input.value.trim());
    const form = document.getElementById("contact");
    if (form) form.scrollIntoView();
    else router.push("/#contact");
  }

  return (
    <form className={styles.pill} action="/#contact" onSubmit={onSubmit}>
      <input id="f-email" type="email" autoComplete="email" placeholder="Your email" aria-label="Your email" required maxLength={254} />
      <button type="submit" aria-label="Continue to the contact form">
        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M1 9h23M17 2l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}
