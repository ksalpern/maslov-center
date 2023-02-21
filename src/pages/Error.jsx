import React from "react";
import { Link } from "react-router-dom";
import { TbArrowForward } from "react-icons/tb";

const Error = () => {
  return (
    <div className="flex justify-between items-center h-screen ">
      <p className="mx-auto text-center flex">
        Упс, помилка,
        <span className="text-blue-800 ml-1">
          <Link to="/">поверніться на головну сторінку </Link>
        </span>
      </p>
    </div>
  );
};

export default Error;
