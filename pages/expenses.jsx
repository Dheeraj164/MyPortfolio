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
          <h2 className="py-2 text-white">Expenses Tracker App</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              I developed an intuitive Expense Tracker App that helps users
              manage and monitor their spending. The app is built using React
              Native and TypeScript, with a focus on providing a smooth user
              experience through efficient navigation and state management. Key
              Features: Main Page: Displays all recorded expenses along with the
              total amount spent, offering users a clear overview of their
              financial activities. Recent Expenses: A dedicated page that
              highlights expenses made in the last 7 days, allowing users to
              quickly track their most recent spending. Expense Management:
              Users can click on any expense to update or delete it.
              Additionally, they can easily add new expenses, making the app a
              comprehensive tool for financial tracking. Technical Stack: React
              Native & TypeScript: Ensured cross-platform functionality and
              robust type safety. Expo Navigation: Implemented for nested
              routing between Stack and Tab Navigation, providing a seamless
              navigation experience. React Context & React Reducer: Utilized for
              efficient state management, ensuring that the app's data flow is
              both maintainable and scalable. Outcome: The Expense Tracker App
              offers a user-friendly way to monitor spending, update records,
              and stay on top of personal finances. With a clean interface and
              reliable performance, the app serves as an essential tool for
              budget management.
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
