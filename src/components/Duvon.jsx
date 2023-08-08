import React, { useState, useEffect } from "react";
// import { Navbar, Footer, BreadCrumbs, ContactButton } from "../../layout";
// import { motion } from "framer-motion";
import {
  duvon1,
  duvon2,
  duvon3,
  duvon4,
  duvon5,
  cancel,
  duvon6,
} from "../assets/images";

const Duvon = ({ onCancel }) => {
  return (
    <div>
      <div className="pt-28 bg-white top-[-15%]  md:pt-32 inset-0 font-nunito pb-14 fixed z-30 overflow-y-scroll transition-scrolling">
        <button
          className=" text-white ml-[92%] py-1 rounded-full font-bold mx-14"
          type="button"
          onClick={onCancel}
        >
          <img src={cancel} alt="" />
        </button>
        <div className="flex flex-col md:flex-col ">
          <div className="flex flex-col md:flex-row justify-between px-4 md:px-16 lg:px-28 items-start md:items-center">
            <div className="mb-10 md:mb-0 mx-2 md:mx-0">
              <h1 className="font-semibold text-4xl  md:text-4xl">
                Duvon Disney
              </h1>
            </div>
            <div className="flex flex-row justify-start items-start mb-4 sm:mb-0 ml-3 md:ml-0">
              <div className=""></div>

              <div>
                <h1 className="text-left md:text-center font-extrabold text-2xl md:text-4xl">
                  3 Lakh +
                </h1>
                <p className="text-left md:text-center font-medium text-[16px] md:text-[20px]">
                  sales initial 3 months
                </p>
              </div>
            </div>
          </div>
          <img
            src={duvon1}
            alt=""
            className="mx-6 my-4 md:my-10 md:mx-16 lg:mx-28"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-around mx-6 md:mx-16 lg:mx-28 mb-6 mt-6 md:mt-16 md:mb-6">
          <div className="mb-8 lg:mb-0 lg:mr-8">
            <h1 className="multiverse-text text-2xl md:text-3xl font-bold pb-2">
              Objective
            </h1>
            <p className="text-lg md:text-xl w-auto lg:w-[80%]">
              Disney Duvon is a kid's personal care brand that enhances their
              routines by adding fun and joy with their favorite Disney & Marvel
              characters. The major objective was to launch the brand on major
              e-commerce platforms and have a user-friendly and attractive D2C
              website in order to drive sales growth.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl md:text-2xl pb-2">Services</h1>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              Social Media
            </p>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              Website Development
            </p>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              E-commerce
            </p>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-28 mt-10 md:mt-32">
          <h1 className="multiverse-text font-bold text-2xl md:text-3xl pb-3">
            Our Approach
          </h1>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[95%]">
            Conducted extensive research in the kids's personal care industry
            and analyzed the competitive landscape.
          </p>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[95%]">
            Leveraged our expertise in online marketplaces to effectively launch
            the brand on major & relevant e-commerce platforms.
          </p>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[85%]">
            Established a strong presence on social media platforms and created
            a user-friendly D2C website.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-10 md:mt-14">
            <div>
              <img
                src={duvon2}
                alt="Image 1"
                className="w-full h-auto col-span-1"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-10 lg:gap-x-16 gap-y-10 md:gap-y-10 mt-10 md:mt-14">
              <img src={duvon3} alt="Image 2" className="w-96 h-72 md:h-auto" />
              <img src={duvon4} alt="Image 3" className="w-96 h-72 md:h-auto" />
              <img src={duvon5} alt="Image 4" className="w-96 h-72 md:h-auto" />
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16  lg:mx-28 mt-8 md:mt-20">
          <h1 className="multiverse-text font-bold text-2xl md:text-3xl pb-3">
            Results
          </h1>
          <p className="text-base md:text-xl pb-2 ">
            Brand successfully launched on prominent e-commerce platforms.
          </p>
          <p className="text-base md:text-xl">
            Generated sales exceeding Rs.3 lakh within the initial three months.
          </p>
          <img src={duvon6} alt="" className=" my-8" />
          <div className="bg-[#CECBCB] h-0.5 w-auto mx-6 md:mx-24 my-16"></div>
          {/* <div className="flex flex-row justify-center items-center">
            <h1 className="multiverse-text font-bold text-lg md:text-3xl mb-0 md:mb-0">
              Let's work together!
            </h1>
            <div className="w-0.5 md:w-0.5 workTogether h-16 mx-0 sm:mx-3 md:mx-12"></div>
            <ContactButton />
          </div> */}
        </div>
        {/* <div className="mx-4 md:mx-16 lg:mx-28 mt-8 md:mt-28">
          <h1 className="font-bold text-2xl md:text-3xl mb-10">
            Related Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-10 lg:gap-x-20 gap-y-10 md:gap-y-10">
            <Link to="/work/makemytrip">
              <img src={relate1} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[14px] md:text-[13px]">
                <p>E-commerce</p>
                <p className="mx-2 md:mx-6">Social Media</p>
                <p>Website Development</p>
              </div>
              <h1 className="font-bold text-xl md:text-2xl">
                MakeMyTrip Holidays
              </h1>
            </Link>
            <Link to="/work/sportzvillagexp" className="my-10 md:my-0">
              <img src={relate2} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[14px] md:text-[13px]">
                <p>Thought Leadership</p>
                <p className="mx-2 md:mx-6">Performance Marketing</p>
              </div>
              <h1 className="font-bold text-xl md:text-2xl">
                Sportz Village XP
              </h1>
            </Link>
            <Link to="/work/dhruvak">
              <img src={relate3} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[14px] md:text-[13px]">
                <p>B2C Launch</p>
                <p className="mx-2 md:mx-6">Performance Marketing</p>
                <p>Social Media</p>
              </div>
              <h1 className="font-bold text-xl md:text-2xl">Dhruvak</h1>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Duvon;
