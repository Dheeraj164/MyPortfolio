"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Image from "next/image";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [selectedNav, setSelectedNav] = useState("/");
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const hanleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full bg-[#ecf0f3] h-20 shadow-xl z-100"
          : "fixed w-full bg-[#ecf0f3] h-20 z-100"
      }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/assets/logo2.jpeg" alt="/" width={65} height={50} />
        </Link>

        <div>
          <ul className="hidden lg:flex">
            <Link href="/">
              <li
                onClick={() => setSelectedNav("/")}
                className={`ml-10 text-md uppercase hover:border-b ${
                  selectedNav === "/" ? " border-b-2 border-black" : ""
                }`}>
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li
                onClick={() => setSelectedNav("/#about")}
                className={`ml-10 text-md uppercase hover:border-b ${
                  selectedNav === "/#about" ? " border-b-2 border-black" : ""
                }`}>
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li
                onClick={() => setSelectedNav("/#skills")}
                className={`ml-10 text-md uppercase hover:border-b ${
                  selectedNav === "/#skills" ? " border-b-2 border-black" : ""
                }`}>
                Skills
              </li>
            </Link>
            <Link href="/#experience">
              <li
                onClick={() => setSelectedNav("/#experience")}
                className={`ml-10 text-md uppercase hover:border-b ${
                  selectedNav === "/#experience"
                    ? " border-b-2 border-black"
                    : ""
                }`}>
                Experience
              </li>
            </Link>
            <Link href="/#casestudies">
              <li
                onClick={() => setSelectedNav("/#casestudies")}
                className={`ml-10 text-md uppercase hover:border-b ${
                  selectedNav === "/#casestudies"
                    ? " border-b-2 border-black"
                    : ""
                }`}>
                Case studies
              </li>
            </Link>
            <Link href="/#project">
              <li
                onClick={() => setSelectedNav("/#project")}
                className={`ml-10 text-md uppercase hover:border-b ${
                  selectedNav === "/#project" ? " border-b-2 border-black" : ""
                }`}>
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li
                onClick={() => setSelectedNav("/#contact")}
                className={`ml-10 text-md uppercase hover:border-b ${
                  selectedNav === "/#contact" ? " border-b-2 border-black" : ""
                }`}>
                Contact
              </li>
            </Link>
            {/* <Link href="/resume">
              <li className="ml-10 text-md uppercase hover:border-b">Resume</li>
            </Link> */}
          </ul>
          <div onClick={hanleNav} className="lg:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed -left-full top-0 w-[75%]p-10 ease-in duration-500"
          }>
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/assets/logo2.jpeg" alt="/" width="87" height="35" />
              <div
                onClick={hanleNav}
                className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer">
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                {" "}
                Let&apos;s Build SomeThing Legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#experience">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Experience
                </li>
              </Link>
              <Link href="/#casestudies">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Case Studies
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#project">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
            </ul>
            <div className="pt-40 text-lg">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s COnnect
              </p>
              <div className=" flex items-center justify-between my-4 w-full sm:w[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
