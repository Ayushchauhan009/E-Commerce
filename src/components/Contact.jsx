import React from "react";
import { message, phone } from "../assets/images";

const Contact = () => {
  return (
    <div className="py-24 my-24 wrap md:py-32 px-6 md:px-16 lg:px-28 lg:py-24  sm:py-16 flex flex-col md:flex-row justify-between items-center font-nunito">
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 mb-8 md:mb-0">
        <h1 className="text-2xl md:text-3xl lg:text-[35px] font-semibold w-auto ">
          Let's connect <br /> to build something <br /> memorable for your{" "}
          <span className="multiverse-text font-bold text-2xl md:text-4xl">
            Brand!
          </span>
        </h1>
        <div className="mt-4 mb-6">
          <p className="flex items-center mt-3">
            <img src={message} alt="" className="w-6 h-6" />
            <span className="ml-3 font-semibold">
              <a href="mailto:hello@melangedigital.in">
                hello@melangedigital.in
              </a>
            </span>
          </p>
          <p className="flex items-center my-4 md:my-2">
            <img src={phone} alt="" className="w-6 h-6" />
            <span className="ml-3 font-semibold">
              <a href="tel:+917700974123">+91 7700974123</a>
            </span>
          </p>
        </div>
        {/* <div className="mt-6">
          <MapButton />
        </div> */}
      </div>
      <div className="md:w-1/2 bg-white lg:w-1/2 xl:w-[40%]">
        <div className="pl-6 pr-6 py-7 shadow-2xl">
          <form className="my-6 px-14">
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
          </form>
          <button className="bg-purple-500 text-white w-[72%] py-2 font-bold mx-14 mb-6">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
