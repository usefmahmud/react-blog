import { Link } from 'react-router-dom'
import { Blog } from '../../types'
import { useDeleteBlogMutation } from '../../hooks/posts/useDeleteBlogMutation'

interface BlogCardProps {
  blog: Blog
}

const BlogCard: React.FC<BlogCardProps> = ({
  blog
}) => {
  const deleteMutation = useDeleteBlogMutation()

  return (
    <div className='p-6 flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm'>
      <div className="mb-1">
        <Link to={`/blog/${blog._id}`}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">{blog.title}</h5>
        </Link>
        <p className='text-[14px] py-1 font-semibold text-gray-500'>{blog.author}</p>
      </div>
      <p className="font-normal text-gray-700 line-clamp-3">{blog.content}</p>
      <div className='flex justify-end items-center mt-4'>
        <button 
          className='cursor-pointer bg-red-900/70 px-5 py-2 text-white rounded-md disabled:bg-red-900/50 disabled:cursor-default'
          disabled={deleteMutation.isPending}
          onClick={() => {
            deleteMutation.mutate(blog._id)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default BlogCard