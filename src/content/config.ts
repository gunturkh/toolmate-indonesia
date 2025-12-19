import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    image: z.string(),
    badge: z.string(),
    badgeColor: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    fullDescription: z.string(),
    scope: z.array(z.string()),
    client: z.string(),
    location: z.string(),
    year: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
