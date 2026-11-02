import { z } from "zod";

export const ROLES = ["Building robots", "Running operations", "Investing", "Want to join"] as const;
export type Role = (typeof ROLES)[number];

export type ContactField = "name" | "email" | "role";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(120, "That name is too long."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Please enter your email.")
    .max(254, "That email is too long.")
    .pipe(z.email("Please enter a valid email address.")),
  role: z.enum(ROLES, "Please choose one."),
});
