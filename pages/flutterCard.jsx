import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import whereisflutter from "../public/assets/Projects/whereisflutter.png";

const flutterCard = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={whereisflutter}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">Where is Flutter Card</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              {" "}
              The Flutter Game is a dynamic mobile application crafted with
              Flutter and developed within Android Studio, delivering an
              immersive gaming experience exclusively for Android users. Built
              with Flutter's cross-platform compatibility in mind, the game
              ensures seamless performance across various devices, extending its
              reach to a broader audience of mobile gamers. Featuring
              captivating gameplay mechanics and customizable options, users can
              dive into challenging levels, personalize their experience, and
              enjoy visually stunning graphics, all while benefiting from the
              robust development tools provided by Android Studio for
              streamlined development and debugging.
            </p>
            <p className="py-2">
              This synergy between Flutter and Android Studio underscores the
              game's polished and high-quality design, promising hours of
              entertainment for casual gamers and enthusiasts alike. With
              Flutter's flexible UI toolkit and Dart's efficient programming
              language at its core, the Flutter Game sets a new standard for
              mobile game development, offering an engaging and enjoyable
              experience that captivates players and keeps them coming back for
              more.
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
                <RiRadioButtonFill className="mr-3" /> Android Studio
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

export default flutterCard;
