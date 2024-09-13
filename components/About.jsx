import React from "react";
import Image from "next/image";

import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          <p className="py-2 text-gray-600 text-lg ">
            Hello, I am Dheeraj Kumar Ravi Gowda, a passionate Front-End
            Developer with a Master of Science in Computer Science from the
            University of Central Oklahoma. Specializing in React.js for web
            development and React Native for mobile apps, I focus on crafting
            innovative solutions to user interface challenges. With proficiency
            in HTML, CSS, JavaScript, TypeScript and a growing knowledge of
            backend development with Node.js, I strive to create captivating
            digital experiences that seamlessly merge aesthetics with
            functionality.
          </p>
          <p className="py-2 text-gray-600 text-lg ">
            Beyond academia, I have undertaken several development projects,
            including an Expense Tracker App and a Meal App, both built with
            React Native and TypeScript. These apps feature expense management,
            meal browsing, and favorites management. I also created a Guess Game
            app where the computer guesses the user’s number based on hints.
            These projects highlight my skills in React Native, TypeScript, Expo
            Router, NativeWind, and building reusable components with an MVC
            architecture. With certifications in Cloud Web Applications
            Development, I am eager to bring my expertise to a dynamic team
            environment
          </p>
          <p className="py-2 text-gray-600 text-lg ">
            In addition to my technical skills, I am currently working on
            projects leveraging Google Firebase, Android Studio, and React
            Native, demonstrating my adaptability and eagerness to embrace
            emerging technologies. With a portfolio showcasing a diverse range
            of projects—including those built with React Native, TypeScript, and
            Firebase—I am ready to contribute meaningfully to the next frontier
            of digital innovation, driven by a relentless pursuit of growth and
            excellence.
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
