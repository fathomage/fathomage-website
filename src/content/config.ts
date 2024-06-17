import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().url(),
    pubDate: z.date(),
    author: z.string(),
    profile: z.string(),
    type: z.string(),
    brief: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  post: postsCollection,
};
