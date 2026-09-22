import { defineCollection, z } from 'astro:content';

const home = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

const projectLinksSchema = z
  .object({
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    other: z
      .object({
        label: z.string(),
        url: z.string().url(),
      })
      .optional(),
  })
  .optional();

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().optional(),
    featured: z.boolean().default(true),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    links: projectLinksSchema,
    thumbnail: z.string().optional(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { home, projects };
