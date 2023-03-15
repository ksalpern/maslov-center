import React, { useState } from 'react'
import { homeData } from '../../Data'
import BannerItems from '../../components/Slider/Slider'
import WhyWe from '../../components/WhyWe/WhyWe'
import Accordion from '../../components/Accordion/Accordion'

const Home = props => {
  const [slides, setSlides] = useState(homeData)
  const [openIndex, setOpenIndex] = useState(-1)

  const handleAccordionClick = index => {
    setOpenIndex(index === openIndex ? -1 : index)
  }

  return (
    <div id='home' className='relative min-h-screen h-fit pb-4 '>
      <div className=''>
        <div className=' banner relative mx-auto w-[100vw] h-[100vw] sm:w-[70vw] sm:h-[70vw] max-w-[1000px] max-h-[1000px] flex flex-col justify-center gap-2 '>
          <h1 className='px-8 md:px-12 '>{props.t('Banner.Title')}</h1>
          <p className='px-7 md:px-10 text-xs text-center md:text-xl lg:text-2xl lg:px-14'>
            {props.t('Banner.Subtitle')}
          </p>
          <button className='btn'>
            <a href='tel:+380997393067'>{props.t('Banner.Button')}</a>
          </button>
        </div>
      </div>

      <WhyWe t={props.t} />
      <section className='mt-20 px-5'>
        <h2 id='services' className=''>
          {props.t('Services.Titles.MainTitle')}
        </h2>
        {/* TRAINING */}
        <Accordion
          index={0}
          title={props.t('Services.Titles.TrainingTitle')}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>{props.t('Services.Training.Description')}</p>

          <h4>{props.t('Services.Training.MTB')}</h4>

          <div className='smd:grid grid-cols-3 gap-5'>
            <p className='smd:col-start-1 smd:col-end-3 '>
              {props.t('Services.Training.MTBDescription')}
            </p>
            <img className=' rounded-2xl ' src='/assets/mtb1.jpg' alt='' />
          </div>

          <h4>{props.t('Services.Training.Rule')}</h4>

          <div className='smd:grid grid-cols-3 gap-5'>
            <img className=' rounded-2xl ' src='/assets/pravilo.jpg' alt='' />
            <p className='smd:col-start-2 smd:col-end-4 '>
              {props.t('Services.Training.RuleDescription')}
            </p>
          </div>

          <h4>{props.t('Services.Training.GravityShoes')}</h4>

          <div className='smd:grid grid-cols-3 gap-5'>
            <p className='smd:col-start-1 smd:col-end-3 '>
              {props.t('Services.Training.GravityShoesDescription')}
            </p>
            <img className=' rounded-2xl ' src='/assets/boots1.jpg' alt='' />
          </div>
        </Accordion>

        {/* MASSAGE */}
        <Accordion
          index={1}
          title={props.t('Services.Titles.MassageTitle')}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>{props.t('Services.Massage.Description')}</p>

          <h4>{props.t('Services.Massage.Sedative')}</h4>

          <div className='smd:grid grid-cols-3 gap-5'>
            <p className='smd:col-start-1 smd:col-end-3 '>
              {props.t('Services.Massage.SedativeDescription')}
            </p>
            <img
              className=' rounded-2xl '
              src='/assets/massage2.jpg'
              alt='maslov massage'
            />
          </div>

          <h4>{props.t('Services.Massage.Therapeutic')}</h4>

          <div className='smd:grid grid-cols-3 gap-5'>
            <img
              className=' rounded-2xl '
              src='/assets/massage3.jpg'
              alt='maslov massage'
            />
            <p className='smd:col-start-2 smd:col-end-4 '>
              {props.t('Services.Massage.TherapeuticDescription')}
            </p>
          </div>
        </Accordion>

        {/* PHYTOTHERAPY */}
        <Accordion
          index={2}
          title={props.t('Services.Titles.PhytotherapyTitle')}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>{props.t('Services.Phytotherapy.Description')}</p>

          <div className='smd:grid grid-cols-3 gap-5'>
            <img
              className=' rounded-2xl '
              src='/assets/tea.jpg'
              alt='maslov yoga'
            />
            <div className='smd:col-start-2 smd:col-end-4 '>
              <p className='font-semibold smd:text-xl'>
                {props.t('Services.Phytotherapy.Porridge1')}
              </p>
              <p className='font-semibold smd:text-xl'>
                {props.t('Services.Phytotherapy.Porridge2')}
              </p>
              <p className='font-semibold smd:text-xl'>
                {props.t('Services.Phytotherapy.Tea1')}
              </p>
              <p className='font-semibold smd:text-xl'>
                {props.t('Services.Phytotherapy.Tea2')}
              </p>
              <p className='font-semibold smd:text-xl'>
                {props.t('Services.Phytotherapy.Tea3')}
              </p>
            </div>
          </div>
        </Accordion>

        {/* YOGA */}
        <Accordion
          index={3}
          title={props.t('Services.Titles.YogaTitle')}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>{props.t('Services.Yoga.Description')}</p>

          <div className='smd:grid grid-cols-3 gap-5'>
            <img
              className=' rounded-2xl '
              src='/assets/yoga.jpg'
              alt='maslov yoga'
            />
            <p className='smd:col-start-2 smd:col-end-4 '>
              {props.t('Services.Yoga.More')}
            </p>
          </div>
        </Accordion>

        {/* BARREL */}
        <Accordion
          index={4}
          title={props.t('Services.Titles.PhytotherapeuticBarrelTitle')}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <div className='smd:grid grid-cols-3 gap-5'>
            <img
              className=' rounded-2xl '
              src='/assets/barrel.jpg'
              alt='maslov massage'
            />
            <p className='smd:col-start-2 smd:col-end-4 '>
              {props.t('Services.PhytotherapeuticBarrel.Description')}
            </p>
          </div>
        </Accordion>
      </section>
      {/* SLIDER GALLERY */}
      <section className='mt-10 px-5'>
        <h2 id='gallery' className=''>
          {props.t('Gallery.Title')}
        </h2>
        <BannerItems slides={slides} />
      </section>
    </div>
  )
}

export default Home
