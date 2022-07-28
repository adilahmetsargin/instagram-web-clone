import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center grid gap-y-6 pt-5'>
      <h6 className='text-[22px] font-semibold'>Sorry, this page isn't available.</h6>
      <p className=''>
        The link you followed may be broken, or the page may have been removed. <Link to='/' className='text-link'>Go back to Instagram. </Link>
      </p>
  </div>
  )
}

export default NotFound