import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillHome } from "react-icons/ai";
import { GiHealing} from "react-icons/gi";
import SiteSettings from "../siteSettings/SiteSettings";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="text-xl cursor-pointer"
      >
        {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className={
          nav
            ? "fixed top-0 left-0 w-screen duration-500 h-screen bg-opacity-30 bg-main-light-bg backdrop-blur-[3px] dark:bg-main-dark-bg dark:bg-opacity-30"
            : "hidden"
        }
      ></div>
      <nav
        className={`font-bold border border-t-0 border-main-color rounded-b-2xl w-80 flex flex-col z-50 absolute pb-3 right-0 ease-in-out customContainer container duration-500 bg-main-light-bg dark:bg-main-dark-bg 
      ${nav ? "scale-100 top-0 opacity-100" : "scale-0 -top-32 opacity-0"}`}
      >
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="pt-6 text-xl cursor-pointer flex justify-end"
        >
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        <div className="pt-6">
          <Link
            className="flex items-center navItemHover p-2"
            to="/"
            onClick={() => {
              setNav(!nav);
            }}
          >
            <div className="text-2xl mr-2">
              <AiFillHome />
            </div>
            <p className=" ">Головна</p>
          </Link>
          <Link
            className="flex items-center navItemHover p-2"
            to="/"
            onClick={() => {
              setNav(!nav);
            }}
          >
            <div className="text-2xl mr-2">
              <GiHealing />
            </div>
            <p className=" ">Послуги</p>
          </Link>

          <SiteSettings />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
