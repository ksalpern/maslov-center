import React from 'react'
import NavBar from '../nav/NavBar'
import Logo from './Logo'
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='mainHeader'>
      <div className='flex w-full justify-between items-center py-2 customContainer mx-auto bg-main-light-bg dark:bg-main-dark-bg '>
        <div className='w-4 h-4'></div>
        <Logo />
        <div className=''>
          <NavBar></NavBar>
        </div>
      </div>
    </header>
  )
}

export default Header
