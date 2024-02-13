import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
    schema: ({image}) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string()
    })
});

// posts name has to match with the dir
export const collections = {
    posts: postCollection,
};