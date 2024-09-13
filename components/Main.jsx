import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import ChatApp from "../public/assets/Projects/ChatApp/ChatAppChat.png";
import Image from "next/image";
import Profile from "../public/assets/profile.jpeg";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="items-center flex justify-center">
            <Image
              className="border border-black rounded-full bg-white hover:scale-105 ease-in duration-300"
              src={Profile}
              height={200}
              width={200}
            />
          </div>
          <h1 className="py-w text-gray-700">
            Hi, I&apos;m
            <span className="text-[#5651e5]"> Dheeraj Kumar Ravi Gowda</span>
          </h1>
          <h1 className="py-w text-gray-700 ">A Front-End Developer</h1>
          <p className="text-bold text-lg py-4 text-gray-600 max-w-[70%] m-auto">
            As a front-end developer, I specialize in creating exceptional
            digital experiences for both web and mobile platforms.My expertise
            lies in building responsive web applications with React.js and
            mobile apps with React Native. I&apos;m also expanding my knowledge
            of backend technologies, specifically learning Node.js to enhance my
            full-stack development skills
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/dheeraj164/" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 hover:bg-blue-400 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/Dheeraj164" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 hover:bg-blue-400 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 hover:bg-blue-400 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 hover:bg-blue-400 ease-in duration-300">
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
