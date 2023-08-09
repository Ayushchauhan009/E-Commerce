import React, { useState } from "react";
import { relate5, relate6, relate8 } from "../assets/images";
import Duvon from "./Duvon";
import Kalon from "./Kalon";
import ActiveClub from "./ActiveClub";

const CaseStudies = () => {
  const [isFormOpen1, setIsFormOpen1] = useState(false);
  const [isFormOpen2, setIsFormOpen2] = useState(false);
  const [isFormOpen3, setIsFormOpen3] = useState(false);

  const handleRequestClick = () => {
    setIsFormOpen1(true);
  };
  const handleRequestClick2 = () => {
    setIsFormOpen2(true);
  };
  const handleRequestClick3 = () => {
    setIsFormOpen3(true);
  };

  const handleCancelClick = () => {
    setIsFormOpen1(false);
  };
  const handleCancelClick2 = () => {
    setIsFormOpen2(false);
  };
  const handleCancelClick3 = () => {
    setIsFormOpen3(false);
  };
  return (
    <div id="casestudies" className="font-nunito px-6 lg:px-28">
      <h2 className="mt-20 text-2xl md:text-3xl font-bold">
        E-commerce Management Case Studies
      </h2>
      <div className="flex flex-col md:flex-row mt-10 pb-10">
        <div>
          <button onClick={handleRequestClick}>
            <div className="my-4 md:my-0">
              <img src={relate5} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[13px]">
                <p className="whitespace-nowrap">Social Media</p>
                <p className="mx-2 md:mx-3">E-commerce</p>
                <p>Website Development</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl text-left multiverse-text">
                Duvon Disney
              </h2>
            </div>
          </button>
          {isFormOpen1 && <Duvon onCancel={handleCancelClick} />}
        </div>

        <div>
          <button onClick={handleRequestClick2}>
            <div className="my-4 md:my-0 mx-0 md:mx-8">
              <img src={relate8} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[10px] lg:text-[13px]">
                <p>Brand Strategy</p>
                <p className="mx-2 md:mx-3">Social Media</p>
                <p>E-commerce</p>
              </div>
              <h2 className="font-bold text-lg md:text-xl text-left multiverse-text">
                Kalon
              </h2>
            </div>
          </button>
          {isFormOpen2 && <Kalon onCancel={handleCancelClick2} />}
        </div>
        <div>
          <button onClick={handleRequestClick3}>
            <div>
              <img src={relate6} alt="" />
              <div className="flex font-bold my-2 multiverse-text text-[12px] md:text-[11px]">
                <p className="whitespace-nowrap">Performance Marketing</p>
                <p className="mx-2">Social Media</p>
                <p>Influencer Marketing</p>
              </div>
              <h1 className="font-bold text-xl md:text-xl multiverse-text text-left">
                Active Club
              </h1>
            </div>
          </button>
          {isFormOpen3 && <ActiveClub onCancel={handleCancelClick3} />}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
