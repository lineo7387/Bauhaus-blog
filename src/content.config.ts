import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    author: z.string().default('Anonymous'),
    readingTime: z.number().optional(),
    planId: z.string().optional(),
  }),
});

const plans = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/_plans' }),
  schema: z.object({
    title: z.string().optional(),
    skill: z.string().optional(),
    planOrder: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, plans };
