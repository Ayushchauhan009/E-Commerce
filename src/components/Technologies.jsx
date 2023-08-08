import React from "react";
import item1 from "../assets/images/item1.png";
import item2 from "../assets/images/item2.png";
import item3 from "../assets/images/item3.png";
import item4 from "../assets/images/item-4.png";
import item5 from "../assets/images/item5.png";
import item6 from "../assets/images/item6.png";
import item7 from "../assets/images/item7.png";
import item8 from "../assets/images/item8.png";
import item9 from "../assets/images/item9.png";
import item10 from "../assets/images/item10.png";

const images = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
];

function Technologies() {
  return (
    <div className="wrapper">
      <div className="flex flex-col lg:flex-row px-6 lg:px-28 lg:items-center font-nunito">
        <h2 className="text-[24px] lg:text-[35px] font-semibold my-10">
          Say Yes To Technology With Mèlange!
        </h2>
        <p className="w-auto lg:w-[60%]">
          We utilize technology as a powerful tool to deliver customer-centric
          experiences, combining it with a data-driven approach, while
          constantly staying updated with the latest trends.
        </p>
      </div>
      <div className="marquee">
        <div className="marqueeGroup3">
          {images.map((el, index) => (
            <div key={index} className="imageGroup3">
              <img src={el} className="imaGe3" />
            </div>
          ))}
        </div>
        <div className="marqueeGroup3">
          {images.map((el, index) => (
            <div key={index} className="imageGroup3">
              <img src={el} className="imaGe3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
