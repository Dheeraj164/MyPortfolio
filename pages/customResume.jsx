import React from "react";
import ResumeBuilder from "../public/assets/Projects/Resume Builder/home_page.png";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const customResume = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ResumeBuilder}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">Custom Resume Builder</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              {" "}
              The Simple Resume Maker is a web application built using React.js
              and Firebase Authentication. It offers users a straightforward way
              to create personalized resumes by leveraging pre-designed
              templates. Firebase Authentication ensures secure access to the
              platform, allowing users to sign in securely with their
              credentials.
            </p>
            <p className="py-2">
              Within the application, users can input their personal and
              professional information, such as contact details, work
              experience, education background, skills, and more, into the
              designated fields of the chosen template. The React.js framework
              facilitates a smooth and intuitive user experience, enabling
              seamless navigation and real-time editing capabilities.
            </p>
            <p className="py-2">
              Once users have filled in their information, they can preview
              their resume to ensure it meets their requirements. Additionally,
              they have the option to download the completed resume in various
              formats, for easy sharing or printing.
            </p>
            <p className="py-2">
              The integration of Firebase Authentication ensures that users
              personal data and resumes are kept confidential and secure. With
              its user-friendly interface and efficient functionality, the
              Simple Resume Maker provides a convenient solution for individuals
              looking to create professional resumes quickly and effortlessly.
            </p>
          </div>
          <a href="https://github.com/Dheeraj164/customResume" target="_blank">
            <button className="px-8 py-4 mt-4 mr-8">code</button>
          </a>
        </div>
        <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center text-2xl font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> React Js
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> HTML
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> CSS
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Bootstrap
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> google firebase
              </p>
              <p className="text-gray-600 text-lg py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> firebase Auth
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link href="/#projects">
        <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  );
};

export default customResume;
