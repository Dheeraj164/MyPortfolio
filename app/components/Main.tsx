import React from "react";

import Image from "next/image";
import Profile from "@/public/assets//profile.jpeg";
import SocialMedia from "./SocialMedia";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center pt-14">
      <div className="max-w-310 w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="items-center flex justify-center">
            <Image
              className="border border-black rounded-full bg-white hover:scale-105 ease-in duration-300"
              src={Profile}
              height={200}
              width={200}
              alt="profile"
            />
          </div>
          <h1 className="py-w text-6xl font-bold text-gray-700">
            Hi, I&apos;m
            <span className="text-[#5651e5]"> Dheeraj Kumar Ravi Gowda</span>
          </h1>
          <h1 className="py-w text-6xl font-bold text-gray-700 ">
            I build fast, scalable web & mobile apps
          </h1>
          <p className="text-bold text-lg py-3 text-gray-600 max-w-[70%] m-auto">
            Full-Stack Engineer building scalable SaaS on the cloud. I architect
            serverless applications and subscription platforms using Next.js,
            TypeScript, and AWS from Lambda to DynamoDB to CloudFront.
            US-educated. India-based. Remote-ready.
          </p>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Main;
