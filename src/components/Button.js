import React from 'react'

const Button = ({type='button',children, ...props}) => {
  return (
    <button
    {...props}

    type={type} 
    className="h-[30px] mt-1 w-full flex items-center justify-center gap-x-2 rounded bg-brand text-white text-sm font-semibold disabled:opacity-50">
        {children}
        </button>

  )
}

export default Button