import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import WhereisFirebase from "../public/assets/Projects/Where is firebase/whereisfirebase1.png";

const firebaseCard = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={WhereisFirebase}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">Where is Firebase Card</h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              {" "}
              The Firebase Game is an exciting web application crafted with
              vanilla JavaScript, HTML, CSS, and Bootstrap, with Firebase
              integration for authentication and data management. Players engage
              in thrilling card games where they can bet coins while tracking
              their balance, winnings, and game progress. Firebase
              Authentication ensures secure access, allowing users to sign up,
              log in, and authenticate their identities, ensuring a safe gaming
              environment.
            </p>
            <p className="py-2">
              Firebase Firestore serves as the database, storing critical game
              data such as card locations, bet amounts, winnings, total balance,
              and game progress. Real-time updates provided by Firebase Realtime
              Database ensure that players experience seamless, dynamic
              gameplay, with changes to balances and wins reflected instantly.
              The intuitive user interface, designed with Bootstrap, offers easy
              navigation, allowing players to place bets, monitor their balance,
              and enjoy the game's excitement effortlessly.nce.
            </p>
            <p className="py-2">
              In essence, the Firebase Game delivers an immersive gaming
              experience, merging Firebase's robust features with the simplicity
              of front-end technologies. Players can enjoy card games securely
              while keeping track of their progress, creating an engaging and
              dynamic gaming atmosphere.
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

export default firebaseCard;
