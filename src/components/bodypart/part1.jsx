import React from "react";
import videoimg from "../../assets/Video.jpg";
const VideoPlayComponent = () => {
  return (
    <div className="h-[50rem] w-[72rem] m-auto mt-24 ">
      <a href="https://www.youtube.com/embed/Mdcw3Sb98DA?si=RRB6tCAjTlPLbGK5">
        <img src={videoimg} className="rounded-[35px]" />
      </a>
    </div>
  );
};

export default VideoPlayComponent;
