import React from "react";
import weather from "../public/assets/Projects/weatherapp.png";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const weatherapp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={weather}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">Weather APP </h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              {" "}
              The Weather App built with Next.js, Tailwind CSS, and the
              openweathermap API combines the power of modern web development
              technologies to deliver a sleek and efficient solution for
              checking weather conditions.
            </p>
            <p className="py-2">
              Next.js provides server-side rendering capabilities, enabling
              faster loading times and improved SEO performance. Tailwind CSS
              offers a utility-first approach to styling, allowing for rapid
              prototyping and easy customization of the app's visual appearance.
            </p>
            <p className="py-2">
              By integrating the openweathermap API, the Weather App fetches
              real-time weather data for various locations worldwide, providing
              users with accurate and up-to-date information on temperature,
              humidity, wind speed, and more.
            </p>

            <a
              href="https://github.com/Dheeraj164/WeatherReport"
              target="_blank">
              <button className="px-8 py-4 mt-4 mr-8">code</button>
            </a>
            {/* <button className="px-8 py-4 mt-4">demo</button> */}
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
                <RiRadioButtonFill className="mr-3" /> AXIOS
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Tailwind CSS
              </p>
              <p className="text-gray-600 text-lg py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> openweathermap API
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

export default weatherapp;
