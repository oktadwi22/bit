import React from "react";
import MainOffer from "./components/MainOffer";
import MainImage from "./components/MainImage";

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px] flex flex-col justify-center pb-40 px-5 lg:px-10 mt-40  w-full  ">
      <div className="grid lg:grid-cols-2 w-full ">
        <MainOffer />

        <MainImage />
      </div>
      <div
        className={`absolute  z-[-9] glowbg w-[200px] md:w-[300px] md:h-[300px] h-[200px] top-[250px]`}
      ></div>
    </div>
  );
}
