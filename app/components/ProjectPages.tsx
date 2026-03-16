import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

interface ProjectPagesProps {
  backgroundImage: StaticImageData;
  title: string;
  projectDescription: { descriptionTitle: string; data: string[] }[];
  keyFeature: string[];
  techStack: string[];
  projectImages?: StaticImageData[];
}

export default function ProjectPages({
  backgroundImage,
  title,
  projectDescription,
  keyFeature,
  techStack,
  projectImages = [],
}: ProjectPagesProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full h-[40vh] relative">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-310 mx-auto px-6 py-12 grid md:grid-cols-5 gap-10">
        {/* Project Description */}
        <div className="md:col-span-4 space-y-6">
          {projectDescription.map((description, i) => (
            <div key={i}>
              <h2 className="text-2xl font-semibold mb-2">
                {description.descriptionTitle}
              </h2>
              {description.data.map((data, j) => (
                <p key={j} className="text-gray-700">
                  {data}
                </p>
              ))}
            </div>
          ))}

          {/* Project Image Gallery */}
          {projectImages.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Project Screenshots
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {projectImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-full h-62.5 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={img}
                      alt={`${title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              {keyFeature.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
              GitHub
            </a>

            <a
              href="#"
              className="px-6 py-3 border border-black rounded-lg hover:bg-gray-100">
              Live Demo
            </a>
          </div>
        </div>

        {/* Technologies Sidebar */}
        <div className="md:col-span-1 bg-white shadow-lg rounded-xl p-5 h-fit">
          <h3 className="text-xl font-semibold text-center mb-4">
            Technologies
          </h3>

          <div className="space-y-3">
            {techStack.map((tech, i) => (
              <p key={i} className="flex items-center text-gray-700">
                <RiRadioButtonFill className="mr-2" />
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-300 mx-auto px-6 pb-10">
        <Link href="/#projects">
          <p className="underline cursor-pointer text-gray-700">
            ← Back to Projects
          </p>
        </Link>
      </div>
    </div>
  );
}
