import React from 'react'
import { BiUserPin } from 'react-icons/bi'

const Tagged = () => {
  return (
    <div className='flex flex-col items-center gap-y-4 pt-10'>
        <div className='flex w-[62px] h-[62px] border-2 rounded-full border-black items-center justify-center'>
        <BiUserPin size={50} />
        </div>
        <h6 className='text-[28px font-light]'>No Photos</h6>
    </div>
  )
}

export default Tagged