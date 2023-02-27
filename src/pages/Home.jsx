import React from 'react'
import axios from 'axios'

const Home = (props) => {
  return (
    <div className='relative min-h-screen h-fit py-10'>
      <div className='absolute h-screen w-full opacity-10 left-1/2 top-5 -translate-x-1/2 pointer-events-none flex justify-center items-start'>
        <img className='w-1/2' src='/logo.svg' alt='' />
      </div>

      <div className='max-w-2xl flex flex-col gap-3 px-4'>
        <h1 className='text-5xl '>{props.t('Banner.Title')}</h1>
        <p className='text-xl'>
        {props.t("Banner.Subtitle")}
        </p>
      </div>

      {/* <div className='absolute w-56 h-56 top-2 right-6'>
        <img src='/assets/team.svg' alt='' />
      </div> */}
    </div>
  )
}

export default Home
