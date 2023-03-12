import React from "react";
// import BannerItem from './BannerItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

// import SlideImg from '/assets/massage1.jpg'

const BannerItems = ({ slides }) => {
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-2 z-10 bg-main-dark-bg  bg-opacity-60 flex justify-center items-center p-2 md:p-3 rounded-full"
        onClick={onClick}
      >
        <button className="text-base md:text-3xl">
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-2 z-10 bg-main-dark-bg  bg-opacity-60 flex justify-center items-center p-2 md:p-3 rounded-full"
        onClick={onClick}
      >
        <button className="text-base md:text-3xl">
          <MdOutlineKeyboardArrowLeft />
        </button>
      </div>
    );
  };
  const settingsSlider = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settingsSlider} className="p-2">
        <div className="relative slideItem">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <img className="w-full" src="/assets/massage1.jpg" alt="" />
          </div>
          <p></p>
        </div>
        <div className="relative slideItem">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <img className="w-full" src="/assets/massage1.jpg" alt="" />
          </div>
          <p></p>
        </div>
        <div className="relative slideItem">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <img className="w-full" src="/assets/massage1.jpg" alt="" />
          </div>
          <p></p>
        </div>
        <div className="relative slideItem">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <img className="w-full" src="/assets/massage1.jpg" alt="" />
          </div>
          <p></p>
        </div>
        <div className="relative slideItem">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <img className="w-full" src="/assets/massage1.jpg" alt="" />
          </div>
          <p></p>
        </div>
      </Slider>
    </div>
  );
};

export default BannerItems;
