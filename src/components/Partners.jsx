import React from "react";
import {
  scout1,
  scout2,
  scout3,
  scout4,
  scout5,
  scout6,
} from "../assets/images";

const Partners = () => {
  return (
    <div className="pt-6 px-6 md:px-16 pb-16 lg:px-28 font-nunito">
      <h1 className="font-semibold text-[22px] lg:text-[30px] mb-6">
        Your End-to-End E-commerce Growth Partner
      </h1>
      <div className="grid grid-cols-1  lg:grid-cols-3">
        <div className="bg-white gap-10 border shadow-xl rounded-[12px] p-6 m-6 flex flex-col items-center jutify-evenly">
          <img src={scout1} alt="" />
          <p className="font-semibold text-center text-[20px]">
            Setting Up Seller Central Account
          </p>
        </div>
        <div className="bg-white gap-10 border shadow-xl rounded-[12px] p-6 m-6 flex flex-col items-center jutify-evenly">
          <img src={scout2} alt="" />
          <p className="font-semibold text-center text-[20px]">
            E-commerce Prep and Logistics
          </p>
        </div>
        <div className="bg-white gap-10 border shadow-xl rounded-[12px] p-6 m-6 flex flex-col items-center jutify-evenly">
          <img src={scout3} alt="" />
          <p className="font-semibold text-center text-[20px]">
            E-commerce Product Listing
          </p>
        </div>
        <div className="bg-white gap-10 border shadow-xl rounded-[12px] p-6 m-6 flex flex-col items-center jutify-evenly">
          <img src={scout4} alt="" />
          <p className="font-semibold text-center w-[50%] text-[20px]">
            E-commerce Ads
          </p>
        </div>
        <div className="bg-white gap-10 border shadow-xl rounded-[12px] p-6 m-6 flex flex-col items-center jutify-evenly">
          <img src={scout5} alt="" />
          <p className="font-semibold text-center w-[70%] text-[20px]">
            Brand Registry and Protection
          </p>
        </div>
        <div className="bg-white gap-10 border shadow-xl rounded-[12px] p-6 m-6 flex flex-col items-center jutify-evenly">
          <img src={scout6} alt="" />
          <p className="font-semibold text-center w-[70%] text-[20px]">
            E-commerce SEO content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
