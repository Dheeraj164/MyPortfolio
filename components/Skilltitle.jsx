import Image from "next/image";
import React from "react";

export default function Skilltitle({ title }) {
  return (
    <div className="flex my-2">
      <Image
        src={`/assets/skills/${title.toLowerCase()}.svg`}
        alt="/"
        width="32"
        height="32"
      />
      <p className="px-2 font-bold text-lg">{title}</p>
    </div>
  );
}
