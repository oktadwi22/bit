"use client";
import Image from "@/common/component/element/Image";
import React from "react";
import Money from "./Money";
import { motion } from "framer-motion";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import MainImageOption2 from "./MainImageOption2";

export default function MainImage() {
  return (
    <div className="w-full relative flex justify-center items-start">
      <motion.div
        className="w-full relative top-[50px] lg:top-[-90px]"
        initial={{
          rotate: 70,
        }}
        animate={{
          rotate: 0,
        }}
        transition={{
          type: "tween",
          ease: [0.8, 0.2, 0, 1],
          duration: 1.5,
        }}
      >
        {/* <MainImageOption2 /> */}
        <Image
          className="w-full h-auto object-cover"
          src="/1.png"
          alt="Logo Image"
          width={700}
          height={700}
          priority
        />
      </motion.div>
      <div className="absolute z-[-9] w-full left-[-35%] lg:left-[-150px] top-[-30px] lg:top-[-150px]">
        <Money />
      </div>
      <div className="absolute w-[40%] left-[70%] top-[300px] lg:top-[250px]">
        <Image
          className="w-full h-auto"
          src="/Cursor.png"
          alt="Logo Image"
          width={400}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
