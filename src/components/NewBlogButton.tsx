import { Link, useLocation } from 'react-router-dom'

const NewBlogButton = () => {
  const location = useLocation()

  if(location.pathname === '/blog/new'){
    return null
  }
  return (
    <Link to='/blog/new' className="bg-green-300 font-semibold px-4 py-2 rounded-md text-xl cursor-pointer select-none fixed bottom-5 right-5">
      New
    </Link>
  )
}

export default NewBlogButton