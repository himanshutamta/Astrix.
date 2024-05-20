"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { GoLocation } from "react-icons/go";

const imgs = [
  "/images/Dj_boy.png",
  "/images/collection.png",
  "/images/cup.png",
  "/images/girl.png",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND;

const SPRING_OPTIONS = {
  type: "spring",
  stiffness: 400,
  damping: 50,
};

export const CarousalImages = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className="relative overflow-hidden max-w-[100%]  ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 40}%`,
        }}
        transition={SPRING_OPTIONS}
        className="flex gap-2 cursor-grab  active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
    </div>
  );
};

const Images = ({ imgIndex }: any) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-[2/3] relative overflow-hidden w-[350px] md:w-[400px] shrink-0  object-cover text-black"
          >
            {imgIndex === idx ? (
              ""
            ) : (
              <div className="text-white font-bold absolute space-y-5 bottom-6 left-5">
                <p className=" text-4xl ">Event Name</p>

                <div className="flex gap-2 items-center text-2xl">
                  <span>
                    <GoLocation />
                  </span>
                  Location
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </>
  );
};
