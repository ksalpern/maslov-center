import React, { useEffect, useState } from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { BiDevices } from 'react-icons/bi'

const Themes = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  )

  const element = document.documentElement
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  // console.log(darkQuery,'darkQuery')
  const options = [
    { icon: BsSunFill, text: 'light' },
    { icon: BsMoonFill, text: 'dark' },
    { icon: BiDevices, text: 'system' }
  ]

  function onWindowMatch () {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && darkQuery.matches)
    ) {
      element.classList.add('dark')
    } else {
      element.classList.remove('dark')
    }
  }

  onWindowMatch()

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break

      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break

      default:
        localStorage.removeItem('theme')
        onWindowMatch()
        break
    }
  }, [theme])

  return (
    <div className='ml-6 text-main-color dark:bg-slate-700 bg-gray-100 rounded'>
      {options.map(opt => (
        <button
          key={opt.text}
          onClick={() => setTheme(opt.text)}
          className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
            theme === opt.text && 'text-sky-600'
          } `}
        >
          {<opt.icon></opt.icon>}
        </button>
      ))}
    </div>
  )
}

export default Themes
