import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Search from './Search'
import {GrHomeRounded} from 'react-icons/gr'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {FiPlusSquare} from 'react-icons/fi'
import {FaRegCompass} from 'react-icons/fa'
import {HiOutlineHeart} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'
import { useSelector } from 'react-redux'


const Header = () => {
  const user = useSelector(state=>state.auth.user)
  return (
    <header className="bg-white border-b border-gray-300 ">
        <div className="h-16 flex items-center justify-between container mx-auto">
            <Link to='/'>
                <img className="h-[29px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="instagram-logo" />
            </Link>
            <Search />
            <nav className='flex items-center gap-x-6'>
                <NavLink to='/'>
                  <GrHomeRounded size={24} />
                </NavLink>
                <NavLink to='/'>
                  <BiMessageRoundedDots size={24} />
                </NavLink>
                <NavLink to='/'>
                  <FiPlusSquare size={24} />
                </NavLink>
                <NavLink to='/'>
                  <FaRegCompass size={24} />
                </NavLink>
                <NavLink to='/'>
                  <HiOutlineHeart size={24} />
                </NavLink>
             
                <NavLink to={`/${user.username}`}>
                <CgProfile size={24} />
                </NavLink>
              {/* <button onClick={logout}>Logout</button> */}
            </nav>
        </div>
    </header>
  )
}

export default Header