import { defineCollection, z } from 'astro:content'

// Define the schema for the blog collection
const blogCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.date(),
			description: z.string(),
			author: z.string(),
			image: image(),
			// image: image().refine(img => img.width < 1200, {
			// 	message: 'Image width should be lower than 1200px'
			// }),
			tags: z.array(z.string()).optional()
		})
})

export const collections = {
	blog: blogCollection
}
