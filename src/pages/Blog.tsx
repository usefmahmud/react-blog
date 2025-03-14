import { useDeleteBlogMutation } from '../hooks/posts/useDeleteBlogMutation'
import { useGetPostById } from '../hooks/posts/useGetBlogById'
import { Link, useParams } from 'react-router-dom'

const Blog = () => {
  const { id } = useParams()
  
  const getBlogQuery = useGetPostById(id!, {
    enabled: !!id
  })

  const deleteMutation = useDeleteBlogMutation()

  const handleDelete = () => {
    deleteMutation.mutate(id ?? '')
  }

  if(getBlogQuery.isLoading) {
    return <div>Loading...</div>
  }

  if(getBlogQuery.isError) {
    return <div>Error</div> 
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='w-[100%] max-w-[600px] flex flex-col py-10 px-5'>
        <div className='mb-5'>
          <h1 className='text-3xl text-gray-900 font-extrabold'>{getBlogQuery.data?.data.blog.title}</h1>
          <p className='text-gray-500 text-[16px] font-medium'>{getBlogQuery.data?.data.blog.author}</p>
        </div>
        <div className='mb-5'>
          {getBlogQuery.data?.data.blog.content}
        </div>
        <div className='flex flex-col sm:flex-row gap-3'>
          <Link to={`/blog/${id}/edit`} className='flex-1'>
            <button className='w-full bg-green-200 py-1 text-lg font-medium rounded-md cursor-pointer hover:bg-green-300'>
              Edit
            </button>
          </Link>
          <button 
            className='flex-1 bg-red-200 py-1 text-lg font-medium rounded-md cursor-pointer hover:bg-red-300 disabled:opacity-50 disabled:cursor-default disabled:hover:bg-red-200'
            disabled={deleteMutation.isPending}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blog