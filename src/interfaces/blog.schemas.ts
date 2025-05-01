import { z } from "zod";

// banner validation schema
export const blogSchema = z.object({
    title: z
        .string()
        .min(3, "Banner title must be at least 3 characters")
        .max(50, "Banner title not more than 50 characters")
        .trim(),
    image: z.any().optional(),
});

export type BlogFormData = z.infer<typeof blogSchema>;

export interface IBlog {
    id: string;
    title: string;
    description: string;
    image: string;
    isActive: boolean;
    createdAt: Date;
}

// Banner Update Schema (to handle updates)
export const bannerUpdateSchema = blogSchema.partial().extend({
    // Allow partial updates
});
