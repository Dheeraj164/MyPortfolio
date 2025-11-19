import React from "react";
import ExpenseTrackerImg from "../public/assets/Projects/ExpenseTracker/expense dashboard.png";

import Image from "next/image";
import Link from "next/link";
import { RiArrowDropLeftLine, RiRadioButtonFill } from "react-icons/ri";

const ExpenseTracker = () => {
  return (
    <div className="w-full">
      <div>
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={ExpenseTrackerImg}
            alt="/"
          />

          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
            <h2 className="py-2 text-white">Expense Tracker </h2>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <div className="text-lg">
              <p className=" mt-2">
                The Expense Tracker App is a full-stack finance management tool
                built using Next.js on the frontend and a fully serverless AWS
                backend. The goal of the project was to create a secure,
                scalable, and intuitive solution that allows users to easily
                record, manage, and visualize their daily expenses from any
                device. The interface is designed to be simple, fast, and
                responsive for a smooth user experience.
              </p>
              <p className="mt-2">
                Technical Architecture The backend is powered by a complete AWS
                serverless stack. Amazon Cognito handles user authentication and
                authorization, ensuring secure access. All CRUD operations are
                handled through stateless AWS Lambda functions, which are
                integrated with API Gateway for REST API exposure. The app is
                globally hosted via Amazon S3 and CloudFront, providing
                low-latency performance, high availability, and seamless
                scalability.
              </p>
              <p className="mt-2">
                Key Features & Impact Users can create, update, and delete
                expenses effortlessly, while the backend ensures efficient data
                processing and cost-effective serverless execution. The app
                focuses on privacy and security while maintaining high
                performance through AWS services. This project showcases
                expertise in full-stack development, serverless architecture,
                cloud infrastructure, and modern web technologies—demonstrating
                the ability to build real-world, production-ready applications.
              </p>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center text-2xl font-bold pb-2">
                Technologies
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-1">
                <p className="text-gray-600 text-xl py-2 flex items-center">
                  <RiRadioButtonFill className="mr-3" /> React
                </p>
                <p className="text-gray-600 text-xl py-2 flex items-center">
                  <RiRadioButtonFill className="mr-3" /> Next JS
                </p>
                <p className="text-gray-600 text-xl py-2 flex items-center">
                  <RiRadioButtonFill className="mr-3" /> Next JS Router
                </p>

                <p className="text-gray-600 text-xl py-2 flex items-center">
                  <RiRadioButtonFill className="mr-3" /> AWS
                </p>
                <p className="text-gray-600 text-xl py-2 flex items-center">
                  <RiRadioButtonFill className="mr-3" />
                  MVC Architecture
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <Link
                target="_blank"
                href="https://d3qub5kq6yrlga.cloudfront.net/">
                <div className="flex">
                  <p className="text-2xl text-blue-600 font-bold cursor-pointer">
                    Link to the project
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-full py-5 ">
              <Link target="_blank" href="https://youtu.be/CHaWlLaYqrI">
                <div className="flex">
                  <p className="text-2xl  text-blue-600 font-bold cursor-pointer">
                    Link to the Demo
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[25%]  justify-center items-center flex">
          <Link href="/#project">
            <div className="flex">
              <RiArrowDropLeftLine className="mt-1.5 underline cursor-pointer" />
              <p className="underline cursor-pointer">Back</p>
            </div>
          </Link>
          <></>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
