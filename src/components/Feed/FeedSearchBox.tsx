import { useQueryState } from 'nuqs'
import React from 'react'

const FeedSearchBox = () => {
  const [searchWord, setSearchWord] = useQueryState('q', {
    defaultValue: ''
  })

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {  
    setSearchWord(e.target.value)
  }

  return (
    <div className='flex py-5'>
      <input 
        type="text" 
        placeholder="Search..." 
        className='bg-white border border-gray-300 rounded-md p-2 w-full focus:outline-none' 

        value={searchWord}
        onChange={handleSearch}
      />
    </div>
  )
}

export default FeedSearchBox