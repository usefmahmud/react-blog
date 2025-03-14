import { useMutation } from '@tanstack/react-query'
import { updateBlog } from '../../utils/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Blog, NewBlogFormSchema } from '../../types'

export const useEditBlogMutation = () => { 
  const navigate = useNavigate()

  const addBlogMutation = useMutation({
    mutationFn: ({ id, data }: { id: Blog['_id']; data: NewBlogFormSchema }) => updateBlog(id, data),
    onSuccess: (res) => {
      toast.success('Blog edited successfully')
      navigate(`/blog/${res.data.data.blog._id}`)
    },
    onError: () => {
      toast.error('Failed to edit blog')
    }
  })
  return addBlogMutation
}