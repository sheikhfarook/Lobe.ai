import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.jpg";

const NavBarr = () => {
  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-[189px]  bg-[rgba(0 , 0 , 0 ,0)] ">
      <div className=" my-3  mx-24 flex items-center  justify-between hover: ">
        <img className="w-28" src={logo} alt="logo" />
        <div className="flex text-lg gap-12 text-gray-600 font-medium ">
          <Link className=" hover:text-black  ">Overview</Link>
          <Link className=" hover:text-black ">Examples</Link>
          <Link className=" hover:text-black ">Tour</Link>
          <Link className=" hover:text-black ">Blog</Link>
          <Link className=" hover:text-black ">Help</Link>
        </div>
        <button className="mr-4   bg-[#04ddb2] w-32 text-white rounded-full text-lg p-3">
          Download
        </button>
      </div>
    </div>
  );
};

export default NavBarr;
