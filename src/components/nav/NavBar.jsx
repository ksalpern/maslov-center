import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import SiteSettings from '../siteSettings/SiteSettings'
const NavBar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div>
      <div
        onClick={() => {
          setNav(!nav)
        }}
        className='text-xl cursor-pointer'
      >
        {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
      <div
        onClick={() => {
          setNav(!nav)
        }}
        className={
          nav
            ? 'fixed top-0 left-0 w-screen duration-500 h-screen bg-opacity-30 bg-main-light-bg backdrop-blur-[3px] dark:bg-main-dark-bg dark:bg-opacity-30'
            : 'hidden'
        }
      ></div>
      <nav
        className={`border border-t-0 rounded-b-2xl w-80 flex flex-col z-50 absolute pb-3 right-0 ease-in-out customContainer container duration-500 bg-main-light-bg dark:bg-main-dark-bg 
      ${nav ? 'scale-100 top-0 opacity-100' : 'scale-0 -top-32 opacity-0'}`}
      >
        <div
          onClick={() => {
            setNav(!nav)
          }}
          className='pt-6 text-xl cursor-pointer flex justify-end'
        >
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        <div className='pt-6'>
          <p className='navItemHover p-2'>1</p>
          <p className='navItemHover p-2'>2</p>
          <p className='navItemHover p-2'>3</p>
          <p className='navItemHover p-2'>4</p>
          <SiteSettings />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
