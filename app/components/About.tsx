import React from "react";
import Image from "next/image";

import AboutImg from "@/public/assets/about.jpg";
import Link from "next/link";

const About = () => {
  return (
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
