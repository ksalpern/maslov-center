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
          {props.t('Services.Titles.mainTitle')}
        </h2>
        <Accordion
          index={0}
          title={props.t('Services.Titles.trainingTitle')}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>Content for section 1 goes here.</p>
        </Accordion>
        <Accordion
          index={1}
          title={props.t('Services.Titles.massageTitle')}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>Content for section 2 goes here.</p>
        </Accordion>
        <Accordion
          index={2}
          title={props.t('Services.Titles.phytotherapyTitle')}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>Content for section 2 goes here.</p>
        </Accordion>
        <Accordion
          index={3}
          title={props.t('Services.Titles.yogaTitle')}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>Content for section 2 goes here.</p>
        </Accordion>
        <Accordion
          index={4}
          title={props.t('Services.Titles.phytotherapeuticBarrelTitle')}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>Content for section 2 goes here.</p>
        </Accordion>
        <BannerItems slides={slides} />
      </section>
    </div>
  )
}

export default Home
