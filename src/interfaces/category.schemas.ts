import { z } from 'zod';

// Category validation schema
export const categorySchema = z.object({
  title: z
    .string()
    .min(3, "Category title must be at least 3 characters")
    .max(50, "Category title not more than 50 characters")
    .trim(),
  value: z
    .any()
    .optional(),
  thumbnail: z.any().optional()
});

// Generate TypeScript types from the schema
export type Category = z.infer<typeof categorySchema>;

// Category Update Schema (to handle updates)
export const categoryUpdateSchema = categorySchema.partial().extend({
  // Allow partial updates
});


