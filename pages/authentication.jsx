import React from "react";
import ExpensesTracker from "../public/assets/React native/ExpensesTracker.png";

import Image from "next/image";
import Link from "next/link";
import { RiArrowDropLeftLine, RiRadioButtonFill } from "react-icons/ri";

const chatApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ExpensesTracker}
          alt="/"
        />

        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">Authentication App</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              I developed a mobile application using React Native, Expo Router,
              and Firebase Authentication to provide a secure and seamless login
              experience. The app is built with two navigation stacks: the Auth
              Stack for the login page, which only loads when no user is
              authenticated, and the Root Stack for authenticated users to
              access the home page. By integrating Firebase Auth and using Async
              Storage, the app securely stores the user token to keep the user
              logged in even after closing and reopening the app. This ensures a
              smooth user experience without requiring frequent logins.
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
                <RiRadioButtonFill className="mr-3" /> Expo Router
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Nested Navigator
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" />
                MVC Architecture
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <div>
                  <RiRadioButtonFill className="mr-3" />
                </div>
                React Native AsyncStorage
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <div>
                  <RiRadioButtonFill className="mr-3" />
                </div>
                React Native Firebase
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

export default chatApp;
