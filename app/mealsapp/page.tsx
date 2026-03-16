import React from "react";
import MealsAppImage from "@/public/assets/React native/MealsApp.png";
import ProjectPages from "@/app/components/ProjectPages";

export default function MealsApp() {
  return (
    <ProjectPages
      backgroundImage={MealsAppImage}
      title="Meals App"
      projectDescription={[
        {
          descriptionTitle: "Overview",
          data: [
            "I developed a mobile meal discovery application that allows users to explore different food categories, view detailed recipes, and manage their favorite meals. The app focuses on providing a clean interface, smooth navigation, and an intuitive browsing experience.",
            "Users can easily browse categories such as breakfast, lunch, dinner, and desserts, then view detailed information about each recipe including ingredients, cooking instructions, preparation time, affordability, and complexity.",
          ],
        },
        {
          descriptionTitle: "Application Navigation",
          data: [
            "The application uses nested navigation with Stack and Drawer navigators to create a smooth and structured user experience.",
            "Users can move from the category screen to the meal list and then to detailed recipe pages while maintaining consistent navigation across the app.",
          ],
        },
        {
          descriptionTitle: "State Management",
          data: [
            "React Context is used to manage the favorite meals functionality across the entire application.",
            "Users can mark or unmark meals as favorites and access them instantly through the dedicated Favorites screen in the drawer navigation.",
          ],
        },
      ]}
      keyFeature={[
        "Browse meals by category such as breakfast, lunch, and dinner",
        "View detailed recipe information including ingredients and preparation steps",
        "Favorites system to save and manage preferred meals",
        "Drawer navigation for quick access to favorites and main categories",
        "Smooth navigation using nested stack and drawer navigators",
        "Reusable UI components for consistent design across screens",
      ]}
      techStack={[
        "React Native",
        "TypeScript",
        "NativeWind",
        "Expo Router",
        "Nested Navigation",
        "React Context",
        "MVC Architecture",
      ]}
    />
  );
}
