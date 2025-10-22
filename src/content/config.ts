import { defineCollection, z, type CollectionEntry } from "astro:content";

const patterns = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    designer: z.string(),
    category: z.array(z.enum(["Damen", "Herren", "Kinder", "Taschen", "Spielzeug"])),
    sizes: z
      .array(
        z.enum([
          "US 2",
          "US 4",
          "US 6",
          "US 8",
          "US 10",
          "US 12",
          "US 14",
          "US 16",
          "US 18",
          "US 20",
          "US 22",
          "US 24",
          "US 26",
          "US 28",
          "US 30",
          "US 32",
          "US 34",
          "EU 32",
          "EU 34",
          "EU 36",
          "EU 38",
          "EU 40",
          "EU 42",
          "S",
          "M",
          "L",
          "XL",
          "XXL",
        ])
      )
      .optional(),
    includesCupSizing: z.boolean(),
    requiredFabricType: z.array(z.enum(["Webware", "Strick"])).optional(),
    tags: z.array(z.string()),
    description: z.string().optional(),
    // files
    folder: z.string(),
    lineArt: z.string().optional(),
    patternFiles: z.array(z.string()).optional(),
    instructions: z.array(z.string()).optional(),
    samples: z.array(z.string()).optional(),
    videos: z.array(z.string()).optional(),
    language: z.enum(["en", "de"]),
  }),
});

export const collections = {
  patterns,
};

export type Pattern = CollectionEntry<"patterns">;
