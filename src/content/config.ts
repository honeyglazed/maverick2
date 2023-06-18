import { z, defineCollection } from 'astro:content';

const resourceCollection = defineCollection({
    type: 'data',
    schema: ({image}) => z.object({
        path: z.string(),
        title: z.string(),
        language: z.enum(['en', 'cn']),
        description: z.string(),
        thumbnail_img: image(),
        featured_img: image().optional(),
        featured_video: z.string().optional(),
        gallery_imgs: z.array(image())
    })
})

export const collections = {
    'resources': resourceCollection,
}