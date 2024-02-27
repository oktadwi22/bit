import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import Link from "next/link";
import React from "react";

export default function MainOffer() {
  return (
    <div className="w-full flex justify-start gap-5 lg:gap-10 items-start flex-col">
      <H1
        title="Welcome To"
        textColor="white"
        className="lg:text-5xl text-3xl font-semibold"
      />
      <div className="w-[80%]">
        <Image
          className="w-full h-auto"
          src="/logoNavbar.png"
          alt="Logo Image"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="w-full flex flex-col">
        <H1
          title="Your Gateway to a Revolutionary"
          textColor="white"
          className="lg:text-2xl text-xl font-semibold"
        />
        <H1
          title="Real Estate Future!"
          textColor="blue"
          className="lg:text-2xl text-xl font-semibold "
        />
      </div>
      <div className="relative">
        <Link href="/staking" className="w-full">
          <ButtonSpot title="Get Started" className="bg-white !px-10 !py-5" />
        </Link>
      </div>
    </div>
  );
}
