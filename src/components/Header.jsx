import React from "react";
import {
  image1,
  data1,
  data2,
  data3,
  data4,
  dataimg1,
  dataimg2,
  dataimg3,
  dataimg4,
} from "../assets/images";

const Header = () => {
  return (
    <div>
      <div className="pt-28 md:pt-32 px-6 md:px-16 lg:px-28 font-nunito transition-scrolling">
        <div className="">
          <h1 className="text-2xl md:text-4xl w-auto  font-semibold">
            E-Commerce Management
          </h1>
          <p className="font-bold multiverse-text text-lg md:text-2xl w-auto  mt-3">
            Accelerating your online store's growth with our ecommerce expertise
          </p>

          <div className="flex items-center flex-col lg:flex-row">
            <img src={image1} alt="" className="w-auto my-10" />
            <div className="pl-6 pr-6 py-7 shadow-2xl">
              <h1 className="font-semibold text-[22px]">
                Ready To Grow Your Business
              </h1>
              <p className="text-[14px] text-[#696969]">
                Let Our Marketplace Expert Get your Product on Top of Searches
                of Ecommerce
              </p>
              <form className="my-6">
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
                <button className="bg-purple-500 rounded-full mt-3 text-white w-full py-2 font-bold ">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <p className="mt-10 lg:mt-2 text-lg md:text-xl font-semibold w-full ">
            We handle all the aspects of e-commerce, from inventory management
            to website optimization and customer experience. You can focus on
            growing your business while we take care of the behind-the-scenes
            work.
          </p>
        </div>
        <div className="my-20">
          <h2 className="text-[22px] lg:text-[35px] my-10 font-semibold">
            Data & Result Driven E-commerce Solutions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="border shadow-xl border-[#49CE96] rounded-[12px]">
              <img
                src={dataimg1}
                alt=""
                className="absolute ml-[0.2px] -mt-[0.6px] lg:-mt-0.5"
              />
              <div className="pr-3 lg:pr-4 py-6 pl-10 lg:pl-20">
                <img src={data1} alt="" />
                <h4 className="font-bold text-[20px] my-2">Market Research</h4>
                <p className="text-[18px]">
                  Maximize e-commerce success through in-depth research of your
                  target audience, competitors, and data-driven insights for
                  strategic execution.
                </p>
              </div>
            </div>
            <div className="border shadow-xl border-[#49CE96] rounded-[12px]">
              <img
                src={dataimg2}
                alt=""
                className="absolute ml-[0.3px] -mt-[0px] lg:-mt-0"
              />
              <div className="pr-3 lg:pr-4 py-6 pl-10 lg:pl-20">
                <img src={data2} alt="" />
                <h4 className="font-bold text-[20px] my-2">
                  Marketplace Management
                </h4>
                <p className="text-[18px]">
                  Optimize your e-commerce presence on marketplaces like Amazon,
                  Flipkart, Myntra through strategic listing, promotions &
                  performance tracking.
                </p>
              </div>
            </div>
            <div className="border shadow-xl border-[#49CE96] rounded-[12px]">
              <img
                src={dataimg3}
                alt=""
                className="absolute ml-[0.2px] -mt-[0.6px] lg:-mt-0.5"
              />
              <div className="pr-3 lg:pr-4 py-6 pl-10 lg:pl-20">
                <img src={data3} alt="" />
                <h4 className="font-bold text-[20px] my-2">D2C</h4>
                <p className="text-[18px] mb-6">
                  Eliminate intermediaries & build a direct connection with your
                  audience through a proven D2C model.
                </p>
              </div>
            </div>
            <div className="border shadow-xl border-[#49CE96] rounded-[12px]">
              <img
                src={dataimg4}
                alt=""
                className="absolute ml-[0.2px] -mt-[0.6px] lg:-mt-0.5"
              />
              <div className="pr-3 lg:pr-4 py-6 pl-10 lg:pl-20">
                <img src={data4} alt="" />
                <h4 className="font-bold text-[20px] my-2">Paid Campaigns</h4>
                <p className="text-[18px] mb-6">
                  Enhance your brand visibility and boost sales by promoting
                  your products across multiple platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
