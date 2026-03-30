import ExperienceCard from "./ExperienceCard";

const jobList = [
  {
    Title: "Full Stack Developer",
    Organization: "The Donovan's Venom 501c3",
    Location: "New York(Remote)",
    From: "Jan 2025",
    To: "Nov 2025",
    Description: [
      "Developed and maintained responsive user interfaces using React.js, improving the usability and performance of internal and client-facing applications.",
      "Optimized UI components for speed and reusability, reducing code duplication and improving development efficiency.",
      "Implemented form validations, error handling, and user-friendly workflows that enhanced the overall user experience.",
    ],
  },
  // {
  //   Title: "Front-End Developer",
  //   Organization: "6D Technologies",
  //   Location: "Bengaluru",
  //   From: "Aug 2021",
  //   To: "Dec 2022",
  //   Description: [
  //     "Reworked the organization's website using Next.js, enhancing scalability and modernizing the UI, whichimproved user engagement",
  //     "Implemented restricted access features to differentiate free vs. paid users, increasing subscription conversions.",
  //     "Integrated payment processing during sign-up to support premium access, streamlining the user upgrade process",
  //   ],
  // },
  {
    Title: "Teaching Assistant and Student Tutor",
    Organization: "University of Central Oklahoma",
    Location: "Oklahoma",
    From: "Aug 2023",
    To: "Dec 2024",
    Description: [
      "Assisted faculty in Frontend Web Technologies (JavaScript) and Mobile App Development (Flutter) by supporting lectures, labs, grading, and exam proctoring",
      "Tutored undergraduate students in Java, Python, Data Structures, and OOP, helping them strengthen core programming and problem-solving skills.",
      "Guided students through debugging, code optimization, and exam preparation, while also providing support for technical interview readiness.",
    ],
  },
];
const Experience = () => {
  return (
    <div id="experience" className="w-full pt-14">
      <div className="max-w-310 mx-auto my-20 flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Experience
        </p>
        <h2 className="py-4">Where I worked</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {jobList.map((job, i) => (
            <div key={i}>
              <ExperienceCard job={job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
