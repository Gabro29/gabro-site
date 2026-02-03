import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.string(),
            description: z.string(),
            technologies: z.array(z.string()),
            img: image(),
        }),
});

export const collections = { projects };
