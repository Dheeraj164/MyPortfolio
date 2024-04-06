import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import Photomemo from "../public/assets/Projects/Photomemo.png";

const photoMemo = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Photomemo}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">PhotoMemo APP </h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              {" "}
              The PhotoMemo app is a simple yet powerful tool for capturing
              memories and sharing them securely with friends and family. Built
              using vanilla JavaScript, HTML, CSS, and enhanced with Bootstrap
              for responsive design, this app leverages Firebase for
              authentication, data storage, and image hosting.
            </p>
            <p className="py-2">
              Firebase Authentication ensures that only authorized users can
              access the app, providing a secure environment for sharing
              personal memories. Users can sign up, log in, and securely
              authenticate their identities.
            </p>
            <p className="py-2">
              Firebase Firestore serves as the database for storing crucial
              information such as the title of the photo, its description, and
              details about who the photo is shared with. This real-time NoSQL
              database ensures fast and efficient storage and retrieval of data,
              allowing users to seamlessly access their memories from anywhere.
            </p>

            <p className="py-2">
              Additionally, Firebase Storage handles the storage of the actual
              photo files. By securely storing images in the cloud, the app
              ensures that users can reliably access their photos anytime,
              anywhere, without worrying about storage limitations on their
              devices.
            </p>
            <p className="py-2">
              Overall, the PhotoMemo app offers a seamless and secure solution
              for capturing, storing, and sharing cherished memories, leveraging
              the power of Firebase and the simplicity of vanilla JavaScript,
              HTML, and CSS.
            </p>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center text-2xl font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 lg:grid-cols-1">
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Vanilla Js
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> HTML
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> CSS
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Bootstrap
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> google firebase
              </p>
              <p className="text-gray-600 text-lg py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> firebase Auth
              </p>
              <p className="text-gray-600 text-lg py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> firebase Firestore
              </p>
              <p className="text-gray-600 text-lg py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> firebase Storage
              </p>
            </div>
          </div>
        </div>
        <Link href="/#project">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default photoMemo;
