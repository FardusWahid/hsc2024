'use client'
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className=" w-full flex flex-wrap items-center justify-between px-3 py-1 fixed nav mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl md:text-4xl  font-extrabold tracking-wide leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black font-sans"
              href="/"
            >
              Apple<span className="tracking-normal text-[9px] italic">premium</span>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            
            <GiHamburgerMenu 
            color="black"
            size={26} />


            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:font-extrabold hover:text-purple-900 hover:text-shadow"
                  href="https://applecourses.netlify.app"
                >
                <span className=" ml-2 tracking-wider">Apple Shop</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:font-extrabold hover:text-blue-900 hover:text-shadow"
                  href="https://applecourses.netlify.app/freecourses"
                >
                  <span className="ml-2 tracking-wider">Free</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:font-extrabold hover:text-blue-900 hover:text-shadow"
                  href="https://www.facebook.com/groups/1451996508764221"
                >
                <span className="ml-2 tracking-wider">Support Group</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}