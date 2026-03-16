import React from "react";
import ProjectPages from "@/app/components/ProjectPages";
import Photomemoflutter from "@/public/assets/Projects/Photomemoflutter.png";

export default function PhotoMemoFlutter() {
  return (
    <ProjectPages
      backgroundImage={Photomemoflutter}
      title="Photo Memo App (Flutter)"
      projectDescription={[
        {
          descriptionTitle: "Overview",
          data: [
            "PhotoMemo is a cross-platform mobile application built using Flutter that allows users to capture, organize, and share personal memories through photos and descriptions.",
            "The app provides a smooth and visually responsive interface, enabling users to upload photos, add descriptions, and manage their personal photo collections across devices.",
          ],
        },
        {
          descriptionTitle: "Authentication & Security",
          data: [
            "Firebase Authentication is used to securely manage user accounts and login functionality.",
            "Users can sign up and log in safely, ensuring that personal photo memories remain private and accessible only to authorized users.",
          ],
        },
        {
          descriptionTitle: "Cloud Storage & Data Management",
          data: [
            "Firebase Firestore is used to store metadata such as photo titles, descriptions, and sharing information.",
            "Firebase Storage manages the actual photo files, allowing users to store and retrieve images from the cloud while ensuring reliable and scalable data management.",
          ],
        },
      ]}
      keyFeature={[
        "Capture and upload photos with descriptions",
        "Secure authentication using Firebase Authentication",
        "Cloud-based storage for photos using Firebase Storage",
        "Real-time data management with Firebase Firestore",
        "Cross-platform mobile app built with Flutter",
        "Responsive and intuitive user interface",
      ]}
      techStack={[
        "Flutter",
        "Android Studio",
        "Firebase",
        "Firebase Authentication",
        "Firebase Firestore",
        "Firebase Storage",
      ]}
    />
  );
}
