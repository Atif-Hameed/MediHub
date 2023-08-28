import React, { useEffect, useRef, useState } from "react";
import MainLogo from "../Assets/mainLogoSvg.svg";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <>
      <div className="w-full bg-transparent flex md:px-[10rem] px-4 md:py-12 py-6 md:items-center md:justify-normal justify-around">
        <div className=" md:flex hidden flex-col gap-2 w-full">
          <Link to="/">
            <p className="text-white hover:text-[#d79949] cursor-pointer md:text-base text-sm">
              Home
            </p>
          </Link>

          <div className="h-[0.11rem] rounded bg-white md:w-3/4 w-[90%]"></div>

          <Link to="/SkinCondition">
            <p className="text-white hover:text-[#d79949] cursor-pointer md:text-base text-sm">
              Services
            </p>
          </Link>
        </div>

        <div>
          <Link to="/">
            <img
              src={MainLogo}
              className="md:w-[30rem] w-[10rem] h-auto"
              alt=""
            />
          </Link>
        </div>

        <div className="md:flex hidden flex-col gap-2 w-full">
          <Link to="/AboutUs" className="self-end">
            <p className=" text-white self-end hover:text-[#d79949] cursor-pointer md:text-base text-sm">
              About Us
            </p>
          </Link>

          <div className="h-[0.11rem] rounded bg-white md:w-3/4 w-[90%] self-end"></div>

          <Link to="/ContactUs" className="self-end">
            <p className="text-white self-end hover:text-[#d79949] cursor-pointer md:text-base text-sm">
              Contact Us
            </p>
          </Link>
        </div>

        <div className="overflow-x-hidden">
          <button onClick={handleOpen} className="md:hidden : block">
            {open ? (
              <RxCross1 className="text-3xl" />
            ) : (
              <AiOutlineMenu className="text-4xl" />
            )}
          </button>

          <div ref={divRef}
            className={` ${open ? "w-48 px-4 py-3" : "!w-0 "
              } !overflow-hidden top-[5.5rem] ease-in-out duration-500 transition-all absolute right-0 bg-black  rounded-lg flex flex-col gap-3`}
          >
            <Link to="/">
              <p className="text-center text-white hover:text-[#d79949] cursor-pointer md:text-base text-sm">
                Home
              </p>
            </Link>

            <div className="h-[0.11rem] rounded bg-white md:w-3/4 w-full"></div>

            <Link to="/SkinCondition">
              <p className="text-center text-white hover:text-[#d79949] cursor-pointer md:text-base text-sm">
                Services
              </p>
            </Link>

            <div className="h-[0.11rem] rounded bg-white md:w-3/4 w-full"></div>

            <Link to="/AboutUs">
              <p className=" text-center text-white hover:text-[#d79949] cursor-pointer md:text-base text-sm">
                About Us
              </p>
            </Link>

            <div className="h-[0.11rem] rounded bg-white md:w-3/4 w-full self-end"></div>

            <Link to="/ContactUs">
              <p className="text-center text-white hover:text-[#d79949] cursor-pointer md:text-base text-sm">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
