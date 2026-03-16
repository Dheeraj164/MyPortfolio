import ChatApp from "@/public/assets/Projects/ChatApp/ChatAppChat.png";
import ChatAppHome from "@/public/assets/Projects/ChatApp/ChatAppHome.png";
import ChatAppLogin from "@/public/assets/Projects/ChatApp/ChatAppLogin.png";
import ProjectPages from "../components/ProjectPages";
const projectDescription = [
  {
    descriptionTitle: "Project Overview",
    data: [
      ` I built a real-time mobile chat application using Flutter to
        deliver a fast and responsive user experience. The application
        allows users to communicate instantly while maintaining secure
        authentication and reliable message storage.`,
    ],
  },
  {
    descriptionTitle: "Authentication",
    data: [
      `  Firebase Authentication was implemented to securely manage users.
              I also integrated Google Sign-In so users can log in quickly
              without creating new credentials.`,
    ],
  },
  {
    descriptionTitle: "Real-Time Messaging",
    data: [
      ` Messages are stored and synchronized using Firebase Firestore,
        enabling real-time communication between users. The app displays
        usernames, timestamps, and maintains a clear chat history for each
        conversation.`,
    ],
  },
];

const keyFeature = [
  "Real-time messaging using Firestore",
  "Secure login with Firebase Authentication",
  "Google Sign-In integration",
  "Clean Flutter UI",
  "Message history with timestamps",
];

const techStack = [
  "Flutter",
  "Firebase Auth",
  "Cloud Firestore",
  "Google Sign-In",
];
const ChatAppProject = () => {
  return (
    <ProjectPages
      backgroundImage={ChatApp}
      title="Chat App"
      projectDescription={projectDescription}
      keyFeature={keyFeature}
      techStack={techStack}
      projectImages={[ChatApp, ChatAppLogin, ChatAppHome]}
    />
  );
};

export default ChatAppProject;
