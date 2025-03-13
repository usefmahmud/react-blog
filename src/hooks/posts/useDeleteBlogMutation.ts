import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteBlog } from '../../utils/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const useDeleteBlogMutation = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const deleteBlogMutation = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      toast.success('Blog removed successfully')
      if(location.pathname !== '/') {
        navigate('/')
      }
      queryClient.invalidateQueries({
        queryKey: ['get-blogs']
      })
    }
  })

  return deleteBlogMutation
}

