import React from "react";
import Skilltitle from "./Skilltitle";
import SkillsTile from "./SkillsTiles";

interface SkillListProp {
  title: string;
  skills: string[];
}

export default function SkillList({ title, skills }: SkillListProp) {
  return (
    <div className="mt-8 ">
      <Skilltitle title={title} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, i) => {
          return <SkillsTile key={i} title={skill} />;
        })}
      </div>
    </div>
  );
}
