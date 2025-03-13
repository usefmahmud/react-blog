import { Link } from 'react-router-dom'
import { Blog } from '../../types'

interface BlogCardProps {
  blog: Blog
}

const BlogCard: React.FC<BlogCardProps> = ({
  blog
}) => {
  return (
    <div className='p-6 flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm'>
      <div className="mb-1">
        <Link to={`/post/${blog._id}`}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">{blog.title}</h5>
        </Link>
        <p className='text-[14px] py-1 font-semibold text-gray-500'>{blog.author}</p>
      </div>
      <p className="font-normal text-gray-700 line-clamp-3">{blog.content}</p>
    </div>
  )
}

export default BlogCard