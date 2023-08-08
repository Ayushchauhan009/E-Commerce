import React, { useState, useEffect } from "react";
// import { Navbar, Footer, BreadCrumbs, ContactButton } from "../../layout";
import { kalonBanner, kalon1, kalon2, cancel } from "../assets/images";

const Kalon = ({ onCancel }) => {
  // const breadcrumbs = [
  //   { displayName: "Home", url: "/" },
  //   { displayName: "Work", url: "/work" },
  //   { displayName: "Kalon", url: "/work/kalon" },
  // ];
  // const [isScrolled, setIsScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const startThreshold = 500;
  //     let endThreshold = 3200;
  //     if (window.innerWidth < 768) {
  //       endThreshold = 1600;
  //     } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
  //       endThreshold = 2400;
  //     }
  //     setIsScrolled(scrollY > startThreshold && scrollY < endThreshold);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const videoElement = document.getElementById("imageElement");
  //     const scrollY = window.scrollY;
  //     const windowWidth = window.innerWidth - 30;
  //     const scale = Math.min(
  //       1 + scrollY * 0.0002,
  //       windowWidth / videoElement.offsetWidth
  //     );

  //     videoElement.style.transform = `scale(${scale})`;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div>
      <div className="pt-40 bg-white top-[-15%]  md:pt-32 inset-0 font-nunito pb-14 fixed z-30 overflow-y-scroll transition-scrolling">
        <button
          className=" text-white ml-[78%] lg:ml-[92%] py-1 rounded-full font-bold mx-14"
          type="button"
          onClick={onCancel}
        >
          <img src={cancel} alt="" />
        </button>
        <div className="flex flex-col md:flex-col ">
          <div className="flex flex-col md:flex-row justify-between px-4 md:px-16 lg:px-28 items-start md:items-center">
            <div className="mb-10 md:mb-0 mx-4 md:mx-0">
              <h1 className="font-semibold text-4xl  md:text-4xl">Kalon</h1>
            </div>
          </div>
          <img
            src={kalonBanner}
            alt=""
            className="mx-6 my-4 md:my-10 md:mx-16  lg:mx-28"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-around mx-6 md:mx-16 lg:mx-28 mb-6 mt-6 md:mt-16 md:mb-6">
          <div className="mb-8 lg:mb-0 md:mr-8">
            <h1 className="multiverse-text text-2xl md:text-3xl font-bold pb-2">
              Objective
            </h1>
            <p className="text-lg md:text-xl w-auto lg:w-[72%]">
              Established in 2016, Kalon was a nutraceuticals brand specializing
              in premium organic honeys and honey-based products. Having already
              established a presence in modern trade gourmet stores across
              India, Kalon aimed to expand its reach and establish a new brand
              identity in both domestic and international markets.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl md:text-2xl pb-2">Services</h1>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              Social Media
            </p>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              Brand Strategy
            </p>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              D2C Website Development
            </p>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              E-Commerce
            </p>
            <p className="whitespace-nowrap multiverse-text text-lg font-semibold">
              Product Photography
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-20">
          <h1 className="multiverse-text mx-6 md:mx-16 lg:mx-28  font-bold text-2xl md:text-3xl pb-3">
            Our Approach
          </h1>
          <p className="pb-4 md:pb-5 mx-6 md:mx-16 lg:mx-28  text-base md:text-lg w-auto md:w-[85%]">
            A distinct brand identity was developed through the
            conceptualization of a logo and the revamping of packaging designs
            that align with the brand's goals and values.
          </p>
          <p className="pb-4 md:pb-5 mx-6 md:mx-16 lg:mx-28  text-base md:text-lg w-auto md:w-[85%]">
            The brand was launched in the global market through various
            e-commerce platforms, including Amazon India, USA, Noon Dubai, and
            Shopee Singapore.
          </p>
          <p className="pb-4 md:pb-5 mx-6 md:mx-16 lg:mx-28  text-base md:text-lg w-auto md:w-[85%]">
            A fully functional & user friendly Shopify store was developed.
          </p>
          <p className="pb-4 md:pb-5 mx-6 md:mx-16 lg:mx-28 text-base md:text-lg w-auto md:w-[85%]">
            An extensive product photoshoot was done to curate a repository of
            high-quality images.
          </p>
          <div className="grid grid-cols-1 mx-6 md:mx-8 lg:mx-20   md:grid-cols-1 gap-4 mt-10 md:mt-10">
            <div>
              <img
                src={kalon1}
                alt="Image 1"
                className="w-[95%] ml-0 md:ml-7  h-auto"
              />
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-28 mt-8 md:mt-20">
          <h1 className="multiverse-text font-bold text-2xl md:text-3xl pb-3">
            Results
          </h1>
          <p className="text-base md:text-xl">
            Successful brand relaunch with a strong domestic and international
            presence.
          </p>
          <p className="text-base md:text-xl my-3">
            Impressive sales revenue of over 7 Crores in the USA, Singapore, and
            India.
          </p>
          <p className="text-base md:text-xl">
            Increased visibility and recognition of products, boosting brand
            awareness.
          </p>
          <img src={kalon2} className="my-16" alt="" />
          <div className="bg-[#CECBCB] h-0.5 w-auto mx-6 md:mx-24 my-16"></div>
        </div>
      </div>
    </div>
  );
};

export default Kalon;
