import React, { useState } from "react";
import { logo, cancel } from "../assets/images";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import { div, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRequestClick = () => {
    setIsFormOpen(true);
  };

  const handleCancelClick = () => {
    setIsFormOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bg-white z-20 shadow-md w-full">
      <div className="flex justify-between items-center px-4 md:px-12 lg:px-24 h-16 sm:h-[4.6rem] font-nunito">
        <div
          style={{
            width: "176px",
            height: "45px",
            overflow: "hidden",
          }}
        >
          <div>
            <img
              src={logo}
              alt="Logo"
              className="w-[100%] md:w-auto h-[100%]  md:h-auto "
            />
          </div>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <RiCloseLine className="hamburger-icon w-10 h-8" />
            ) : (
              <RiMenu3Line className="hamburger-icon w-10 h-8" />
            )}
          </button>
        </div>
        <div
          className={`hidden sm:flex font-extrabold text-[17px] justify-around items-center w-2/3 md:w-[60%] lg:w-[50%] ${
            isMenuOpen ? "hidden" : ""
          }`}
        >
          <div className="navbar-link cursor-pointer">
            <div activeClassName="active-link" exact className="nav-link">
              Solutions
            </div>
          </div>
          <div className="navbar-link cursor-pointer">
            <div
              //   to="/work"
              activeClassName="active-link"
              exact
              className="nav-link"
            >
              Our Approach
            </div>
          </div>
          <div className="navbar-link cursor-pointer">
            <div
              //   to="/about"
              activeClassName="active-link"
              exact
              className="nav-link"
            >
              Case Studies
            </div>
          </div>
          <div className="navbar-contact shadow-lg rounded-2xl cursor-pointer bg-[#1A1A1A] font-medium text-[17px] text-[#fff] hidden sm:block">
            <button
              onClick={handleRequestClick}
              activeClassName="active-link"
              exact
              className="nav-link"
            >
              Contact Us
            </button>
            {isFormOpen && (
              <div className="pl-1 pr-1 py-7 bg-white z-10 shadow-2xl border rounded-[20px] fixed top-[16%] left-[35%]">
                <button
                  className=" text-white ml-[20rem] rounded-full  font-bold "
                  type="button"
                  onClick={handleCancelClick}
                >
                  <img src={cancel} alt="" />
                </button>
                <h2 className="font-semibold text-[24px] px-14 py-2 multiverse-text">
                  Get In Touch
                </h2>
                <form className=" flex flex-col px-36 mb-3">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="bg-[#e3e3e3] my-2 p-2 w-[242%] -ml-[5.5rem] placeholder-black outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone no*"
                    className="bg-[#e3e3e3] my-2 p-2 w-[242%] -ml-[5.5rem] placeholder-black outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email id*"
                    className="bg-[#e3e3e3] my-2 p-2 w-[242%] -ml-[5.5rem] placeholder-black outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Company Name*"
                    className="bg-[#e3e3e3] my-2 p-2 w-[242%] -ml-[5.5rem] placeholder-black outline-none"
                  />
                  <input
                    type="url"
                    placeholder="Company URL*"
                    className="bg-[#e3e3e3] my-2 p-2 w-[242%] -ml-[5.5rem] placeholder-black outline-none"
                  />
                </form>
                <button className="bg-purple-500 text-white w-[72%] py-2 font-bold mx-14 mb-6">
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="bg-[submit-bg] flex flex-col items-start pt-6 pl-4 hover:multiverse-text pb-20 justify-between h-[40%] font-medium">
            <div className="navbar-link cursor-pointer ">
              <div
                // to="/services"
                activeClassName="active-link"
                exact
                className="nav-link text-[25px] py-4 "
              >
                Solutions
              </div>
            </div>
            <div className="navbar-link cursor-pointer">
              <div
                // to="/work"
                activeClassName="active-link"
                exact
                className="nav-link text-[25px] "
              >
                Our Approach
              </div>
            </div>
            <div className="navbar-link cursor-pointer">
              <div
                // to="/about"
                activeClassName="active-link"
                exact
                className="nav-link text-[25px] py-4"
              >
                Case Studies
              </div>
            </div>
            <div className="navbar-link cursor-pointer">
              <button
                // to="/contact"
                activeClassName="active-link"
                exact
                className="nav-link text-[25px] "
                onClick={handleRequestClick}
              >
                Contact Us
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
                  <button className="bg-purple-500 text-white w-[72%] rounded-full py-2 font-bold mx-14 mb-6">
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
