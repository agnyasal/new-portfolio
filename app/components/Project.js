import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <section
      id="projects"
      className="bg-[#FFDDBF] grid md:grid-cols-1 max-h-full"
    >
      <div className="py-8 px-3 md:px-16  mx-full text-start lg:py-16 ">
        <h1 className="mb-4 text-3xl text-center font-serif font-extrabold tracking-tight leading-none md:text-5xl md:text-left dark:text[#494238]">
          Project
        </h1>

        {/* ====== */}
        <div className="bg-white">
          <div className="sm:justify-center m-5 rounded-lg grid md:grid-cols-2 ">
            <div className="m-10">
              <h1 className="text-4xl text-center font-serif font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl dark:text-[#5e574e]">
                Let's Travel
              </h1>
              <p className="mt-10 text-lg text-justify font-serif lg:text-xl dark:text-[#5e574e]">
                Let's Travel is a web-based platform for your effortless travel
                experiences. We strive to simplify your journey by providing a
                seamless way to discover and book ideal destinations. Your
                adventure starts here with Let's Travel
              </p>
              <div className="flex justify-center text-xl font-serif dark:text-[#5e574e]">
                <Link
                  href="https://company-profile-agnya.vercel.app/"
                  target="_blank"
                >
                  <button className="mt-8">View Case Study</button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/companyprof.png"
                alt="CompanyProfile"
                width={1080}
                height={768}
                quality={100}
                className="rounded-xl"
              />
            </div>
          </div>
          {/* ====== */}
          <div className="sm:justify-center m-5 rounded-lg grid md:grid-cols-2 ">
            {" "}
            <div className="m-10">
              <h1 className="text-4xl text-center font-serif font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-3xl dark:text-[#5e574e]">
                Social Media App Hello.ID
              </h1>
              <p className="mt-10 text-lg text-justify font-serif lg:text-xl dark:text-[#5e574e]">
                "Hello.ID is a social media app similar to Twitter, made with
                React JS and Chakra UI. It's user-friendly, allowing you to
                easily connect and share. Join Sosmed for a simple and enjoyable
                social experience – where your journey begins!"
              </p>
              <div className=" flex justify-center text-xl font-serif dark:text-[#5e574e] ">
                <button className="mt-8">view case study</button>
              </div>
            </div>
            <div>
              <Image
                src="/sosial.png"
                alt="SocialMedia"
                width={1080}
                height={768}
                quality={100}
                className="rounded-xl"
              />
            </div>
          </div>
          {/* ====== */}
          <div className="sm:justify-center m-5 rounded-lg grid md:grid-cols-2 ">
            <div className="m-10">
              <h1 className="text-4xl text-center font-serif font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-3xl dark:text-[#5e574e]">
                The Foodhub Blog
              </h1>
              <p className="mt-10 text-lg text-justify font-serif lg:text-xl dark:text-[#5e574e]">
                "The FoodHub Blog, your ultimate destination for all things
                delicious! Dive into a world of culinary wonders with our blog,
                dedicated to food enthusiasts. Explore mouthwatering recipes,
                insightful stories, and the latest trends in the culinary realm.
                Embark on a flavorful journey with The FoodHub Blog – where
                every bite tells a story."
              </p>
              <div className=" flex justify-center text-xl font-serif dark:text-[#5e574e] ">
                <button className="mt-8">view case study</button>
              </div>
            </div>
            <div>
              <Image
                src="/foodhub.png"
                alt="Foodhub"
                width={1080}
                height={768}
                quality={100}
                className="rounded-xl"
              />
            </div>
          </div>
          {/* ====== */}
        </div>
      </div>
    </section>
  );
};

export default Project;
