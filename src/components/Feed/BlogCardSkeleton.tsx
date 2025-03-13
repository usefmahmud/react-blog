const BlogCardSkeleton = () => {
  return (
    <div className='p-6 flex flex-col bg-white/80 rounded-lg animate-pulse'>
      <div className="mb-1">
        <div className="w-full h-[30px] bg-gray-600/15 rounded"></div>
        <div className='my-1 w-[90px] h-[15px] bg-gray-600/15 rounded'></div>
      </div>
      <div className="flex flex-col mt-3">
        <div className="my-1 w-full h-[20px] bg-gray-600/15 rounded"></div>
        <div className="my-1 w-[80%] h-[20px] bg-gray-600/15 rounded"></div>
      </div>
    </div>
  )
}

export default BlogCardSkeleton