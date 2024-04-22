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
              🚀 Passionate Mobile App Developer: Hi there! I'm [Your Name], a
              mobile app developer with a passion for creating captivating user
              experiences. My expertise lies in leveraging Flutter for crafting
              sleek UI designs that elevate your app's appeal. With a keen eye
              for detail and a commitment to excellence, I specialize in
              bringing your vision to life with pixel-perfect precision.
            </p>
            <p className="py-2">
              🔐 Firebase Integration Specialist: Security and reliability are
              at the core of every app I build. Through seamless integration
              with Firebase, I ensure robust authentication solutions that keep
              user data safe while providing a seamless login experience.
              Whether it's implementing email/password authentication or
              enabling Google Authentication, I prioritize user security without
              compromising on usability.
            </p>
            <p className="py-2">
              💬 Real-Time Chat Solutions: Engage your users like never before
              with real-time chat functionality powered by Firebase Firestore. I
              leverage Firestore's capabilities to store and retrieve messages
              instantly, enabling dynamic conversations that keep users
              connected. With efficient timestamp management and user-centric
              design, I create chat experiences that captivate users and drive
              engagement.
            </p>
          </div>
          <Link
            href="https://github.com/Dheeraj164/ChatApp-using-Flutter"
            target="_blank">
            <button className="px-8 py-4 mt-4 mr-8">code</button>
          </Link>
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
