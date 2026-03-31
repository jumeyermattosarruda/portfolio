import { defineCollection, z } from 'astro:content';

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    order: z.number(),
    question: z.string(),
    title: z.string(),
    ariaLabel: z.string().optional(),
    subtitle: z.string(),
    icon: z.enum(['star-outline', 'asterisk', 'sine-wave', 'star-filled', 'stacked-rects', 'globe']),
    stat: z.string().optional(),
    statLabel: z.string().optional(),
    links: z
      .array(z.object({ text: z.string(), url: z.string() }))
      .optional(),
    imagePlaceholders: z
      .array(
        z.object({
          label: z.string(),
          src: z.string().optional(),
          wide: z.boolean().optional(),
        })
      )
      .optional(),
    caseStudies: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          url: z.string().optional(),
          linkLabel: z.string().optional(),
        })
      )
      .optional(),
    countries: z
      .array(z.object({ tab: z.string(), role: z.string(), body: z.string() }))
      .optional(),
  }),
});

export const collections = { sections };
