import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBlog } from "../../utils/api"
import toast from "react-hot-toast"

export const useDeleteBlogMutation = () => {
  const queryClient = useQueryClient()

  const deleteBlogMutation = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      toast.success('Blog removed successfully')
      queryClient.invalidateQueries({
        queryKey: ['get-blogs']
      })
    }
  })

  return deleteBlogMutation
}

