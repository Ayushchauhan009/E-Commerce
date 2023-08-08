import React, { useState } from "react";
import { relate5, relate8 } from "../assets/images";
import Duvon from "./Duvon";
import Kalon from "./Kalon";

const CaseStudies = () => {
  const [isFormOpen1, setIsFormOpen1] = useState(false);
  const [isFormOpen2, setIsFormOpen2] = useState(false);

  const handleRequestClick = () => {
    setIsFormOpen(true);
  };

  const handleCancelClick = () => {
    setIsFormOpen(false);
  };
  return (
    <div className="font-nunito px-6 lg:px-28">
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
          {isFormOpen && <Duvon onCancel={handleCancelClick} />}
        </div>

        <div>
          <button onClick={handleRequestClick}>
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
          {isFormOpen && <Kalon onCancel={handleCancelClick} />}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
