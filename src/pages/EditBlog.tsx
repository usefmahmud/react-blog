import NewBlogForm from '../components/NewBlog/NewBlogForm'

const EditBlog = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-[100%] max-w-[600px] flex flex-col py-10 px-5'>
        <NewBlogForm isEdit />
      </div>
    </div>
  )
}

export default EditBlog