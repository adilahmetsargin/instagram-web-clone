import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
import classNames from 'classnames'

const Search = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-[268px] flex items-center bg-[#efefef]'>
      <span className={classNames({
        "flex text-[#8e8e8e] pointer-events-none w-9 h-9 items-center justify-center": true,
        "hidden" : open
      })}>
        <AiOutlineSearch size={16} />
      </span>
        <input onFocus={()=>setOpen(true)} onBlur={()=>setOpen(false)} type="text" placeholder='Search..' className='p-1 h-9 bg-[#efefef] w-full rounded outline-none border-none' />
        <button onClick={()=>setOpen(false)}>
        <AiFillCloseCircle className={classNames({
          "p-1 w-7 h-7 hidden items-center justify-center text-[#c7c7c7] ": true,
          "!flex" : open
        })} />
        </button>
    </div>
  )
}

export default Search