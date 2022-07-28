import classNames from 'classnames'
import { getUserInfo } from 'firebase.js'
import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { AiOutlineTable } from 'react-icons/ai'
import { BiUserPin } from 'react-icons/bi'
import { useParams, NavLink, Outlet } from 'react-router-dom'
import Header from './components/Header'
import NotFound from './NotFound'

const ProfilePage = () => {

  // const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  
  const {username} = useParams()
  // const navigate = useNavigate()

  useEffect(() => {
      getUserInfo(username).then(user => {
        setUser(user)
      }).catch(error => {
        setUser(false)
      })
  }, [])

  if(user===false) {
    return (
    <NotFound />
    )
  }

  if (user === null) {
      return (
        <div>
          Loading...
        </div>
      )
  }
  
  

  return user && (
      <>
      <Helmet>
        <title>{user.fullName} (@{user.username}) . Instagram photos and videos</title>
      </Helmet>
        <Header user={user} />
        <nav className='border-t flex items-center justify-center gap-x-14 '>
          <NavLink to={`/${username}`} end={true} className={({isActive}) => classNames({
            'text-xs flex items-center border-t -mt-px  py-5 gap-x-2 font-semibold ': true,
            'text-[#8e8e8e] border-transparent': !isActive,
            'text-black border-black' : isActive
          }) }>
            <AiOutlineTable size={12} />
            POSTS
          </NavLink>
          <NavLink end={true} to={`/${username}/tagged`} className={({isActive}) => classNames({
            'text-xs flex items-center border-t -mt-px  py-5 gap-x-2 font-semibold ': true,
            'text-[#8e8e8e] border-transparent': !isActive,
            'text-black border-black' : isActive
          }) }>
            <BiUserPin size={12} />
            TAGGED
          </NavLink>
        </nav>
        <Outlet />
      </>
  )
}

export default ProfilePage