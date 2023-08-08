import React from "react";
import amazonImage from "../assets/images/amazon.png";
import flipkartImage from "../assets/images/flipkart.png";
import nykaaImage from "../assets/images/nykaa.png";
import jiomartImage from "../assets/images/jiomart.png";
import bigbasketImage from "../assets/images/bigbasket.png";
import myntraImage from "../assets/images/myntra.png";
import firstcryImage from "../assets/images/firstcry.png";
import meeshoImage from "../assets/images/meesho.png";

const images = [
  amazonImage,
  flipkartImage,
  nykaaImage,
  jiomartImage,
  bigbasketImage,
  myntraImage,
  firstcryImage,
  meeshoImage,
];

function Sellers() {
  return (
    <div className="wrapper pb-10">
      <h2 className="text-[24px] lg:text-[35px] font-semibold my-10">
        We Help You Sell On
      </h2>
      <div className="marquee">
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup2">
              <img src={el} className="imaGe2" />
            </div>
          ))}
        </div>
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup2">
              <img src={el} className="imaGe2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sellers;
