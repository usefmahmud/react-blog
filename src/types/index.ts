export type Blog = { 
  _id: string
  title: string
  author: string
  content: string
  createdAt: string
}

export type BlogData = Omit<Blog, 'id' | 'createdAt'>

export interface NewBlogFormSchema { 
  title: string
  author: string
  content: string
}