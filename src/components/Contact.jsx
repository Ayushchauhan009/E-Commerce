import React from "react";
import { message, phone } from "../assets/images";

const Contact = () => {
  return (
    <div className="py-8 my-4 lg:wrap md:py-32 px-3 md:px-16 lg:px-28 lg:py-8 sm:py-16 flex flex-col md:flex-row justify-between items-center font-nunito">
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl hidden lg:block lg:text-[38px] font-semibold w-auto ">
          Let's connect <br /> to build something <br /> memorable for your{" "}
          <span className="multiverse-text font-bold text-2xl md:text-4xl">
            Brand!
          </span>
        </h2>
        <h2 className="text-2xl md:text-3xl block lg:hidden  lg:text-[38px] font-semibold w-auto ">
          Let's connect to build something <br /> memorable for your{" "}
          <span className="multiverse-text font-bold text-2xl md:text-4xl">
            Brand!
          </span>
        </h2>
        <div className="mt-6 hidden lg:block mb-8">
          <p className="flex items-center mt-3">
            <img src={message} alt="" className="w-7 h-7" />
            <span className="ml-3 font-semibold text-[18px]">
              <a href="mailto:hello@melangedigital.in">
                hello@melangedigital.in
              </a>
            </span>
          </p>
          <p className="flex items-center my-4 md:my-4">
            <img src={phone} alt="" className="w-7 h-7" />
            <span className="ml-3 font-semibold text-[18px]">
              <a href="tel:+917700974123">+91 7700974123</a>
            </span>
          </p>
        </div>
      </div>
      <div className="w-auto md:w-1/2 lg:bg-white lg:w-1/2 xl:w-[40%]">
        <div className="pl-6 pr-6 lg:py-7 lg:shadow-2xl">
          <form className="lg:my-6 lg:px-14">
            <input
              type="text"
              placeholder="Full Name*"
              className="bg-[#e3e3e3] my-2 p-2 w-full placeholder-black outline-none"
            />
            <input
              type="tel"
              placeholder="Phone no*"
              className="bg-[#e3e3e3] my-2 p-2 w-full placeholder-black outline-none"
            />
            <input
              type="email"
              placeholder="Email id*"
              className="bg-[#e3e3e3] my-2 p-2 w-full placeholder-black outline-none"
            />
            <input
              type="text"
              placeholder="Company Name*"
              className="bg-[#e3e3e3] my-2 p-2 w-full placeholder-black outline-none"
            />
            <input
              type="url"
              placeholder="Company URL*"
              className="bg-[#e3e3e3] my-2 p-2 w-full placeholder-black outline-none"
            />
            <button className="bg-purple-500 text-white w-full py-2 font-bold mt-3 rounded-full mb-6">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
