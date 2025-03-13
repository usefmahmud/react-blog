import React from 'react'
import { UseQueryResult } from '@tanstack/react-query'
import BlogCardSkeleton from './BlogCardSkeleton'
import BlogCard from './BlogCard'
import { Response } from '../../hooks/posts/useGetAllBlogs'
import { useQueryState } from 'nuqs'

interface FeedListProps { 
  blogsQuery: UseQueryResult<Response>
}

const FeedList: React.FC<FeedListProps> = ({
  blogsQuery
}) => {
  const [searchWord] = useQueryState('q', {
    defaultValue: ''
  })

  if (blogsQuery.isLoading) {
    return (
      <div className='flex flex-col space-y-5'>
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    )
  }

  if(blogsQuery.isError) {
    return <div>Error</div>
  }

  return (
    <div className='flex flex-col space-y-5'>
      {
        blogsQuery.data?.data.blogs
          .filter(blog => blog.title.toLowerCase().includes(searchWord.trim().toLowerCase()))
          .map(blog => {
            return <BlogCard key={blog._id} blog={blog} />
          })
      }
    </div>
  )
}

export default FeedList