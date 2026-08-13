export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  photo: string | null;
  linkedin: string | null;
};

/**
 * Empty on purpose — no testimonial has been provided yet. Visitors submit
 * testimonials via the form on the site, which lands in Vinícius's WhatsApp
 * (see components/TestimonialForm.tsx) for manual review. Once approved,
 * add the entry here; the section renders an elegant "coming soon" state
 * whenever this array is empty instead of showing fake quotes.
 */
export const testimonials: Testimonial[] = [];
