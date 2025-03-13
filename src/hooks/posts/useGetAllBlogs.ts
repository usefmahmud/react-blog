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
    queryKey: ['get-blogs'],
    queryFn: fetchAllBlogs,
  })

  return getBlogsQuery
}