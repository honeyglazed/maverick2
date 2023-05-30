import { z, defineCollection } from 'astro:content';

const resourceCollection = defineCollection({
    type: 'data',
    schema: ({image}) => z.object({
        title: z.string(),
        language: z.enum(['en', 'cn']),
        description: z.string(),
        thumbnail_img: image(),
        featured_img: z.string(),
        gallery_imgs: z.array(z.string())
    })
})

export const collections = {
    'resources': resourceCollection,
}