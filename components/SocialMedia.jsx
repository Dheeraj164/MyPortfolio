import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
      <a href="https://www.linkedin.com/in/dheeraj164/" target="_blank">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 hover:bg-blue-400 ease-in duration-300">
          <FaLinkedinIn />
        </div>
      </a>
      {/* <a href="https://github.com/Dheeraj164" target="_blank">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 hover:bg-blue-400 ease-in duration-300">
          <FaGithub />
        </div>
      </a> */}
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
  );
}
