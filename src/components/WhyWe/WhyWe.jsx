import React from 'react'
import { GrUserExpert } from 'react-icons/gr'

const WhyWe = props => {
  return (
    <section className='my-20 px-5'>
      <h2 className='text-center text-4xl font-semibold mb-16'>{props.t('WhyWe.Title')}</h2>
      <div className='flex justify-between gap-5'>
        <ul>
          <li className='flex items-center justify-center max-w-md gap-5'>
            <GrUserExpert />
            <p>{props.t('WhyWe.FirstPros')}</p>
          </li>
          <li className='flex items-center justify-center max-w-md gap-5'>
            <GrUserExpert />
            <p>{props.t('WhyWe.FirstPros')}</p>
          </li>
          <li className='flex items-center justify-center max-w-md gap-5'>
            <GrUserExpert />
            <p>{props.t('WhyWe.FirstPros')}</p>
          </li>
        </ul>
        <div className='max-w-lg'>
          <img
            src='/assets/maslov_centr_169792411_278510293874058_7128783391663055895_n.jpg'
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default WhyWe
