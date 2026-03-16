import React from "react";
import ProjectPages from "@/app/components/ProjectPages";
import weather from "@/public/assets/Projects/weatherapp.png";

export default function WeatherApp() {
  return (
    <ProjectPages
      backgroundImage={weather}
      title="Weather App"
      projectDescription={[
        {
          descriptionTitle: "Overview",
          data: [
            "The Weather App is a web application built using Next.js that allows users to check real-time weather conditions for cities around the world.",
            "The application fetches live weather data from the OpenWeatherMap API and displays key information such as temperature, humidity, wind speed, and weather conditions.",
          ],
        },
        {
          descriptionTitle: "User Experience",
          data: [
            "The interface is designed using Tailwind CSS to provide a clean and responsive layout that works across devices.",
            "Users can easily search for different locations and instantly view current weather information and conditions.",
          ],
        },
        {
          descriptionTitle: "Application Architecture",
          data: [
            "Next.js provides fast rendering and optimized performance through server-side rendering and modern React features.",
            "Axios is used to handle API requests to the OpenWeatherMap service and retrieve real-time weather data efficiently.",
          ],
        },
      ]}
      keyFeature={[
        "Search weather conditions by city",
        "Real-time weather data fetched from OpenWeatherMap API",
        "Displays temperature, humidity, wind speed, and conditions",
        "Responsive UI built with Tailwind CSS",
        "Fast rendering using Next.js",
      ]}
      techStack={[
        "React",
        "Next.js",
        "JavaScript",
        "Axios",
        "Tailwind CSS",
        "OpenWeatherMap API",
      ]}
    />
  );
}
