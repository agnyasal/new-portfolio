import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div>
        <section
          id="about"
          className=" grid md:grid-cols-2 grid-cols-1 bg-[#ffe5cc] md:h-screen h-full"
        >
          <div className="md:py-8 py-8 px-4 mx-auto max-w-screen-xl text-center flex items-center justify-center flex-col">
            <h1 className="md:mb-7 mb-0 text-xl font-extrabold font-serif tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-[#4c4239]">
              Let's work together to construct something remarkable! <br />
              Thank you!
            </h1>
          </div>
          <div className="flex items-center justify-center p-5">
            <form className="w-full md:w-4/5 font-serif font-medium dark:text-[#4c4339]">
              <div className="mb-5">
                <label for="name" className="mb-2 text-sm">
                  Your name
                </label>
                <input
                  type="name"
                  id="name"
                  className="text-sm rounded-lg w-full p-2.5 dark:bg-[#86705b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="mb-5">
                <label for="email" className="mb-2 text-sm">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="text-sm rounded-lg w-full p-2.5 dark:bg-[#86705b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@mail.com"
                  required
                />
              </div>
              <div className="w-5/5">
                <label className="block mb-2 text-sm font-medium text-gray-900 *:dark:text-[#4c4339]">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#86705b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" mt-6 text-white bg-[#4c4339] hover:bg-[#4c4339] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#4c4339] dark:hover:bg-[#4c4339] dark:focus:ring-[#4c4339]"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
