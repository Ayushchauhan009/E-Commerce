import React from "react";
import samsungImage from "../assets/images/samsung.png";
import olaImage from "../assets/images/ola.png";
import manchesterImage from "../assets/images/manchester.png";
import activeClubImage from "../assets/images/active-club.png";
import duvonImage from "../assets/images/duvon.png";
import swaImage from "../assets/images/swa.png";
import kalonImage from "../assets/images/kalon.png";

const images = [
  samsungImage,
  duvonImage,
  kalonImage,
  swaImage,
  activeClubImage,
  olaImage,
  manchesterImage,
];

function ImageScroller() {
  return (
    <div className="wrapper pb-6">
      <h2 className="text-[24px] lg:text-[32px] font-semibold my-10  ">
        Brands We Have Helped To Grow
      </h2>
      <div className="marquee">
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGe" />
            </div>
          ))}
        </div>
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGe" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageScroller;
