import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div>
        <section
          id="about"
          className="bg-[#feddbf] grid md:grid-cols-2 grid-cols-1"
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 flex items-center  justify-center flex-col">
            <div className="p-5">
              <h1 className="text-4xl text-center font-serif font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-[#433c33]">
                A Little Bit About Me
              </h1>
              <p className="mt-10 text-lg text-justify font-serif lg:text-xl   dark:text-[#433c33]">
                As a Full Stack Web Developer, I am a seasoned professional with
                expertise in both Front-end and Back-end development. Proficient
                in HTML, CSS, and JavaScript frameworks such as React.js and
                Node.js, I specialize in creating intuitive user interfaces and
                optimizing server-side functionalities. My skills encompass
                responsive design, API integration, and a commitment to staying
                updated with the latest industry standards. With a solid
                foundation in web technologies and a keen eye for detail, I
                strive to deliver efficient and reliable solutions for every
                project.
                <br />
                If you want to know more about me you can find me on my{" "}
                <Link
                  href="https://www.linkedin.com/in/agnya-salsabila-setiadi-722911196/"
                  className="text-[#2E2823] font-semibold  hover:text-[#2E2823]"
                  target="_blank"
                >
                  <span> Linkedin </span>
                </Link>
                and also my{" "}
                <Link
                  href="https://github.com/agnyasal"
                  className="text-[#2E2823] font-semibold  hover:text-[#2E2823]"
                  target="_blank"
                >
                  Github.
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center md:pb-0 pb-16 md:px-0 px-8">
            <Image
              className="rounded-lg"
              src="/GeaAbout.jpg"
              width={400}
              height={500}
            ></Image>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
