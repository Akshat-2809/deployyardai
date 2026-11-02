"use client";

import { useSyncExternalStore } from "react";

/** The email typed into the footer box, waiting for the contact form. */
let draft = "";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useContactDraft() {
  return useSyncExternalStore(subscribe, () => draft, () => "");
}

export function setContactDraft(email: string) {
  draft = email;
  listeners.forEach((l) => l());
}
