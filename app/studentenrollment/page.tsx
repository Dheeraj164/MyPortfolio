import React from "react";
import StudentEnrollmentSystem from "@/public/assets/Projects/Student_Enrollment_System.png";
import ProjectPages from "@/app/components/ProjectPages";

export default function StudentEnrollmentSystemPage() {
  return (
    <ProjectPages
      backgroundImage={StudentEnrollmentSystem}
      title="Student Enrollment System"
      projectDescription={[
        {
          descriptionTitle: "Overview",
          data: [
            "The Student Enrollment System is a web application designed to help universities manage student enrollment, course information, and academic records through a centralized platform.",
            "Students can view their personal information, check currently enrolled courses, review completed subjects, and monitor their academic performance.",
          ],
        },
        {
          descriptionTitle: "Administrative Management",
          data: [
            "The system provides administrative functionality that allows administrators to add, update, and remove student records from the database.",
            "Administrators can also manage course information and update student grades to ensure academic records remain accurate and up to date.",
          ],
        },
        {
          descriptionTitle: "System Design",
          data: [
            "The application focuses on maintaining data integrity and secure management of academic records.",
            "A responsive interface allows both students and administrators to access the system across different devices while efficiently managing student information and course data.",
          ],
        },
      ]}
      keyFeature={[
        "Student dashboard to view personal and academic information",
        "Course enrollment and course history tracking",
        "Administrative panel for managing student records",
        "Ability to update and manage student grades",
        "Centralized database for academic data management",
        "Responsive web interface for accessibility",
      ]}
      techStack={[
        "PHP",
        "HTML",
        "CSS",
        "Bootstrap",
        "Oracle Database",
        "Database Management System",
      ]}
    />
  );
}
