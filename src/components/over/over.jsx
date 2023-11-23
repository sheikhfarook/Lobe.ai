import React from "react";
import NeckPart from "../../neck/neck";
import LowerPart from "../bodypart/part2";
import Downway from "../footer/footer";
import VideoPlayComponent from "../bodypart/part1";

const Over = () => {
  return (
    <div>
      <NeckPart />
      <VideoPlayComponent />
      <LowerPart />
      <Downway />
    </div>
  );
};

export default Over;
