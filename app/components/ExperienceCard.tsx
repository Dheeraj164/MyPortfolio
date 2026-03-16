import React from "react";
interface ExperienceCardProps {
  job: {
    Title: string;
    Organization: string;
    Location: string;
    From: string;
    To: string;
    Description: string[];
  };
}
export default function ExperienceCard({ job }: ExperienceCardProps) {
  return (
    <div className="w-full h-full rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div className="p-6 space-y-2">
        {/* Job Title */}
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          {job.Title}
        </p>

        {/* Organization */}
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          {job.Organization}
        </p>

        {/* Location */}
        <p className="text-[16px] text-gray-600 dark:text-gray-400">
          {job.Location}
        </p>

        {/* Dates */}
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {job.From} – {job.To}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

        {/* Description List */}
        <ul className="space-y-3">
          {job.Description.map((description, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0"></span>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
