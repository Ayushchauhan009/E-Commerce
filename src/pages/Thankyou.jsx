import React from "react";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="font-nunito flex flex-col text-center mt-10">
      <h1 className="font-bold text-[20px]">
        Thankyou for submitting your query.
      </h1>
      <Link
        to="/"
        className="underline text-[18px] mt-6 multiverse-text w-[100%]"
      >
        Go back to Home page
      </Link>
    </div>
  );
};

export default Thankyou;
