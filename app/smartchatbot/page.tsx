import React from "react";
import ProjectPages from "@/app/components/ProjectPages";
import smartchatbot from "@/public/assets/Projects/Smart Chat Bot/smartChatBot.jpg";

export default function SmartChatBot() {
  return (
    <ProjectPages
      backgroundImage={smartchatbot}
      title="Smart Chat Bot"
      projectDescription={[
        {
          descriptionTitle: "Overview",
          data: [
            "The Smart ChatBot is a conversational AI system developed using the OpenAI API, Next.js, and Node.js. The application enables users to interact with an intelligent assistant capable of understanding natural language and providing contextually relevant responses.",
            "The chatbot is designed to assist users with information retrieval, automated responses, and dynamic conversations while maintaining a responsive and interactive user interface.",
          ],
        },
        {
          descriptionTitle: "Authentication & Data Management",
          data: [
            "Authentication is implemented using Auth0 to ensure secure access to chatbot functionality while protecting user data and privacy.",
            "MongoDB is used as the backend database to store user data, conversation history, and related application data for future analysis and improved user experiences.",
          ],
        },
        {
          descriptionTitle: "Application Architecture",
          data: [
            "The frontend is built using Next.js to provide a fast and responsive web interface across devices.",
            "Node.js powers the backend services, managing API requests, handling communication with the OpenAI API, and orchestrating interactions between authentication, database storage, and the chatbot engine.",
          ],
        },
      ]}
      keyFeature={[
        "AI-powered conversational chatbot using OpenAI API",
        "Secure user authentication using Auth0",
        "Real-time conversational interaction",
        "Conversation history stored in MongoDB",
        "Responsive web interface built with Next.js",
        "Scalable backend architecture using Node.js",
      ]}
      techStack={[
        "React",
        "Next.js",
        "JavaScript",
        "Axios",
        "Tailwind CSS",
        "OpenAI API",
        "Auth0",
        "MongoDB",
        "Node.js",
      ]}
    />
  );
}
