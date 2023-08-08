import React, { useState, useRef } from "react";
import {
  melangeLogo2,
  certificate1,
  certificate2,
  linkedin,
} from "../assets/images";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] pt-10 font-nunito px-0 lg:px-14">
      <div className="flex justify-evenly  flex-col lg:flex-row text-white items-start ml-6 md:ml-0">
        <div className="flex flex-col justify-between">
          <div>
            <img
              src={melangeLogo2}
              alt=""
              className="mb-6 md:mb-0 w-auto h-auto"
            />
          </div>
        </div>
        <div className="translate-x-0 lg:translate-x-[20%]">
          <div className="flex">
            <h2 className="font-bold text-lg md:text-xl mb-2 md:mb-0 ">
              Follow us
            </h2>
            <a
              href="https://www.linkedin.com/company/melangedigital/"
              className="ml-3"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </a>
          </div>
          <div className="my-4">
            <h2 className="font-bold text-lg md:text-xl ">Address</h2>
            <p className="w-64 md:w-full mt-2 text-base md:text-lg lg:transform lg:w-[60%]">
              <a
                href="https://www.google.com/maps/place/Lodha+Supremus,+Andheri/@19.4280124,68.8564316,9z/data=!4m6!3m5!1s0x3be7c9fbdc277255:0xc0d0f6390ccdf263!8m2!3d19.1220835!4d72.8664415!16s%2Fg%2F11fl9j2bpk?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                L-302, The Trees Godrej, Vikhroli East, Mumbai - 400079
              </a>
            </p>
          </div>
        </div>
        <div className="translate-x-0 lg:translate-x-[-20%]">
          <div className="mb-6 ">
            <h2 className="font-bold text-lg md:text-xl mb-0 md:mb-0">
              Call Us
            </h2>
            <a
              href="tel:+917700974123"
              className="text-base md:text-lg mb-2 md:mb-0 md:mt-2"
            >
              +91 7700974123
            </a>
          </div>
          <div className="mb-2 md:mb-0">
            <h2 className="font-bold text-lg md:text-xl mb-0 md:mb-0">
              Email Us
            </h2>
            <a
              href="mailto:hello@melangedigital.in"
              className="text-base mt-2 underline md:text-lg"
            >
              hello@melangedigital.in
            </a>
          </div>
        </div>
        <div className="-ml-3 lg:ml-0">
          <img
            src={certificate1}
            alt=""
            className="mb-2 mt-0 lg:-mt-4 md:mr-1 invert"
          />
          <img src={certificate2} alt="" className="ml-2 " />
        </div>
      </div>

      {/* Down links  */}
      <div className="mx-4 md:mx-12 h-0.5 bg-[#564f4f]"></div>
      <div className="mx-4 md:mx-14 text-white py-5 font-nunito text-right bg-[#1A1A1A]">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Mélange Digital. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
