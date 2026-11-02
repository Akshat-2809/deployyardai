"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useContactDraft } from "@/lib/contact/draft";
import { contactSchema, ROLES, type ContactField } from "@/lib/contact/schema";
import s from "./Contact.module.css";

type FieldErrors = Partial<Record<ContactField, string>>;

/** Front end only: checks the fields and shows the thank-you. Nothing is sent or stored. */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [role, setRole] = useState<string>(ROLES[0]);
  const doneRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const draftEmail = useContactDraft();

  useEffect(() => {
    if (sent) doneRef.current?.focus();
  }, [sent]);

  // Arriving from the footer box: the email is filled in, so the name comes next.
  useEffect(() => {
    if (draftEmail) nameRef.current?.focus({ preventScroll: true });
  }, [draftEmail]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({ name: data.get("name"), email: data.get("email"), role });
    if (parsed.success) {
      setSent(true);
      return;
    }
    const next: FieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactField;
      if (!next[key]) next[key] = issue.message;
    }
    setErrors(next);
  }

  if (sent) {
    return (
      <div className={`${s.form} corners`} ref={doneRef} tabIndex={-1} role="status" style={{ outline: "none" }}>
        <span className="lab">Received</span>
        <h3 style={{ fontSize: 48 }}>Thanks. We&apos;ll be in touch.</h3>
      </div>
    );
  }

  const describe = (f: ContactField) => (errors[f] ? `c-${f}-err` : undefined);

  return (
    <form onSubmit={onSubmit} className={`${s.form} corners`} noValidate>
      <div className={s.field}>
        <label htmlFor="c-name">Name</label>
        <input ref={nameRef} id="c-name" name="name" type="text" autoComplete="name" placeholder="Your name" required maxLength={120}
          aria-invalid={!!errors.name} aria-describedby={describe("name")} />
        {errors.name && <span id="c-name-err" className={s.ferr}>{errors.name}</span>}
      </div>
      <div className={s.field}>
        <label htmlFor="c-email">Email</label>
        <input key={draftEmail} id="c-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254}
          defaultValue={draftEmail} aria-invalid={!!errors.email} aria-describedby={describe("email")} />
        {errors.email && <span id="c-email-err" className={s.ferr}>{errors.email}</span>}
      </div>
      <div className={s.field}>
        <span className={s.flab}>I&apos;m</span>
        <div className={s.opts} role="group" aria-label="I am">
          {ROLES.map((r) => (
            <button type="button" key={r} className={`${s.opt} ${r === role ? s.on : ""}`} aria-pressed={r === role} onClick={() => setRole(r)}>{r}</button>
          ))}
        </div>
      </div>

      <button type="submit" className={`btn btn-y ${s.send}`}>Send</button>
    </form>
  );
}
