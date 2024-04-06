import React from "react";
import Student_Enrollment_System from "../public/assets/Projects/Student_Enrollment_System.png";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
const studentenrollmentsystem = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Student_Enrollment_System}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">Student Enrollment System </h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              {" "}
              This project was designed to facilitate student enrollment in
              university courses, providing a user-friendly platform for viewing
              personal information and academic status. Students can
              conveniently access their current courses, review completed ones,
              and observe individual grades for each subject. The web page
              serves not only as a portal for students but also accommodates
              administrative functionalities.
            </p>
            <p className="py-2">
              Administrators possess the capability to manage student data
              comprehensively. This includes adding new students, updating
              existing student information, and deleting records when necessary.
              Additionally, administrators can actively participate in
              maintaining accurate academic records by modifying student grades
              associated with the subjects they have undertaken. The user
              interface is tailored to enhance the efficiency of administrative
              tasks, ensuring a seamless experience for managing student
              information and academic records.
            </p>
            <p className="py-2">
              The system's architecture is structured to prioritize security and
              data integrity, safeguarding the confidentiality of personal and
              academic information. A responsive design ensures accessibility
              across various devices, contributing to a seamless user experience
              for both students and administrators. Through this unified
              platform, the aim is to streamline the administrative processes
              related to student management and academic record-keeping,
              ultimately fostering an efficient and organized university
              environment.
            </p>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center text-2xl font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 lg:grid-cols-1">
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> PHP
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
                <RiRadioButtonFill className="mr-3" /> Oracle Database
              </p>
              <p className="text-gray-600 text-lg py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Database Management
                System
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

export default studentenrollmentsystem;
