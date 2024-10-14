import React from "react";
import Guessgame from "../public/assets/React native/Guessgame.png";

import Image from "next/image";
import Link from "next/link";
import { RiArrowDropLeftLine, RiRadioButtonFill } from "react-icons/ri";

const guessGameApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Guessgame}
          alt="/"
        />

        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">Guess Game App</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              I developed an engaging number guessing game using React Native,
              Expo, and TypeScript. In this game, the user thinks of a number,
              and the computer tries to guess it based on hints indicating
              whether the guess is higher or lower. The game adjusts its guesses
              accordingly until it finds the correct number. Key Features:
              Technologies: Built with React Native, Expo, and TypeScript for a
              responsive cross-platform experience. Architecture: Followed the
              Model-View-Controller (MVC) pattern for better code organization
              and maintainability. Single-Page Application: Designed as an SPA
              for smooth user interaction without page reloads. Reusable
              Components: Created flexible Button and Card components for
              consistent UI design across the app. User-Centric Design: Focused
              on delivering an intuitive interface and smooth gameplay
              experience. This project showcases my ability to build
              user-friendly applications with a strong emphasis on design
              patterns, code reusability, and modern front-end technologies.
            </p>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center text-2xl font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> React Native
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Native Wind
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <div>
                  <RiRadioButtonFill className="mr-3" />
                </div>
                Single Page Application
              </p>

              <p className="text-gray-600 text-xl py-2 flex items-center">
                <div>
                  <RiRadioButtonFill className="mr-3" />
                </div>
                MVC Architecture
              </p>
            </div>
          </div>
        </div>
        <Link href="/#project">
          <div className="flex">
            <RiArrowDropLeftLine className="mt-1.5 underline cursor-pointer" />
            <p className="underline cursor-pointer">Back</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default guessGameApp;
