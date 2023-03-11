import React from 'react'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import {VscOrganization} from 'react-icons/vsc'
import {AiOutlineApartment} from 'react-icons/ai'

const WhyWe = props => {
  return (
    <section className='mt-20 px-5'>
      <h2 className='text-center text-xl smd:text-4xl font-bold mb-10 md:mb-16'>
        {props.t('WhyWe.Title')}
      </h2>
      <div className='flex flex-col md:flex-row md:items-start items-center justify-between gap-5 lg:gap-16'>
        <ul>
          <li className='whyWeLi'>
            <div className='liIcon'>
              <AiOutlineApartment  />
            </div>
            <p>{props.t('WhyWe.FirstPros')}</p>
          </li>
          <li className='whyWeLi'>
            <div className='liIcon'>
              <BsFillPersonCheckFill />
            </div>
            <p>{props.t('WhyWe.SecondPros')}</p>
          </li>
          <li className='whyWeLi'>
            <div className='liIcon'>
              <VscOrganization />
            </div>
            <p>{props.t('WhyWe.ThirdPros')}</p>
          </li>
        </ul>
        <div className='lg:max-w-lg rounded-2xl overflow-hidden'>
          <img
            src='/assets/maslov_centr_169792411_278510293874058_7128783391663055895_n.jpg'
            alt='maslov_centr'
            className=''
          />
        </div>
      </div>
    </section>
  )
}

export default WhyWe
