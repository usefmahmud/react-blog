import { useQuery } from '@tanstack/react-query'
import { fetchAllBlogs } from '../../utils/api'
import { Blog } from '../../types'

export interface Response {
  data: {
    blogs: Blog[]
  }
}

export const useGetAllBlogs = () => {
  const getBlogsQuery = useQuery<Response>({
    queryKey: ['get-posts'],
    queryFn: fetchAllBlogs,
  })

  return getBlogsQuery
}