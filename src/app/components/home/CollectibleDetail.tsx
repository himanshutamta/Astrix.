"use client";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import React from "react";
import HoverEffect from "../HoverEffect";
import Image from "next/image";
import { motion } from "framer-motion";

const CollectibleDetail = () => {
  const anime = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <div className="bg-primary/90 md:py-8 md:pt-12 md:pl-14 px-4 sm:pr-0 py-6">
      <motion.div
        variants={anime}
        initial="initial"
        animate="animate"
        transition={{ delayChildren: 0.2, staggerChildren: 0.2 }}
      >
        <motion.h3
          variants={anime}
          className="text-2xl font-semibold max-w-[250px] leading-[28px] mb-5 sm:mb-10"
        >
          Explore Youre First Collectible
        </motion.h3>
        <motion.div
          variants={anime}
          className="text-4xl sm:text-5xl font-extrabold w-[100px] mb-5 sm:leading-[55px]"
        >
          Meta Lives
        </motion.div>
        <motion.p variants={anime} className="font-semibold text-xl mb-3">
          Live in Astrix
        </motion.p>
        <motion.p variants={anime} className="max-w-[300px] font-medium mb-10">
          Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed
          ipsum. Pellentesque mattis condimentum ut nulla.{" "}
        </motion.p>
        <motion.div variants={anime} className="flex gap-4 items-end mb-12 ">
          <AvatarGroup>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          </AvatarGroup>
          <p className="font-bold">22k people interested</p>
        </motion.div>
        <motion.div
          variants={anime}
          className="mb-14 overflow-x-scroll max-w-[550px] xl:w-full scrollbar-hide"
        >
          <p className="mb-3 font-bold text-sm">Collectibies</p>
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => {
              return (
                <div
                  key={i}
                  className="bg-secondary/30 p-3 text-center rounded-xl"
                >
                  <div className="flex justify-between items-center mb-3">
                    <p className="bg-primary text-sm px-2 rounded-full">2024</p>
                    <p className="text-sm text-primary">
                      By <span className="font-semibold">Pablo</span>
                    </p>
                  </div>
                  <p className="text-primary font-medium mb-2">
                    Collectible Name
                  </p>
                  <div className="h-48 w-44 rounded-xl relative outline outline-2 outline-primary">
                    <Image
                      src="/images/collection.png"
                      alt="img"
                      fill
                      className="rounded-xl "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          variants={anime}
          className="text-right flex justify-end md:px-12"
        >
          <HoverEffect />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CollectibleDetail;
