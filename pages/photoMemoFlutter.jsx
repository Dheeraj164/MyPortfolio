import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import Photomemoflutter from "../public/assets/Projects/Photomemoflutter.png";

const photoMemoFlutter = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Photomemoflutter}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">Photo Memo App Flutter</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              {" "}
              The Flutter-based PhotoMemo app revolutionizes the way users
              capture and share memories by combining the power of Google's
              cross-platform UI toolkit with Firebase's robust backend services.
              With Flutter's extensive widget library, the app offers a visually
              stunning and highly responsive user interface, ensuring a seamless
              experience for users across both Android and iOS devices. From
              navigating through the app to uploading photos and adding
              descriptions, users can effortlessly interact with the PhotoMemo
              app, making it an intuitive and engaging platform for preserving
              cherished memories.
            </p>
            <p className="py-2">
              Firebase Authentication provides a secure environment for users to
              access the PhotoMemo app, ensuring that only authorized
              individuals can view and share personal memories. Through Firebase
              Authentication, users can sign up, log in, and securely
              authenticate their identities across various platforms,
              safeguarding their privacy and data. This authentication layer
              adds an extra level of security, enhancing user confidence in
              sharing their memories within the app.
            </p>
            <p className="py-2">
              Furthermore, Firebase Firestore serves as the backend database for
              storing crucial information such as photo titles, descriptions,
              and sharing details. Leveraging Firebase's real-time NoSQL
              database capabilities, the app delivers fast and efficient data
              storage and retrieval, enabling users to access their memories
              instantly. Combined with Firebase Storage for storing photo files
              in the cloud, the PhotoMemo app ensures reliable access to photos
              anytime, anywhere, without the limitations of device storage.
              Overall, the Flutter-based PhotoMemo app provides a seamless and
              consistent user experience, offering a secure and feature-rich
              platform for capturing, storing, and sharing cherished memories.
            </p>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center text-2xl font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 lg:grid-cols-1">
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Flutter
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Android Studio
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

export default photoMemoFlutter;
