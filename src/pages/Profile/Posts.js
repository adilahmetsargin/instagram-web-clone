import React from 'react'
import { AiOutlineTable } from 'react-icons/ai'

const Posts = () => {
  return (
    <div className='flex flex-col items-center gap-y-4 pt-10'>
            <div className='flex w-[62px] h-[62px] border-2 rounded-full border-black items-center justify-center'>
            <AiOutlineTable size={50} />
            </div>
            <h6 className='text-[28px font-light]'>No Posts Yet</h6>
    </div>
  )
}

export default Posts