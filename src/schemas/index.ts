import * as zod from 'zod'

export const NewBlogSchemaValidation = zod.object({
  title: zod
    .string()
    .nonempty({ message: 'Title is required.' }),
  author: zod
    .string()
    .nonempty({ message: 'Author is required.' }),
  content: zod
    .string()
    .nonempty({ message: 'Content is required.' })
    .max(500, { message: 'Content should not exceed 500 characters.' })
})