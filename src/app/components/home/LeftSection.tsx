"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CarousalImages } from "./CarousalImages";

const LeftSection = ({ tab, changeTab }: { tab: string; changeTab: any }) => {
  return (
    <div className="bg-primary/90 py-5 md:pl-10 h-full relative overflow-hidden">
      <div className="flex gap-2 items-center px-3">
        <div className="relative h-14 w-14 ">
          <Image src={"/images/Astrix-Branding.png"} alt="" fill />
        </div>
        <h2 className="text-textColor font-bold text-2xl">Astrix.</h2>
      </div>
      <div className="max-w-[270px] absolute top-[15%] space-y-16">
        <p className="text-7xl sm:text-8xl  font-extrabold break-words text-white/30">
          ASTRIX
        </p>
        <p className=" text-7xl sm:text-8xl max-w-[280px] font-extrabold break-words text-white/30">
          {tab === "Events" ? "EVENTS" : "COLLECTIBLE"}
        </p>
      </div>
      <div className="">
        <div>
          <div className="flex justify-end overflow-hidden sm:my-14 my-5 mb-9 ">
            <CarousalImages />
          </div>
          <div className="bg-[#282B30] max-w-[270px] rounded-full  text-center">
            <button
              className={`px-8 py-3  rounded-full font-semibold  ${
                tab === "Events" &&
                "bg-[#484E56] duration-100 transition-all delay-75"
              }`}
              onClick={() => changeTab("Events")}
            >
              Events
            </button>
            <button
              className={`px-8 py-3 font-semibold  rounded-full  ${
                tab === "Collections" &&
                "bg-[#484E56] duration-100 transition-all delay-75"
              }`}
              onClick={() => changeTab("Collections")}
            >
              Collections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
