import { Route, Routes } from 'react-router-dom'

import Feed from './pages/Feed'
import Blog from './pages/Blog'
import NewBlog from './pages/NewBlog'
import EditBlog from './pages/EditBlog'
import NewBlogButton from './components/NewBlogButton'

const App = () => {

  return (
    <div className='relative'>
      <NewBlogButton />
      <Routes >
        <Route path="/" element={<Feed />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blog/new" element={<NewBlog />} />
        <Route path="/blog/:id/edit" element={<EditBlog />} />
      </Routes>
    </div>
  )
}

export default App
