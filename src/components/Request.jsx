import React, { useState } from "react";
import { cancel } from "../assets/images";

const Request = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRequestClick = () => {
    setIsFormOpen(true);
  };

  const handleCancelClick = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="px-6 md:px-16 lg:px-28 my-20 font-nunito req-bg h-64 flex flex-col justify-center lg:justify-evenly items-center">
      <h2 className="text-[22px] lg:text-[35px] text-white font-semibold text-center">
        Ready to scale your e-commerce sales to the next level?
      </h2>
      <button
        className="bg-purple-500 p-3 font-semibold mt-3 lg:mt-0 text-[16px] lg:text-[20px] text-white hover:shadow-2xl hover:scale-110 transition-all rounded-full"
        onClick={handleRequestClick}
      >
        Request an E-commerce Strategy
      </button>

      {isFormOpen && (
        <div className="pl-1 pr-1 py-7 bg-white z-10 shadow-2xl border rounded-[20px] fixed top-[20%] left-[35%]">
          <button
            className=" text-white ml-[18.2rem] rounded-full  font-bold mx-14"
            type="button"
            onClick={handleCancelClick}
          >
            <img src={cancel} alt="" />
          </button>
          <h2 className="font-semibold text-[24px] px-14 py-2 multiverse-text">
            Get In Touch
          </h2>
          <form className=" flex flex-col px-32 mb-3">
            <input
              type="text"
              placeholder="Full Name*"
              className="bg-[#e3e3e3] my-2 p-2 w-[220%] -ml-[4.5rem] placeholder-black outline-none"
            />
            <input
              type="tel"
              placeholder="Phone no*"
              className="bg-[#e3e3e3] my-2 p-2 w-[220%] -ml-[4.5rem] placeholder-black outline-none"
            />
            <input
              type="email"
              placeholder="Email id*"
              className="bg-[#e3e3e3] my-2 p-2 w-[220%] -ml-[4.5rem] placeholder-black outline-none"
            />
            <input
              type="text"
              placeholder="Company Name*"
              className="bg-[#e3e3e3] my-2 p-2 w-[220%] -ml-[4.5rem] placeholder-black outline-none"
            />
            <input
              type="url"
              placeholder="Company URL*"
              className="bg-[#e3e3e3] my-2 p-2 w-[220%] -ml-[4.5rem] placeholder-black outline-none"
            />
          </form>
          <button className="bg-purple-500 text-white w-[72%] py-2 font-bold mx-14 mb-6">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Request;
