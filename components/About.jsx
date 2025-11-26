import React from "react";
import Image from "next/image";

import AboutImg from "../public/assets/about.jpg";
import Link from "next/link";

const About = () => {
  return (
    // <div id="about" className="w-full p-2 flex items-center pt-14">
    //   <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8  py-16">
    //     <div className="col-span-2 ">
    //       <p className="uppercase text-xl tracking-widest text-[#5651e5]">
    //         About
    //       </p>
    //       <h2 className="py-4 ">Who I Am</h2>
    //       <p className="py-2 text-gray-600 text-lg ">
    //         Hello, I am Dheeraj Kumar Ravi Gowda, a passionate Front-End
    //         Developer with a Master of Science in Computer Science from the
    //         University of Central Oklahoma. Specializing in React.js for web
    //         development and React Native for mobile apps, I focus on crafting
    //         innovative solutions to user interface challenges. With proficiency
    //         in HTML, CSS, JavaScript, TypeScript and a growing knowledge of
    //         backend development with Node.js, I strive to create captivating
    //         digital experiences that seamlessly merge aesthetics with
    //         functionality.
    //       </p>
    //       <p className="py-2 text-gray-600 text-lg ">
    //         Beyond academia, I have undertaken several development projects,
    //         including an Expense Tracker App and a Meal App, both built with
    //         React Native and TypeScript. These apps feature expense management,
    //         meal browsing, and favorites management. I also created a Guess Game
    //         app where the computer guesses the user’s number based on hints.
    //         These projects highlight my skills in React Native, TypeScript, Expo
    //         Router, NativeWind, and building reusable components with an MVC
    //         architecture. With certifications in Cloud Web Applications
    //         Development, I am eager to bring my expertise to a dynamic team
    //         environment
    //       </p>
    //       <p className="py-2 text-gray-600 text-lg ">
    //         In addition to my technical skills, I am currently working on
    //         projects leveraging Google Firebase, Android Studio, and React
    //         Native, demonstrating my adaptability and eagerness to embrace
    //         emerging technologies. With a portfolio showcasing a diverse range
    //         of projects—including those built with React Native, TypeScript, and
    //         Firebase—I am ready to contribute meaningfully to the next frontier
    //         of digital innovation, driven by a relentless pursuit of growth and
    //         excellence.
    //       </p>
    //       <p className="py-2 text-gray-600 text-lg ">
    //         Check out some of my latest project
    //       </p>
    //     </div>
    //     <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
    //       <Image src={AboutImg} className="rounded-xl" alt="/" />
    //     </div>
    //   </div>
    // </div>

    <section id="about" className="px-6 md:px-20 py-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Heading */}
        <header className="lg:col-span-12">
          <p className="text-sm font-medium text-indigo-500 tracking-wide">
            ABOUT
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Who I Am</h2>
        </header>

        {/* Text column */}
        <div className="lg:col-span-7">
          <p className="mb-4 leading-relaxed ">
            Hi — I’m <strong>Dheeraj Kumar Ravi Gowda</strong>. I’m a Front-End
            Developer with a Master of Science in Computer Science. I build
            clean, accessible, and responsive web and mobile experiences using
            React.js and React Native. I’m also growing my backend skills with
            Node.js so I can ship full-stack solutions end to end.
          </p>

          <p className="mb-4 leading-relaxed ">
            I’ve built production apps — an Expense Tracker, a Meal app and
            multiple mobile projects — focused on performance, reusable
            components, and great UX. My toolset includes TypeScript, Expo,
            NativeWind/Tailwind, Firebase, and cloud services like AWS and
            Supabase.
          </p>

          <ul className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li className="flex items-start">
              <span className="mr-3 text-indigo-500 font-semibold">•</span>
              Front-end: React, Next.js, TypeScript, Tailwind
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-indigo-500 font-semibold">•</span>
              Mobile: React Native, Expo, Android / iOS
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-indigo-500 font-semibold">•</span>
              Backend & DB: Node.js, Firebase, PostgreSQL, MongoDB
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-indigo-500 font-semibold">•</span>
              Tools: GitHub, VS Code, Figma (design hand-off)
            </li>
          </ul>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/resume.pdf"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
              Download Resume
            </Link>

            <Link
              href="#project"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              View Projects
            </Link>
          </div>
        </div>

        {/* Image column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden ring-1 ring-gray-100 dark:ring-gray-700">
            <Image src={AboutImg} className="rounded-xl" alt="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
