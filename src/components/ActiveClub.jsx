import React, { useEffect, useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

import {
  activeClubVideo,
  active1,
  active2,
  cancel,
  active3,
} from "../assets/images";

const ActiveClub = ({ onCancel }) => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const bannerRef = useRef(null);
  const observerRef = useRef(null);

  const handleToggleMute = () => {
    setMuted(!muted);
  };

  useEffect(() => {
    let observer;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMuted(false);
        } else {
          setMuted(true);
        }
      });
    };

    const createObserver = () => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      observer = new IntersectionObserver(handleIntersection, options);
      observer.observe(bannerRef.current);
      observerRef.current = observer;
    };

    if (typeof IntersectionObserver !== "undefined") {
      createObserver();
    } else {
      setMuted(false);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div className="pt-28 bg-white top-[-15%] md:pt-32 inset-0 font-nunito pb-14 fixed z-30 overflow-y-scroll transition-scrolling">
        <button
          className=" text-white ml-[92%] py-1 rounded-full font-bold mx-14"
          type="button"
          onClick={onCancel}
        >
          <img src={cancel} alt="" />
        </button>
        <div className="flex flex-col md:flex-col ">
          <div className="flex flex-col md:flex-row justify-between px-4 md:px-16 lg:px-28 items-start md:items-center">
            <div className="mb-10 md:mb-0 mx-4 md:mx-0">
              <h1 className="font-semibold text-4xl  md:text-4xl">
                Active Club
              </h1>
            </div>
            <div className="flex flex-row justify-start items-start mb-4 sm:mb-0 ml-0 md:ml-0">
              <div className=""></div>
              <div className="mx-4 md:mx-20  md:my-0">
                <h1 className="text-left md:text-center font-extrabold text-2xl md:text-4xl">
                  10000+
                </h1>
                <p className="text-left md:text-center font-medium text-[16px] md:text-[20px]">
                  Subscriptions
                </p>
              </div>
              <div>
                <h1 className="text-left md:text-center font-extrabold text-2xl md:text-4xl">
                  3M+
                </h1>
                <p className="text-left md:text-center font-medium text-[16px] md:text-[20px]">
                  Reach
                </p>
              </div>
            </div>
          </div>
          <div ref={bannerRef}>
            <video
              ref={videoRef}
              src={activeClubVideo}
              autoPlay
              playsInline
              loop
              muted={muted}
              className="mx-6 my-4 md:my-10  md:mx-16 lg:mx-28 w-[88%] h-[40%] md:w-[83%]"
            ></video>
            <div className="button-volume-active ">
              <button
                onClick={handleToggleMute}
                className="top-[730px] bg-[white] shadow-lg rounded-[50px] p-4 "
              >
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
            </div>
          </div>
        </div>
        {/* ...rest of the component code... */}
        <div className="flex flex-col lg:flex-row justify-around mx-6 md:mx-16 lg:mx-28 mb-6 mt-6 md:mt-16 md:mb-6">
          <div className="mb-8 lg:mb-0 md:mr-8">
            <h1 className="multiverse-text text-2xl md:text-3xl font-bold pb-2">
              Objective
            </h1>
            <p className="text-lg md:text-xl w-auto lg:w-[80%]">
              Active Club, an initiative by Sportz Village, aims to improve
              children's health and fitness by promoting the magic of sports.
              They created a digital solution, integrating diverse fitness
              programs into children's daily routines, battling the sedentary
              lifestyle. The aim was to boost brand awareness and increase
              subscriptions to their fitness programs.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl md:text-2xl pb-2">Services</h1>

            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              Social Media
            </p>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              Performance Marketing
            </p>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              Influencer Marketing
            </p>
            <p className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
              Analytics
            </p>
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-28 mt-10 md:mt-32">
          <h2 className="multiverse-text font-bold text-2xl md:text-3xl pb-3">
            Our Approach
          </h2>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[95%]">
            Brand awareness was generated by running marketing campaigns across
            Facebook, Instagram, and Whatsapp, reaching out to a larger target
            audience.
          </p>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[95%]">
            Collaborated with 500+ micro-influencers in the fitness niche to
            increase the reach & sign ups.
          </p>
          <p className="pb-4 md:pb-5 text-base md:text-lg w-auto md:w-[85%]">
            Free trial programs were promoted on multiple platforms, to generate
            interest among parents in the concept of fitness from the comfort of
            their homes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-10 lg:gap-x-20 gap-y-10 md:gap-y-10 mt-10 md:mt-14 ">
            <img src={active1} alt="Image 1" className="h-80  w-96" />
            <img src={active2} alt="Image 2" className="h-80 w-96" />

            <img src={active3} alt="Image 4" className=" h-80  w-96" />
          </div>
        </div>
        <div className="mx-6 md:mx-16 lg:mx-28 mt-8 md:mt-20">
          <h2 className="multiverse-text font-bold text-2xl md:text-3xl pb-3">
            Results
          </h2>
          <p className="text-base md:text-xl pb-2 ">
            Active club achieved 10,000+ subscriptions in a period of 2 months.
          </p>
          <p className="text-base md:text-xl pb-2">
            The outreach programs reached 3 million Indian parents.
          </p>
          <p className="text-base md:text-xl">
            The active club was later expanded into UK, UAE & USA markets.
          </p>

          <div className="bg-[#CECBCB] h-0.5 w-auto mx-6 md:mx-24 my-16"></div>
        </div>
      </div>
    </div>
  );
};

export default ActiveClub;
