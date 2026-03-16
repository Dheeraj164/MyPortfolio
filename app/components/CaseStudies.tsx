import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import ExpensesTracker from "@/public/assets/Projects/ExpenseTracker/expense dashboard.png";
import SecondScreen from "@/public/assets/secondscreen.png";

interface CaseStudy {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Second Screen App",
    description:
      "A React Native mobile application that helps users manage daily expenses, track spending, and maintain financial records with an intuitive UI.",
    image: SecondScreen,
    link: "/secondscreen",
  },
  {
    title: "Expense Tracker App",
    description:
      "A React Native mobile application that helps users manage daily expenses, track spending, and maintain financial records with an intuitive UI.",
    image: ExpensesTracker,
    link: "/awsexpense",
  },

  // {
  //   title: "Meals App",
  //   description:
  //     "A mobile app that allows users to browse meal categories, view recipes, and manage favorite meals using React Native and nested navigation.",
  //   image: MealsApp,
  //   link: "/mealsapp",
  // },
  // {
  //   title: "Weather App",
  //   description:
  //     "A web application built with Next.js that displays real-time weather information using the OpenWeatherMap API.",
  //   image: weather,
  //   link: "/weatherapp",
  // },
  // {
  //   title: "Stock Prediction (LSTM)",
  //   description:
  //     "A machine learning web application that predicts stock prices using an LSTM model with a Python Flask backend and React frontend.",
  //   image: LSTM,
  //   link: "/stockprediction",
  // },
];

export default function CaseStudies() {
  return (
    <div id="casestudies" className="w-full pt-14">
      <div className="max-w-310 mx-auto my-20 flex flex-col justify-center h-full px-4">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Case Studies
        </p>

        <h2 className="py-4">Case studies of projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {caseStudies.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative w-full h-55">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <Link
                  href={project.link}
                  className="text-[#5651e5] font-semibold hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
