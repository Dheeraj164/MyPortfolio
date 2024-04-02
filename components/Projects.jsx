import Image from "next/image";
import React from "react";
import LSTM from "../public/assets/Projects/LSTM Stock/DF_and_MA100.png";
import Photomemo from "../public/assets/Projects/Photomemo.png";
import WhereisFirebase from "../public/assets/Projects/Where is firebase/whereisfirebase1.png";
import ResumeBuilder from "../public/assets/Projects/Resume Builder/home_page.png";
import smartChatBot from "../public/assets/Projects/Smart Chat Bot/smartChatBot.jpg";

import ProjectTile from "./ProjectTile";

const Projects = () => {
  return (
    <div id="project" className="w-full items-center justify-center">
      <div className=" mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8 w-auto h-auto">
          <ProjectTile
            title="Stock Prediction"
            bacgroundImage={LSTM}
            Skills="React JavaScript, Python Flask and LSTM model"
            projectUrl="/stock"
          />
          <ProjectTile
            title="PhotoMemo App"
            bacgroundImage={Photomemo}
            Skills="Vanilla JavaScript and Google Firebase"
            projectUrl="/photoMemo"
          />
          <ProjectTile
            title="Firebase Game"
            bacgroundImage={WhereisFirebase}
            Skills="Vanilla JavaScript and Google Firebase"
            projectUrl="/firebaseCard"
          />
          <ProjectTile
            title="Resume Builder"
            bacgroundImage={ResumeBuilder}
            Skills="React JavaScript and Google Firebase"
            projectUrl="/customResume"
          />
          <ProjectTile
            title="Smart Chat Bot"
            bacgroundImage={smartChatBot}
            Skills="Next JavaScript, NodeJS, Mangodb and OpenAI apikey"
            projectUrl="/smartChatBot"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
