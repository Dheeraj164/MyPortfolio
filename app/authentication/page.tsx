// export default authentication;
// pages/authentication.tsx (or components/Authentication.tsx)
import ExpensesTracker from "@/public/assets/React native/ExpensesTracker.png";
import ProjectPages from "../components/ProjectPages";

export default function Authentication() {
  return (
    <ProjectPages
      backgroundImage={ExpensesTracker}
      title="Authentication App"
      projectDescription={[
        {
          descriptionTitle: "Overview",
          data: [
            "I developed a mobile authentication application using React Native and Expo Router to provide a secure and seamless login experience.",
            "The application implements Firebase Authentication for user sign-in and registration while maintaining a smooth navigation flow between authenticated and unauthenticated screens.",
          ],
        },
        {
          descriptionTitle: "Authentication Flow",
          data: [
            "The application uses two navigation stacks: an Auth Stack that displays the login screen when a user is not authenticated and a Root Stack that loads the main application once the user successfully signs in.",
            "This architecture ensures that protected screens remain inaccessible unless the user is authenticated.",
          ],
        },
        {
          descriptionTitle: "Persistent Login Experience",
          data: [
            "To maintain user sessions, the application stores the authentication token securely using AsyncStorage.",
            "When the application launches, it checks for an existing token and automatically restores the user session, allowing users to stay logged in even after restarting the app.",
          ],
        },
      ]}
      keyFeature={[
        "Secure authentication using Firebase Authentication",
        "Login and registration screens using Expo Router navigation",
        "Automatic login persistence using AsyncStorage",
        "Protected routes using conditional navigation stacks",
        "Clean mobile UI built with NativeWind styling",
        "Scalable project structure using MVC architecture",
      ]}
      techStack={[
        "React Native",
        "Expo Router",
        "NativeWind",
        "Firebase Authentication",
        "AsyncStorage",
        "Nested Navigation",
        "MVC Architecture",
      ]}
    />
  );
}
