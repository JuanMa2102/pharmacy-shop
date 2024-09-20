import { defineCollection, z } from 'astro:content';

const medicine = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		name: z.string(),
		price: z.number(),
		suggestion: z.string(),
		image: z.string().optional(),
	}),
});

export const collections = { medicine };
