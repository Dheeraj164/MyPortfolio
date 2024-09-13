import React from "react";
import SkillsTile from "./SkillsTiles";

const Skills = () => {
  return (
    <div id="skills" className="w-full ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsTile title="html" />
          <SkillsTile title="css" />
          <SkillsTile title="javascript" />
          <SkillsTile title="react" />
          <SkillsTile title="flutter" />
          <SkillsTile title="nodejs" />
          <SkillsTile title="mongodb" />
          <SkillsTile title="firebase" />
          <SkillsTile title="github" />
          <SkillsTile title="tailwindcss" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
