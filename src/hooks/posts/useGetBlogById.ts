import { useQuery } from '@tanstack/react-query'
import { fetchBlogById } from '../../utils/api'
import { Blog } from '../../types'

export const useGetPostById = (blogId: Blog['_id']) => {
  const getBlogQuery = useQuery({
    queryKey: ['get-post', blogId],
    queryFn: () => fetchBlogById
  })
  return getBlogQuery
}