import React from "react";
import SkillsTile from "./SkillsTiles";
import Skilltitle from "./Skilltitle";
import SkillList from "./SkillList";

const Skills = () => {
  const skill = {
    "Web Development": [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "NodeJS",
      "React",
      "Next JS",
    ],
    "Mobile Development": [
      "React Native",
      "Expo",
      "Flutter",
      "Android",
      "Apple",
    ],
    "Cloud Platform": ["AWS", "GCP", "Firebase", "Supabase"],
    Database: ["MySQL", "MongoDB", "PostgreSQL"],
    "Other Tools": ["git", "GitHub", "VSCode", "Tailwind CSS"],
  };

  return (
    <div id="skills" className="w-full pt-14">
      <div className="max-w-[1240px] mx-auto my-14 flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>

        {Object.entries(skill).map(([category, items], i) => (
          <SkillList key={i} title={category} skills={items} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
