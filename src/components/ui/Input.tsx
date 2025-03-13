import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  ...props
}) => {
  return (
    <input 
      {...props}
      className='bg-white border border-gray-300 rounded-md p-2 w-full focus:outline-none' 

      value={value}
      onChange={onChange}
    />
  )
}

export default Input