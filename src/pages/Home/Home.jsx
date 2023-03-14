import React, { useState } from "react";
import { homeData } from "../../Data";
import BannerItems from "../../components/Slider/Slider";
import WhyWe from "../../components/WhyWe/WhyWe";
import Accordion from "../../components/Accordion/Accordion";

const Home = (props) => {
  const [slides, setSlides] = useState(homeData);
  const [openIndex, setOpenIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div id="home" className="relative min-h-screen h-fit pb-4 ">
      <div className="">
        <div className=" banner relative mx-auto w-[100vw] h-[100vw] sm:w-[70vw] sm:h-[70vw] max-w-[1000px] max-h-[1000px] flex flex-col justify-center gap-2 ">
          <h1 className="px-8 md:px-12 ">{props.t("Banner.Title")}</h1>
          <p className="px-7 md:px-10 text-xs text-center md:text-xl lg:text-2xl lg:px-14">
            {props.t("Banner.Subtitle")}
          </p>
          <button className="btn">
            <a href="tel:+380997393067">{props.t("Banner.Button")}</a>
          </button>
        </div>
      </div>

      <WhyWe t={props.t} />
      <section className="mt-20 px-5">
        <h2 id="services" className="">
          {props.t("Services.Titles.mainTitle")}
        </h2>
        <Accordion
          index={0}
          title={props.t("Services.Titles.trainingTitle")}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>{props.t("Services.Training.Description")}</p>

          <h4>{props.t("Services.Training.MTB")}</h4>

          <div className="smd:grid grid-cols-3 gap-5">
            <p className="smd:col-start-1 smd:col-end-3 ">
              {props.t("Services.Training.MTBDescription")}
            </p>
            <img
              className=" rounded-2xl "
              src="/assets/mtb1.jpg"
              alt=""
            />
          </div>

          <h4>{props.t("Services.Training.Rule")}</h4>
          <div className="smd:grid grid-cols-3 gap-5">
            <img
              className=" rounded-2xl "
              src="/assets/pravilo.jpg"
              alt=""
            />
            <p className="smd:col-start-2 smd:col-end-4 ">
              {props.t("Services.Training.RuleDescription")}
            </p>
          </div>
        </Accordion>
        <Accordion
          index={1}
          title={props.t("Services.Titles.massageTitle")}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>{props.t("Services.Massage.Description")}</p>

          <h4>{props.t("Services.Massage.Sedative")}</h4>

          <div className="smd:grid grid-cols-3 gap-5">
            <p className="smd:col-start-1 smd:col-end-3 ">
              {props.t("Services.Massage.SedativeDescription")}
            </p>
            <img
              className=" rounded-2xl "
              src="/assets/maslov_centr_273517580_248400387474719_6282692698485249863_n.jpg"
              alt=""
            />
          </div>

          <h4>{props.t("Services.Massage.Therapeutic")}</h4>
          <div className="smd:grid grid-cols-3 gap-5">
            <img
              className=" rounded-2xl "
              src="/assets/maslov_centr_219652566_183076247136228_1314048039313492708_n.jpg"
              alt=""
            />
            <p className="smd:col-start-2 smd:col-end-4 ">
              {props.t("Services.Massage.TherapeuticDescription")}
            </p>
          </div>
          {/* <p className=" ">{props.t("Services.Massage.Description")}</p>

          <h4>{props.t("Services.Massage.Sedative")}</h4>

          <div className="flex gap-8 flex-col-reverse md:flex-row">
            <p className="">
              {props.t("Services.Massage.SedativeDescription")}
            </p>
            <div className=" relative justify-center w-[300px] h-[300px] bg-red-700  overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full  rounded-2xl"
                src="/assets/maslov_centr_273517580_248400387474719_6282692698485249863_n.jpg"
                alt=""
              />
            </div>
          </div>

          <h4>{props.t("Services.Massage.Therapeutic")}</h4>
          <div className="flex gap-8 flex-col smd:flex-row">
            <div className="flex flex-col gap-2 md:gap-8 smd:max-w-[80%]">
              {props.t("Services.Massage.TherapeuticDescription")}
            </div>
            <div className="float-left w-full  max-w-[600px] smd:w-1/2 ">
              <img
                className=" rounded-2xl "
                src="/assets/maslov_centr_219652566_183076247136228_1314048039313492708_n.jpg"
                alt=""
              />
            </div>
          </div> */}
        </Accordion>
        <Accordion
          index={2}
          title={props.t("Services.Titles.phytotherapyTitle")}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>Content for section 2 goes here.</p>
        </Accordion>
        <Accordion
          index={3}
          title={props.t("Services.Titles.yogaTitle")}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>Content for section 2 goes here.</p>
        </Accordion>
        <Accordion
          index={4}
          title={props.t("Services.Titles.phytotherapeuticBarrelTitle")}
          openIndex={openIndex}
          onAccordionClick={handleAccordionClick}
        >
          <p>Content for section 2 goes here.</p>
        </Accordion>
        <BannerItems slides={slides} />
      </section>
    </div>
  );
};

export default Home;
