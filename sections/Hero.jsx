"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Hero = () => {
  return (
    <section className="w-full py-24">
      <div
        className="flex max-lg:flex-col
        justify-between w-full items-end"
      >
        <div className="flex relative flex-col">
          <p className="font-semibold text-white text-[80px] z-10">
            Seamless <br />
            Communication
            <br />
            with OmniGPT
          </p>
          <img
            src="/ellipse.png"
            alt="ellipse"
            className="w-[800px] h-full
            absolute top-[-45px] object-contain"
          />
          <h2
            className="text-white text-3xl
                font-bold"
          >
            Powered by Chat GPT-4
          </h2>
          <p className="text-white text-[20px]">
            Experience the power of AI language models with OmniGPT.
            <br />
            Our chat platform provides seamless communication
            <br />
            across multiple channels.
          </p>
          <h2 className="text-white text-[20px] font-bold mt-4">
            Try for free! 15-day trial, no credit card required.
          </h2>
          <button
            className="bg-green text-white
                w-[200px] h-[48px] rounded-[5px] mt-4
                cursor-pointer font-semibold"
          >
            Start your free trial
          </button>
        </div>
        <div className={`flex items-center justify-center gap-12 flex-col`}>
          <div className="flex gap-8 relative">
            <div
              className="bg-yellow w-[300px] h-[100px]
                rounded-l-full rounded-br-full"
            />
            <div
              className="bg-pink w-[100px] h-[100px]
                rounded-full"
            />
            <motion.div
              variants={fadeIn("right", "spring", 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              className="absolute -top-[3.5rem] left-6"
            >
              <img src="/fauxels.png" alt="people" className="w-[255px]" />
            </motion.div>
          </div>
          <div className="flex gap-8 relative">
            <div
              className="bg-green w-[100px] h-[100px]
                rounded-full"
            />
            <motion.div
              variants={fadeIn("left", "spring", 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              className="absolute -top-[4.3rem] left-[35%]"
            >
              <img src="/kindel.png" alt="people" className=" w-[280px]" />
            </motion.div>
            <div
              className="bg-white w-[300px] h-[100px]
                rounded-l-full rounded-r-full"
            />
          </div>
          <div className="flex gap-8">
            <div
              className="bg-pink w-[425px] h-[100px]
                rounded-tl-full rounded-r-full text-end py-3 px-8"
            >
              <p className="text-white">
                @OmniGPT Can you give us
                <br />
                an update on the latest project
                <br />
                status?
              </p>
            </div>
          </div>
          <div className="flex gap-8 relative">
            <div
              className="bg-green w-[300px] h-[100px]
                rounded-l-full rounded-br-full"
            />
            <motion.div
              variants={fadeIn("right", "spring", 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              className="absolute -top-[9.2rem] "
            >
              <img src="/andrea.png" alt="people" className="w-[280px]" />
            </motion.div>
            <div
              className="bg-pink w-[100px] h-[100px]
                rounded-r-full rounded-tl-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
