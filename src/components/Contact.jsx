import React from "react";
import { message, phone } from "../assets/images";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="py-8 my-4 lg:my-20 wrap md:py-32 px-3 md:px-16 lg:px-28 lg:py-8 sm:py-16 flex flex-col md:flex-row justify-between items-center font-nunito">
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 mb-8 md:mb-0">
        <p className="text-2xl md:text-3xl mb-3 hidden lg:block lg:text-[38px] font-semibold w-auto ">
          Let's Connect
        </p>
        <p className="text-2xl md:text-3xl leading-3 mb-3 hidden lg:block lg:text-[38px] font-semibold w-auto ">
          to build something
        </p>
        <p className="text-2xl md:text-3xl leading-3 hidden lg:block lg:text-[38px] font-semibold w-auto ">
          memorable for your{" "}
          <span className="multiverse-text font-bold  text-2xl md:text-4xl">
            Brand!
          </span>
        </p>

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
        <Form />
      </div>
    </div>
  );
};

export default Contact;
