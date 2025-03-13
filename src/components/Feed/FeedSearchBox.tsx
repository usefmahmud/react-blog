import { useQueryState } from 'nuqs'
import React from 'react'
import Input from '../ui/Input'

const FeedSearchBox = () => {
  const [searchWord, setSearchWord] = useQueryState('q', {
    defaultValue: ''
  })

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {  
    setSearchWord(e.target.value)
  }

  return (
    <div className='flex py-5'>
      <Input 
        type='text'
        placeholder='Searcht...'

        value={searchWord}
        onChange={handleSearch}
      />
    </div>
  )
}

export default FeedSearchBox