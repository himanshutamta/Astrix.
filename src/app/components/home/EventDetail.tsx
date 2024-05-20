"use client";
import React from "react";
import HoverEffect from "../HoverEffect";
import Image from "next/image";
import { GoLocation } from "react-icons/go";
import { LuAlarmClock } from "react-icons/lu";
import { motion } from "framer-motion";

const EventDetail = () => {
  const animatV = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  };
  const anime = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <div className="bg-primary/90 sm:py-8 sm:pt-12 sm:pl-14 px-4  py-6 h-full">
      <motion.div
        variants={animatV}
        initial="initial"
        animate="animate"
        transition={{
          delayChildren: 0.2,
          staggerChildren: 0.3,
        }}
      >
        <motion.h3
          variants={animatV}
          className="text-2xl font-semibold max-w-[250px] leading-[28px] mb-5 md:mb-16"
        >
          Explore Your First Event
        </motion.h3>
        <motion.div
          variants={animatV}
          className="text-4xl sm:text-5xl font-extrabold  mb-7 "
        >
          Event Name
        </motion.div>

        <motion.div
          variants={animatV}
          className="font-semibold text-lg sm:text-xl mb-5 flex gap-3"
        >
          <div className="flex gap-2 items-center">
            <span>
              <GoLocation />
            </span>
            Venue
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <LuAlarmClock />
            </span>
            04/3/2024 @19:00
          </div>
        </motion.div>
        <motion.p
          variants={animatV}
          className="max-w-[300px] font-medium mb-10"
        >
          Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed
          ipsum. Pellentesque mattis condimentum ut nulla.{" "}
        </motion.p>

        <motion.div variants={animatV} className="mb-28">
          <p className="mb-10 font-bold text-xl ">Artist Lineup</p>
          <div className="flex ">
            {[
              "/images/Frame1.png",
              "/images/Frame3.png",
              "/images/Frame2.png",
            ].map((i, indx) => {
              return (
                <div
                  key={indx}
                  className={` w-[160px] aspect-[2/2] rounded-xl relative ${
                    indx === 1 && "scale-125 z-10"
                  }`}
                >
                  <Image src={i} alt="img" fill className="rounded-xl " />
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={anime}
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.3,
          delayChildren: 0.2,
        }}
        className="text-right flex justify-between  items-end md:pr-12"
      >
        <motion.div
          variants={anime}
          className="w-[140px] aspect-[2/2] rounded-xl relative outline outline-2 outline-primary"
        >
          <Image
            src="/images/qrcode.png"
            alt="img"
            fill
            className="rounded-xl "
          />
        </motion.div>
        <motion.div variants={anime}>
          <HoverEffect />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventDetail;
