import React from "react";

export default function ExperienceCard({ job }) {
  return (
    <div className="w-full border-2 h-full rounded-xl ">
      <div className="h-full bg-white rounded-xl p-4 ">
        <div>
          <p className="text-2xl font-bold">{job.Title}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">{job.Organization}</p>
        </div>
        <div>
          <p className="text-lg">{job.Location}</p>
        </div>
        <div>
          <p>
            {job.From} - {job.To}
          </p>
        </div>
        <div className="mt-4 border border-gray-200 rounded-xl p-6 bg-white">
          <ul className="space-y-4">
            {job.Description.map((description, i) => (
              <li key={i} className="flex gap-3 group">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 group-hover:bg-indigo-800 transition-all"></span>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
