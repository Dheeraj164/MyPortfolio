import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-w text-gray-700">
            Hi, I&apos;m
            <span className="text-[#5651e5]"> Dheeraj Kumar Ravi Gowda</span>
          </h1>
          <h1 className="py-w text-gray-700 ">A Front-End Web Developer</h1>
          <p className="text-bold text-lg py-4 text-gray-600 max-w-[70%] m-auto">
            As a front-end web developer, I specialize in crafting outstanding
            digital experiences. My current focus revolves around developing
            responsive front-end web applications while simultaneously expanding
            my knowledge of back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/dheeraj164/" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/Dheeraj164" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
