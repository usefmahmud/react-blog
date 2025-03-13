import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createBlog } from '../../utils/api'

export const useAddBlogMutation = () => { 
  const queryClient = useQueryClient()

  const addBlogMutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ['get-posts'],
      })
    }
  })
  return addBlogMutation
}