import React from "react";
import lobe from "../../assets/icons/logo.jpg";
import twitter from "../../assets/icons/twitter-logo-24.png";
import youtube from "../../assets/icons/youtube-logo-24.png";
import msg from "../../assets/icons/message-rounded-solid-24.png";

const Downway = () => {
  return (
    <div>
      <hr className="w-[80%]   m-auto my-36" />
      <div
        className="flex mb-36 justify-between flex-1 m-auto mr-[11rem] font-normal
      leading-[45px]  max-w-[1314px] py-112px px-108px  text-xl">
        <div className="">
          <img className="h-10" src={lobe} alt="" />
          <p>A product by Microsoft.</p>
          <p>All rights reserved.</p>
          <p>© Microsoft 2021</p>
        </div>
        <div className="">
          <h2 className="font-semibold">About</h2>
          <p>Download</p>
          <p>Overview</p>
          <p>Examples</p>
          <p>Blog</p>
        </div>
        <div>
          <h3 className="font-bold">General</h3>
          <p>Notice</p>
          <p>License</p>
          <p>Press Inquiry</p>
          <p>Press Images</p>
        </div>
        <div>
          <h3 className="font-bold">Resources</h3>
          <p>Help</p>
          <p>Tour</p>
          <p>Contact</p>
          <p>Privary</p>
        </div>
        <div>
          <div className="flex gap-3 mr-[100px]  py-3 ">
            <img className="bg-[#04ddb2]  p-2.5 rounded-full " src={msg} />
            <img className="bg-[#04ddb2] p-2.5 rounded-full" src={twitter} />
            <img className="bg-[#04ddb2] p-2.5 rounded-full" src={youtube} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downway;
