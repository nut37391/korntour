"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const Navbar = () => {
  const [isCLick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isCLick);
  };
  return (
    <>
      <nav className=" bg-navy-blue p-5">
        <div className="max-w-[1280px] mx-auto  ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  <Image
                    src="/images/icon12.png"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
              <h3 className=" text-white">Chiang Mai Friendly Tour</h3>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-white hover:bg-gold hover:text-navy-blue font-medium rounded-lg p-2 transition-all duration-300"
                >
                  HOME
                </Link>
                <Link
                  href="/services"
                  className="text-white hover:bg-gold hover:text-navy-blue font-medium rounded-lg p-2 transition-all duration-300"
                >
                  SERVICES
                </Link>
                <Link
                  href="/contact-us"
                  className="text-white hover:bg-gold hover:text-navy-blue font-medium rounded-lg p-2 transition-all duration-300"
                >
                  CONTACT
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2"
                onClick={toggleNavbar}
              >
                {isCLick ? (
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
                      strokewidth={2}
                      d="6 18L18 6M6 6112 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fi11="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isCLick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-white block hover:bg-gold hover:text-navy-blue font-medium rounded-lg p-2 transition-all duration-300"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-white block hover:bg-gold hover:text-navy-blue font-medium rounded-lg p-2 transition-all duration-300"
              >
                Tours
              </Link>
              <Link
                href="/contact-us"
                className="text-white block hover:bg-gold hover:text-navy-blue font-medium rounded-lg p-2 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
