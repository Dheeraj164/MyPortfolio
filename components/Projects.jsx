import Image from "next/image";
import React from "react";
import LSTM from "../public/assets/Projects/LSTM Stock/DF_and_MA100.png";
import Photomemo from "../public/assets/Projects/Photomemo.png";
import Photomemoflutter from "../public/assets/Projects/Photomemoflutter.png";
import WhereisFirebase from "../public/assets/Projects/Where is firebase/whereisfirebase1.png";
import ChatApp from "../public/assets/Projects/ChatApp/ChatAppChat.png";
import ResumeBuilder from "../public/assets/Projects/Resume Builder/home_page.png";
import smartChatBot from "../public/assets/Projects/Smart Chat Bot/smartChatBot.jpg";
import weatherapp from "../public/assets/Projects/weatherapp.png";
import MealsApp from "../public/assets/React native/MealsApp.png";
import Guessgame from "../public/assets/React native/Guessgame.png";
import ExpensesTracker from "../public/assets/React native/ExpensesTracker.png";
import whereisflutter from "../public/assets/Projects/whereisflutter.png";
import Student_Enrollment_System from "../public/assets/Projects/Student_Enrollment_System.png";

import ProjectTile from "./ProjectTile";

const Projects = () => {
  return (
    <div id="project" className="w-full items-center justify-center">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8 w-auto h-auto">
          <ProjectTile
            title="Guess Game APP"
            bacgroundImage={Guessgame}
            Skills="React Native, Native Wind, Single Screen Application, MVC Architecture, "
            projectUrl="/chatApp"
          />
          {/* <ProjectTile
            title="Memory Collector App"
            bacgroundImage={ChatApp}
            Skills="React Native, Native Wind, Expo Navigation, Nested Navigator, MVC Architecture"
            projectUrl="/chatApp"
          /> */}
          <ProjectTile
            title="Expenses Tracker App"
            bacgroundImage={ExpensesTracker}
            Skills="React Native, Native Wind, Expo Navigation, Nested Navigator, MVC Architecture"
            projectUrl="/chatApp"
          />
          <ProjectTile
            title="Meals App"
            bacgroundImage={MealsApp}
            Skills="React Native, Native Wind, Expo Navigation, Nested Navigator, MVC Architecture"
            projectUrl="/chatApp"
          />

          <ProjectTile
            title="Chat APP"
            bacgroundImage={ChatApp}
            Skills="Flutter, Dart, Google Firebase Auth and Firestore"
            projectUrl="/chatApp"
          />
          <ProjectTile
            title="Stock Prediction"
            bacgroundImage={LSTM}
            Skills="ReactJS, JavaScript, Python Flask and LSTM model"
            projectUrl="/stock"
          />
          <ProjectTile
            title="Weather APP"
            bacgroundImage={weatherapp}
            Skills="NextJS, JavaScript and openweathermap API"
            projectUrl="/weatherapp"
          />
          <ProjectTile
            title="Smart Chat Bot"
            bacgroundImage={smartChatBot}
            Skills="NextJS, JavaScript, NodeJS, Mangodb and OpenAI apikey"
            projectUrl="/smartChatBot"
          />
          <ProjectTile
            title="Student Enrollment System"
            bacgroundImage={Student_Enrollment_System}
            Skills="PLSQL, Oracle DB, PHP, SQL, HTML, CSS, Bootstrap"
            projectUrl="/studentenrollmentsystem"
          />
          <ProjectTile
            title="Where is Flutter Game"
            bacgroundImage={whereisflutter}
            Skills="Flutter, Android Studio"
            projectUrl="/flutterCard"
          />
          <ProjectTile
            title="Firebase Game"
            bacgroundImage={WhereisFirebase}
            Skills="Vanilla JavaScript and Google Firebase"
            projectUrl="/firebaseCard"
          />
          <ProjectTile
            title="PhotoMemo App"
            bacgroundImage={Photomemo}
            Skills="Vanilla JavaScript and Google Firebase"
            projectUrl="/photoMemo"
          />
          <ProjectTile
            title="PhotoMemo Flutter App"
            bacgroundImage={Photomemoflutter}
            Skills="Flutter, Android Studio and Google Firebase"
            projectUrl="/photoMemoFlutter"
          />

          <ProjectTile
            title="Resume Builder"
            bacgroundImage={ResumeBuilder}
            Skills="ReactJS, JavaScript and Google Firebase"
            projectUrl="/customResume"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
