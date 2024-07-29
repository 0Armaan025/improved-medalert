import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <div className={navbarClasses.join(" ")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="#"
              style={{ fontFamily: "poppins" }}
              className="text-2xl font-bold flex justify-center items-center flex-row text-black"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/3063/3063176.png"
                width="40px"
                className="mr-4"
                height="20px"
                alt="MedAlert Logo"
              />
              MedAlert
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-xl">
              <a
                href="#"
                style={{ fontFamily: "poppins" }}
                className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-[1rem] font-medium"
              >
                About
              </a>
              <a
                href="#"
                style={{ fontFamily: "poppins" }}
                className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-[1rem] font-medium"
              >
                Data
              </a>
              <a
                href="#"
                style={{ fontFamily: "poppins" }}
                className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-[1rem] font-medium"
              >
                FAQ
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a
                href="#"
                className="text-black border-2 border-gray-800 hover:bg-white hover:text-black transition-all px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="bg-red-500 text-white hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium ml-4"
              >
                Emergency
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
