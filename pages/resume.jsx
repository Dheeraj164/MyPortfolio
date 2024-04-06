import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Dheeraj Kumar Ravi Gowda | Resume</title>
        <meta
          name="description"
          content="As a front-end web developer, I specialize in crafting outstanding digital experiences. My current focus revolves around developing responsive front-end web applications while simultaneously expanding my knowledge of back-end technologies."
        />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Dheeraj Kumar Ravi Gowda</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/dheeraj164/"
              target="_blank"
              rel="noreferrer">
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Dheeraj164"
              target="_blank"
              rel="noreferrer">
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
          </div>
        </div>
        <p>
          As a front-end web developer, I specialize in crafting outstanding
          digital experiences. My current focus revolves around developing
          responsive front-end web applications while simultaneously expanding
          my knowledge of back-end technologies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> MangoDB
            <span className="px-2">|</span> Auth0
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              University of Central Oklahoma
            </span>
            <span className="px-2">| Edmond, OK</span>
          </p>
          <p className="py-1 italic">Teaching Assistant (2023 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Assisted Professor Hong Sung in Front End Web Development course,
              grading assignments and assisting in exam invigilation.
            </li>
            <li>
              Demonstrated exceptional organizational skills, effectively
              managing grading deadlines and providing timely feedback to
              students.
            </li>
            <li>
              Received positive feedback from both students and the professor
              for dedication and efficiency in supporting the learning process.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              University of Central Oklahoma
            </span>
            <span className="px-2">| Edmond, OK</span>
          </p>
          <p className="py-1 italic">Student Tutor (2023)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Served as a Student Tutor, providing comprehensive assistance to
              peers in various subjects including Database Applications,
              Algorithm Design and Analysis, Front-end Web Development, Cloud
              Web Apps, and C++.
            </li>
            <li>
              Demonstrated exceptional communication skills and subject matter
              expertise, resulting in improved academic performance and
              confidence among students.
            </li>
            <li>
              Received consistent positive feedback from students and faculty
              for effectiveness in explaining complex concepts and facilitating
              learning.
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-center underline text-[18px] py-4">
            Certifications
          </h5>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              President’s Honor Roll - University of Central Oklahoma, Spring
              2023 and Fall 2023.
            </li>
            <li>
              Cloud Web Applications Development, Issued by the University of
              Central Oklahoma
            </li>
            <li>Technotsav -2022 final year project exhibition</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
