import React, { useState } from 'react'
// import axios from 'axios'
import { homeData } from '../../Data'
import BannerItems from '../../components/Slider/Slider'
import WhyWe from '../../components/WhyWe/WhyWe'

const Home = props => {
  const [slides, setSlides] = useState(homeData)
  return (
    <div className='relative min-h-screen h-fit pb-4 '>
      <div className=''>
        <div className=' banner relative mx-auto w-[100vw] h-[100vw] sm:w-[70vw] sm:h-[70vw] max-w-[1000px] max-h-[1000px] flex flex-col justify-center gap-2 '>
          <h1 className='px-8 md:px-12 '>{props.t('Banner.Title')}</h1>
          <p className='px-7 md:px-10 text-xs text-center md:text-xl lg:text-2xl lg:px-14'>
            {props.t('Banner.Subtitle')}
          </p>
          <button className='btn'>
            <a href='tel:+380997393067'>{props.t('Banner.Button')}</a>
          </button>
          {/* <div className=" w-[30%] h-[30%] absolute bottom-6 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
            <img className="w-full" src="/logo.svg" alt="" />
          </div> */}
        </div>
      </div>

      {/* <div className='banner flex flex-col gap-6 p-10'>
        <h1 className='max-w-3xl '>{props.t('Banner.Title')}</h1>
        <p className='text-xl max-w-3xl '>{props.t('Banner.Subtitle')}</p>
        <button className='bg-gray-300 text-gray-600 border '>Contact us</button>
      </div> */}

      {/* <div className='absolute w-56 h-56 top-2 right-6'>
        <img src='/assets/team.svg' alt='' />
      </div> */}
      <WhyWe t={props.t} />
      <section className='mt-20 '>
        <h2 className=''>{props.t('Services.Title')}</h2>
        <BannerItems slides={slides} />
      </section>
    </div>
  )
}

export default Home
