import React from "react";
import ProjectPages from "@/app/components/ProjectPages";
import ExpensesTracker from "@/public/assets/React native/ExpensesTracker.png";

export default function ExpensesTrackerApp() {
  return (
    <ProjectPages
      backgroundImage={ExpensesTracker}
      title="Expenses Tracker App"
      projectDescription={[
        {
          descriptionTitle: "Overview",
          data: [
            "The Expense Tracker App is a mobile application designed to help users monitor and manage their daily spending in an organized way.",
            "The app provides a clear overview of expenses, allowing users to track financial activity and maintain better control over their personal budget.",
          ],
        },
        {
          descriptionTitle: "Expense Management",
          data: [
            "Users can add new expenses, update existing entries, or delete them directly from the application.",
            "A dedicated section highlights recent expenses from the last 7 days, allowing users to quickly review their most recent financial activity.",
          ],
        },
        {
          descriptionTitle: "Application Architecture",
          data: [
            "The application uses React Context and the Reducer pattern to manage application state efficiently across different screens.",
            "Navigation is implemented using nested navigators with stack and tab navigation to create a smooth and intuitive user experience.",
          ],
        },
      ]}
      keyFeature={[
        "Add, update, and delete expense records",
        "View total spending across all expenses",
        "Recent expenses view showing spending from the last 7 days",
        "Clean and responsive mobile UI",
        "Efficient state management using Context and Reducer",
        "Smooth navigation using nested navigators",
      ]}
      techStack={[
        "React Native",
        "TypeScript",
        "NativeWind",
        "Expo Router",
        "Nested Navigation",
        "React Context",
        "Reducer Pattern",
        "MVC Architecture",
      ]}
    />
  );
}
