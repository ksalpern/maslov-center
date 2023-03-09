import React, { useState } from 'react'
// import axios from 'axios'
import { homeData } from '../../Data'
import BannerItems from '../../components/Slider/Slider'
import WhyWe from '../../components/WhyWe/WhyWe'

const Home = props => {
  const [slides, setSlides] = useState(homeData)
  return (
    <div className='relative min-h-screen h-fit '>
      

      <div className='banner flex flex-col gap-6 p-10'>
        <h1 className='max-w-3xl '>{props.t('Banner.Title')}</h1>
        <p className='text-xl max-w-3xl '>{props.t('Banner.Subtitle')}</p>
        <button className='bg-gray-300 text-gray-600 border '>Contact us</button>
      </div>

      {/* <div className='absolute w-56 h-56 top-2 right-6'>
        <img src='/assets/team.svg' alt='' />
      </div> */}
        <WhyWe t={props.t}/>
      <section>
        <BannerItems slides={slides} />
      </section>
      <div className=''></div>
    </div>
  )
}

export default Home
