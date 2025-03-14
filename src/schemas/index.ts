import { z } from 'zod'

export const NewBlogSchemaValidation = z.object({
  title: z
    .string()
    .nonempty({ message: 'Title is required.' }),
  author: z
    .string()
    .nonempty({ message: 'Author is required.' }),
  content: z
    .string()
    .nonempty({ message: 'Content is required.' })
    .max(500, { message: 'Content should not exceed 500 characters.' })
})