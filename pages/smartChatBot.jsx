import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import smartchatbot from "../public/assets/Projects/Smart Chat Bot/smartChatBot.jpg";

const smartChatBot = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={smartchatbot}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">Smart Chat Bot</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              {" "}
              The Smart ChatBot is a sophisticated conversational AI system
              developed using the OpenAI API, Next.js, and Node.js. Leveraging
              the power of OpenAI cutting-edge natural language processing
              capabilities, the ChatBot engages users in dynamic and
              contextually relevant conversations, offering personalized
              assistance and information retrieval.
            </p>
            <p className="py-2">
              Authentication is seamlessly integrated into the system through
              Auth0, ensuring secure access to the ChatBot features and
              maintaining user privacy. Additionally, MongoDB serves as the
              backend database, efficiently storing user data, conversation
              logs, and any other pertinent information for future reference and
              analysis.
            </p>
            <p className="py-2">
              The Next.js framework facilitates the creation of a responsive and
              interactive user interface, enabling users to interact with the
              ChatBot across various devices and platforms. Node.js powers the
              backend infrastructure, handling requests, processing data, and
              orchestrating the seamless communication between the various
              components of the system. With its intelligent capabilities,
              robust authentication mechanisms, and scalable architecture, the
              Smart ChatBot offers a versatile solution for businesses and
              organizations seeking to enhance customer support, automate tasks,
              and deliver personalized experiences in real-time
            </p>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center text-2xl font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> React
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Next JS
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> JavaScript
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> axios
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Tailwind CSS
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> OpenAI API
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

export default smartChatBot;
