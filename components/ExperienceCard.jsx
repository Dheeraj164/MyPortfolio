import React from "react";

export default function ExperienceCard({ job }) {
  return (
    // <div className="w-full border-2 h-full rounded-xl ">
    //   <div className="h-full bg-white rounded-xl p-4 ">
    //     <div>
    //       <p className="text-2xl font-bold">{job.Title}</p>
    //     </div>
    //     <div>
    //       <p className="text-lg font-semibold">{job.Organization}</p>
    //     </div>
    //     <div>
    //       <p className="text-lg">{job.Location}</p>
    //     </div>
    //     <div>
    //       <p>
    //         {job.From} - {job.To}
    //       </p>
    //     </div>
    //     <div className="mt-4 border border-gray-200 rounded-xl p-6 bg-white">
    //       <ul className="space-y-4">
    //         {job.Description.map((description, i) => (
    //           <li key={i} className="flex gap-3 group">
    //             <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 group-hover:bg-indigo-800 transition-all"></span>
    //             <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
    //               {description}
    //             </p>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>

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
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 flex-shrink-0"></span>
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
