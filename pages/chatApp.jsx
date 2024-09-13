import React from "react";
import ChatApp from "../public/assets/Projects/ChatApp/ChatAppChat.png";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const chatApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ChatApp}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">Chat App</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              <b>Built a Real-Time Chat App with Flutter and Firebase</b> {"  "}
              I created a mobile chat application using Flutter for a smooth and
              attractive user interface. To ensure secure login and user
              management, I implemented Firebase Authentication. Additionally, I
              integrated Google Auth Provider for a familiar and convenient
              login experience.
            </p>
            <p className="py-2">
              <b>Efficient Messaging and Clear History</b>
              {"  "}
              For real-time chat functionality, I utilized Firebase Firestore to
              efficiently store and retrieve messages. The app is designed to
              display messages with timestamps and usernames, providing a clear
              conversation history.
            </p>
            <p className="py-2">
              <b>Demonstrated Skills</b>
              {"  "}
              This project showcases my expertise in mobile app development
              using Flutter, Firebase integration for authentication and
              database management, and designing real-time chat applications.
            </p>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center text-2xl font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Flutter
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Firebase Auth
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Cloud Firestore
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" />
                Google Auth Provider
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link href="/#project">
        <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  );
};

export default chatApp;
