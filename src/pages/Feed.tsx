import { useGetAllBlogs } from '../hooks/posts/useGetAllBlogs'
import FeedSearchBox from '../components/Feed/FeedSearchBox'
import FeedList from '../components/Feed/FeedList'

const Feed = () => {
  const blogsQuery = useGetAllBlogs()

  return (
    <div className='flex flex-col items-center'>
      <div className='w-[100%] max-w-[600px] flex flex-col py-10 px-5'>
        <FeedSearchBox />
        <FeedList blogsQuery={blogsQuery} />
      </div>
    </div>
  )
}

export default Feed