import React, { useState } from "react";
import Themes from "../themesMod/Themes";
import { MdKeyboardArrowDown, MdPalette,MdLanguage } from "react-icons/md";
// import { HiLanguage } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";

const SiteSettings = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [openThemes, setOpenThemes] = useState(false);
  const handleOpenThemes = () => {
    setOpenThemes(!openThemes);
  };
  const [openLanguages, setOpenLanguages] = useState(false);
  const handleOpenLanguages = () => {
    setOpenLanguages(!openLanguages);
  };
  return (
    <div>
      <div
        className={`${
          open
            ? "bg-slate-200 bg-opacity-20 dark:bg-zinc-600 dark:bg-opacity-20  rounded-md"
            : ""
        }`}
      >
        <button
          onClick={handleOpen}
          className="flex justify-between items-center navItemHover w-full text-start p-2"
        >
          <div className="flex">
            <AiFillSetting className="text-2xl mr-2" />
            <p>Налаштування</p>
          </div>
          <div className={open ? "rotate-180 ease-in-out" : ""}>
            <MdKeyboardArrowDown />
          </div>
        </button>
        <div
          className={`${
            open ? "min-h-fit overflow-visible" : "h-0 overflow-hidden"
          }`}
        >
          <div
            className={`${
              openThemes
                ? "bg-slate-200 bg-opacity-20 dark:bg-zinc-600 dark:bg-opacity-20 rounded-md"
                : ""
            }`}
          >
            <button
              onClick={handleOpenThemes}
              className="flex justify-between items-center navItemHover w-full text-start py-2 pl-6 pr-2"
            >
              <div className="flex">
                <MdPalette className="text-2xl mr-2" />
                <p>Теми</p>
              </div>
              <div className={open ? "rotate-180 ease-in-out" : ""}>
                <MdKeyboardArrowDown />
              </div>
            </button>
            <div
              className={`${
                openThemes
                  ? "min-h-fit overflow-visible"
                  : "h-0 overflow-hidden"
              }`}
            >
              <Themes />
            </div>
          </div>
          <div
            className={`${
              openLanguages
                ? "bg-slate-200 bg-opacity-20 dark:bg-zinc-600 dark:bg-opacity-20 rounded-md"
                : ""
            }`}
          >
            <button
              onClick={handleOpenLanguages}
              className="flex justify-between items-center navItemHover w-full text-start py-2 pl-6 pr-2"
            >
              <div className="flex">
                <MdLanguage className="text-2xl mr-2" />
                <p>Мови</p>
              </div>
              <div className={open ? "rotate-180 ease-in-out" : ""}>
                <MdKeyboardArrowDown />
              </div>
            </button>
            <div
              className={`${
                openLanguages
                  ? "min-h-fit overflow-visible"
                  : "h-0 overflow-hidden"
              }`}
            >
              <p className="ml-6">ua/en/pl/sp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSettings;
