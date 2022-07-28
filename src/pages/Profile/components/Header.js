import React from 'react'
import { CgProfile } from 'react-icons/cg'

const Header = ({user}) => {
    
  return (
    <header className='flex items-center gap-x-24 px-24 py-6 pb-10'> 
        <CgProfile className='w-[150px] h-[150px] rounded-full text-gray-300' size={24} />
        <div>
            <div className='mb-4'>
                <h1 className='text-[28px] font-light'>{user?.username}</h1>
            </div>
            <nav className='flex gap-x-10 items-center '>
                <div><span className='font-semibold'>{user?.posts}</span> posts</div>
                <div><span className='font-semibold'>{user?.followers?.length}</span>  followers</div>
                <div><span className='font-semibold'>{user?.following?.length}</span>  following</div>
                
            </nav>
        </div>
    </header>
  )
}

export default Header