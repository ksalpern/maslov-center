import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <div className='flex items-center'>
        <p className='text-main-color text-center h-fit min-w text-2xl min-w-logo'>
          Maslov
        </p>
        <div className='w-12 h-12 relative mx-2 '>
          <img src='/logo.svg' alt='' />
        </div>
        <p className='text-main-color text-center h-fit min-w text-2xl min-w-logo'>
          Center
        </p>
      </div>
    </Link>
  )
}

export default Logo
