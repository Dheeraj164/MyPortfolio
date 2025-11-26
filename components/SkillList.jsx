import React from "react";
import Skilltitle from "./Skilltitle";
import SkillsTile from "./SkillsTiles";

export default function SkillList({ title, skills }) {
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
