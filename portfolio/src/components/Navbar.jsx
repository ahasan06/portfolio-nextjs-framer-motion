'use client';

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const navLink = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
];

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  // Framer Motion Variants
  const menuVariants = {
    open: {
     x: 0,
      transition: { stiffness: 40, damping: 20 },
    },
    closed: {
      x: "-100%",
      transition: { stiffness: 40, damping: 20},
    },
  };

  return (
    <div className="text-white/70 relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center mx-auto px-4 py-4 max-w-[400px]">
        <ul className="flex flex-row items-center p-4 space-x-4">
          {navLink.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <p>{link.title}</p>
              </Link>
            </li>
          ))}

          <li>
            <a href="#contact" className="group">
              <h1 className="text-lg font-bold text-white/70 cursor-pointer">Contact me</h1>
              <div className="relative">
                <div className="absolute bg-orange-400 w-2/3 h-1 rounded-full transition-all duration-300 ease-out group-hover:w-full"></div>
                <div className="absolute mt-1 bg-orange-500 w-2/4 h-1 rounded-full transition-all duration-300 ease-out group-hover:w-full"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        onClick={toggleNav}
        className="cursor-pointer md:hidden absolute top-5 right-5 z-50"
      >
        {nav ? <AiOutlineClose size={30} /> : <HiMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 left-0 w-[100%] h-full bg-gray-800 p-6 z-40 md:hidden"
      >
        <ul className="flex flex-col items-center text-4xl pt-20 gap-10">
          {
            navLink.map((link,index)=>(
              <li key={index}>
                <Link href={link.path} onClick={closeNav}>
                <p className=" text-white/70 hover:text-white">{link.title}</p>
                </Link>
              </li>
            ))
          }
         <li>
            <a href="#contact" className="group">
              <h1 className="font-bold text-white/70 cursor-pointer">Contact me</h1>
              <div className="relative">
                <div className="absolute bg-orange-400 w-2/3 h-1 rounded-full transition-all duration-300 ease-out group-hover:w-full"></div>
                <div className="absolute mt-1 bg-orange-500 w-2/4 h-1 rounded-full transition-all duration-300 ease-out group-hover:w-full"></div>
              </div>
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Navbar;
