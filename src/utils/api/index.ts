import { api } from '../../services/api'
import { Blog, NewBlogFormSchema } from '../../types'

export const fetchAllBlogs = async () => {
  return (await api.get('/blogs')).data
}

export const fetchBlogById = async (id: Blog['_id']) => {  
  return (await api.get(`/blogs/${id}`)).data
}

export const createBlog = async (data: NewBlogFormSchema) => {
  return await api.post('/blogs', data)
}

export const updateBlog = async (id: Blog['_id'], data: NewBlogFormSchema) => {
  return await api.put(`/blogs/${id}`, data)
}

export const deleteBlog = async (id: Blog['_id']) => {
  return await api.delete(`/blogs/${id}`)
}