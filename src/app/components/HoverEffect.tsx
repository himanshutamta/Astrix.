"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const HoverEffect = () => {
  const [hover, setHover] = useState(true);
  return (
    <button
      className="relative h-12 w-[170px] text-center flex justify-center items-center text-primary bg-textColor border border-transparent rounded-full text-xl"
      onMouseEnter={() => setHover(!hover)}
    >
      <AnimatePresence>
        {hover && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
            }}
            className="absolute font-medium md:font-bold"
          >
            Join Waitlist
          </motion.h2>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {hover ? (
          ""
        ) : (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
            }}
            className="absolute font-medium md:font-bold"
          >
            Join Waitlist
          </motion.h2>
        )}
      </AnimatePresence>
    </button>
  );
};

export default HoverEffect;
