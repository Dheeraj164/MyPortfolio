import React from "react";
import MealsApp from "../public/assets/React native/MealsApp.png";

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
          src={MealsApp}
          alt="/"
        />

        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">Meals App</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className=" mt-2">
              I developed a user-friendly meal app designed to help users
              explore food categories, view detailed recipes, and manage their
              favorite meals. The app is built with a focus on seamless
              navigation, performance, and an intuitive user experience. Key
              Features: Main Screen: Displays various food categories like
              Breakfast, Lunch, Dinner, and more, making it easy for users to
              explore different types of meals. Category Screen: Shows a list of
              meals within each category, allowing users to browse and select
              their desired dish. Meal Details Page: Provides detailed
              information about each meal, including ingredients, cooking steps,
              preparation time, affordability, and complexity. Users can also
              mark meals as favorites. Favorites Management: Includes a
              dedicated Favorites screen accessible via a drawer navigation,
              where users can view and manage their favorite meals.
            </p>
            <p className="mt-2">
              Technical Stack: React Native & TypeScript: Ensured cross-platform
              compatibility and type safety. NativeWind CSS: Applied for
              responsive and clean UI design. MVC Architecture: Adopted to
              maintain a scalable and organized codebase. Custom Reusable
              Components: Developed for consistency across the app. Expo
              Navigation: Utilized Stack and Drawer Navigation, including nested
              navigation, to create a smooth user experience. React Context:
              Managed state across the app, particularly for handling favorites.
            </p>
            <p className="mt-2">
              Outcome: The app provides users with an efficient way to discover
              recipes, view detailed instructions, and manage their favorite
              meals in one place. By leveraging modern technologies, the app is
              both high-performing and easy to maintain
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
