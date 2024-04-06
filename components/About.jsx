import React from "react";
import Image from "next/image";

import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          <p className="py-2 text-gray-600 text-lg ">
            Hello, I am Dheeraj Kumar Ravi Gowda, a passionate Front End
            Developer fueled by a Master of Science in Computer Science from the
            University of Central Oklahoma. With a focus on crafting innovative
            solutions to user interface challenges, I bring a blend of
            creativity and technical proficiency to every project. Proficient in
            HTML, CSS, and JavaScript, I strive to create captivating digital
            experiences that seamlessly merge aesthetics with functionality.
          </p>
          <p className="py-2 text-gray-600 text-lg ">
            Beyond academia, I have embarked on numerous development projects,
            ranging from stock prediction using LSTM models to crafting
            intuitive mobile applications with Flutter and React JS. With
            certifications in Cloud Web Applications Development and a track
            record of academic and professional achievements, I am excited to
            bring my expertise and enthusiasm to a dynamic team environment.
          </p>
          <p className="py-2 text-gray-600 text-lg ">
            In addition to my technical skills, I am currently working on
            projects leveraging Google Firebase, Android Studio, and Flutter,
            demonstrating my adaptability and eagerness to embrace emerging
            technologies. With a portfolio showcasing a diverse range of
            projects and a relentless drive for growth, I am ready to contribute
            meaningfully to the next frontier of digital innovation.
          </p>
          <p className="py-2 text-gray-600 text-lg ">
            Check out some of my latest project
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
