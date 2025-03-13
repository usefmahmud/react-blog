import { useQuery } from '@tanstack/react-query'
import { fetchBlogById } from '../../utils/api'
import { Blog } from '../../types'

interface Response {
  data: {
    blog: Blog
  }
}

export const useGetPostById = (blogId: Blog['_id'], options?: object) => {
  const getBlogQuery = useQuery<Response>({
    queryKey: ['get-post', blogId],
    queryFn: () => fetchBlogById(blogId),
    ...options
  })
  return getBlogQuery
}