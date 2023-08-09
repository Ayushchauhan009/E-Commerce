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
      <div className="grid grid-cols-2  lg:grid-cols-3">
        <div className="bg-white gap-6 lg:gap-14 border shadow-xl rounded-[12px] p-6 m-2 flex flex-col items-center lg:jutify-evenly">
          <img src={scout1} alt="" />
          <p className="font-semibold text-center text-[16px] lg:text-[20px]">
            Setting Up Seller Central <br /> Account
          </p>
        </div>
        <div className="bg-white gap-3 lg:gap-14 border shadow-xl rounded-[12px] p-6 m-2 flex flex-col items-center jutify-evenly">
          <img src={scout2} alt="" />
          <p className="font-semibold text-center text-[16px] lg:text-[20px]">
            E-commerce Prep and <br /> Logistics
          </p>
        </div>
        <div className="bg-white gap-5 lg:gap-14 border shadow-xl rounded-[12px] p-6 m-2 flex flex-col items-center jutify-evenly">
          <img src={scout3} alt="" />
          <p className="font-semibold text-center text-[16px] lg:text-[20px]">
            E-commerce Product <br /> Listing
          </p>
        </div>
        <div className="bg-white gap-5 lg:gap-14 border shadow-xl rounded-[12px] p-6 m-2 flex flex-col items-center jutify-evenly">
          <img src={scout4} alt="" />
          <p className="font-semibold text-center text-[16px] lg:text-[20px]">
            E-commerce <br />
            Ads
          </p>
        </div>
        <div className="bg-white gap-5 lg:gap-14 border shadow-xl rounded-[12px] p-6 m-2 flex flex-col items-center jutify-evenly">
          <img src={scout5} alt="" />
          <p className="font-semibold text-center text-[16px] lg:text-[20px]">
            Brand Registry and <br /> Protection
          </p>
        </div>
        <div className="bg-white gap-5 lg:gap-14 border shadow-xl rounded-[12px] p-6 m-2 flex flex-col items-center jutify-evenly">
          <img src={scout6} alt="" />
          <p className="font-semibold text-center text-[16px] lg:text-[20px]">
            E-commerce SEO <br /> content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
