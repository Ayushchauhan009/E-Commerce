import React, { useState, useEffect } from "react";
import { duvonlogo, kalon, comma, olaOner } from "../assets/images";

import { useMediaQuery } from "react-responsive";
import { useSwipeable } from "react-swipeable";

const Testimonials = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      icon: duvonlogo,
      name: "Khushboo Shah",
      title: "Business Head- Duvon Disney",
      review:
        "We have been working with Mélange Digital for over a year. They have helped us tremendously in having a strong presence in all major marketplaces like Amazon, Flipkart, Meesho, etc. Their expertise and diligence scaled up our sales by 20% in just 3 months.",
      comma: comma,
    },
    {
      id: 2,
      icon: kalon,
      name: "Vidya Pandit",
      title: "Co-founder- Kalon Organics",
      review:
        "Mélange team has offered us the most cost-effective and efficient e-commerce services. They have taken care of every minute detail to improve our ranking on marketplace platforms. The best part is that they have a dedicated team just for E-commerce so you don't have to worry about anything!",
      comma: comma,
    },
    {
      id: 3,
      icon: kalon,
      name: "Vidya Pandit",
      title: "Co-founder- Kalon Organics",
      review:
        "Mélange team has offered us the most cost-effective and efficient e-commerce services. They have taken care of every minute detail to improve our ranking on marketplace platforms. The best part is that they have a dedicated team just for E-commerce so you don't have to worry about anything!",
      comma: comma,
    },
    {
      id: 4,
      icon: olaOner,
      name: "Vidhi Gupta",
      title: "Co-Founder - Ola Otter",
      review:
        "I am extremely happy with the E-commerce services provided by the Mélange team. They give a lot of importance to strategy when it comes to E-commerce which gives a personalized solution to your business challenges. The selection of marketplaces, offers, content, and ads are taken care of by them.",
      comma: comma,
    },
  ]);

  const reviewsPerPage = useMediaQuery({ query: "(min-width: 768px)" }) ? 2 : 1;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => nextPage(),
    onSwipedRight: () => previousPage(),
  });

  useEffect(() => {
    const timer = setTimeout(nextPage, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentPage]);

  const nextPage = () => {
    const nextPage = currentPage === totalPages ? 1 : currentPage + 1;
    setCurrentPage(nextPage);
  };

  const previousPage = () => {
    const previousPage = currentPage === 1 ? totalPages : currentPage - 1;
    setCurrentPage(previousPage);
  };

  const getPageReviews = () => {
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    return reviews.slice(startIndex, endIndex);
  };

  return (
    <div className="font-nunito">
      <div>
        <h2 className="font-semibold font-nunito text-2xl md:text-3xl lg:text-[35px] px-9 pt-8 pb-0 md:px-28">
          Hear it from Our Clients
        </h2>
        <div
          className="reviews flex flex-col md:flex-row justify-center mx-4 sm:mx-0 min-h-96 sm:min-h-44"
          {...handleSwipe}
        >
          {getPageReviews().map((review) => (
            <div
              key={review.id}
              className="review md:mx-4 my-6 px-4 py-8 w-full testimonial rounded-lg shadow-xl sm:w-1/2 md:w-1/2 lg:w-56 xl:w-[34rem]"
            >
              <div className="float-right ">
                <img src={review.comma} alt="" className="w-10 h-8" />
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex flex-col items-start mx-4 md:mx-0">
                  <img
                    src={review.icon}
                    alt=""
                    className="w-auto h-16 -ml-3 md:ml-0 "
                  />
                  <div className="flex flex-col items-start -ml-3 sm:ml-0 md:items-start">
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="font-semibold whitespace-nowrap">
                      {review.title}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex ${
                    review.review.length > 100 ? "sm:flex-col" : "sm:flex"
                  }`}
                >
                  {review.review.length <= 100 && (
                    <p className="mt-3 text-[17px] md:font-normal">
                      {review.review}
                    </p>
                  )}
                </div>
              </div>

              {review.review.length > 100 && (
                <div className="mt-3 text-[17px] md:font-normal">
                  {review.review}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pagination flex justify-center items-center my-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`${
                currentPage === index + 1 ? "active" : ""
              } mx-1 rounded-full border-blue-500  text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300`}
              onClick={() => handlePageChange(index + 1)}
            >
              <div className="w-2 h-2 rounded-lg bg-gray-500 hover:bg-blue-500 "></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
