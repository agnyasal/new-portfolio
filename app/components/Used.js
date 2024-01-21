import Image from "next/image";
import React from "react";

const Used = () => {
  return (
    <div id="skills" className="bg-[#ffe5cc] py-10">
      <h1 className="font-serif text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-3xl dark:text-[#494238]">
        TECHNOLOGY THAT I USED
      </h1>
      <p className=" px-5 mt-5 text-sm text-justify font-serif md:text-xl sm:px-16  dark:text-[#494238]">
        I've primarily focused on front-end technologies, specializing in React
        and its complementary tools. However, as a full-stack web developer,
        I've extended my expertise to encompass both front-end and back-end
        technologies. Utilizing React for dynamic and user-centric interfaces,
        I've also delved into the back-end using frameworks like Node.js and
        Django to construct robust server-side functionalities, ensuring
        seamless database integration and efficient data processing. In my
        perspective, it's imperative for programmers, especially full-stack
        developers, to stay abreast of current technology trends. The
        ever-evolving landscape necessitates continuous learning, as tools on
        both the front-end and back-end continually advance. Adapting to these
        changes is integral to our roles, ensuring that we not only enhance
        existing skills but also incorporate emerging technologies, resulting in
        the development of comprehensive and cutting-edge web solutions.
      </p>
      <div className="mt-10">
        <div class=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center justify-center">
            <Image src="/nextjs.png" width={300} height={300} />{" "}
          </div>
          <div className="flex items-center justify-center">
            <Image src="/nodejs.png" width={300} height={300} />{" "}
          </div>
          <div className="flex items-center justify-center">
            <Image src="/Expressjs.png" width={300} height={300} />{" "}
          </div>
          <div className="flex items-center justify-center">
            <Image src="/react.png" width={300} height={300} />{" "}
          </div>
          <div className="flex items-center justify-center">
            <Image src="/js.png" width={300} height={300} />{" "}
          </div>
          <div className="flex items-center justify-center">
            <Image src="/typescript.png" width={300} height={300} />{" "}
          </div>
          <div className="flex items-center justify-center">
            <Image src="/tailwind.png" width={300} height={300} />{" "}
          </div>
          <div className="flex items-center justify-center">
            <Image src="/mysql.png" width={300} height={300} />{" "}
          </div>
          <div className="flex items-center justify-center">
            <Image src="/chakra.png" width={300} height={300} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Used;
