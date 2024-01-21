"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";
import Link from "next/link";

const HeaderPorto = () => {
  return (
    <div className="dark:bg-[#ffe5cc] grid md:grid-cols-2 grid-cols-1 md:h-screen h-full w-full">
      <div className="flex justify-center items-center md:pt-0 pt-16 md:px-0 px-10">
        <Image className="rounded-lg" src="/gea.jpg" width={380} height={300} />
      </div>
      <div className="md:my-0 my-5 mx-auto max-w-screen-xl text-center lg:py-16 flex items-center  justify-center flex-col">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-[#403930] mb-4 text-3xl md:text-5xl font-extrabold md:h-full">
            <span className="text-[#403930] bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello 👋, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                " Agnya Salsabila",
                1000,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </motion.div>

        <div className=" m-2 p-2 md:m-10 text-justify font-serif ">
          I'm a web developer who loves making websites work well. I specialize
          in creating good-looking sites for both new and established
          businesses. My goal is to help clients have a great online presence
          and make their websites user-friendly. As a dedicated developer, I'm
          here to solve problems and bring ideas to life. I really enjoy what I
          do!
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            href="#about"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#4c4339] hover:bg-[7E6D5E]"
          >
            Hire Me
          </Link>
          <Link
            href="https://drive.google.com/uc?export=download&id=104wsxBqSSOq5sAN1F20U6NCSaR1BUeYD"
            download="CV_AgnyaSalsabila.pdf"
            className="inline-flex justify-center items-center mb-8 py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-[#4c4339]"
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderPorto;
