import { Route, Routes } from 'react-router-dom'

import Feed from './pages/Feed'
import Blog from './pages/Blog'

const App = () => {

  return (
    <div>
      <Routes >
        <Route path="/" element={<Feed />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
