import { useMutation } from '@tanstack/react-query'
import { createBlog } from '../../utils/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const useAddBlogMutation = () => { 
  const navigate = useNavigate()

  const addBlogMutation = useMutation({
    mutationFn: createBlog,
    onSuccess: (res) => {
      toast.success('Blog added successfully')
      navigate(`/blog/${res.data.data.blog._id}`)
    },
    onError: () => {
      toast.error('Failed to add blog')
    }
  })
  return addBlogMutation
}