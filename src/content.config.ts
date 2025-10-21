import { defineCollection, z, type CollectionEntry } from "astro:content";

const patterns = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    designer: z.string(),
    sizes: z.array(z.string()),
    requiredFabric: z.string().optional(),
    description: z.string().optional(),
    folder: z.string(),
    lineArt: z.string().optional(),
    patternFiles: z.array(z.string()).optional(),
    instructions: z.array(z.string()).optional(),
    samples: z.array(z.string()).optional(),
    videos: z.array(z.string()).optional(),
  }),
});

export const collections = {
  patterns,
};

export type Pattern = CollectionEntry<"patterns">;
