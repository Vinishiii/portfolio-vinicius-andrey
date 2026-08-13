import { z } from "zod";

export const testimonialSchema = z.object({
  name: z.string().min(2),
  roleCompany: z.string().optional(),
  comment: z.string().min(10),
});

export type TestimonialPayload = z.infer<typeof testimonialSchema>;
