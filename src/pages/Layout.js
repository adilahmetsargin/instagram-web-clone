import Header from 'components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header />
        <div className='container mx-auto pt-4'>
            <Outlet />
        </div>
    </>
  )
}

export default Layout