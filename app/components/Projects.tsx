import LSTM from "@/public/assets/Projects/LSTM Stock/DF_and_MA100.png";
import Photomemoflutter from "@/public/assets/Projects/Photomemoflutter.png";
import ChatApp from "@/public/assets/Projects/ChatApp/ChatAppHome.png";
import smartChatBot from "@/public/assets/Projects/Smart Chat Bot/smartChatBot.jpg";
import weatherapp from "@/public/assets/Projects/weatherapp.png";
import MealsApp from "@/public/assets/React native/MealsApp.png";
import ExpensesTracker from "@/public/assets/React native/ExpensesTracker.png";
import Authentications_loginPage from "@/public/assets/React native/Authentications_loginPage.png";
import Student_Enrollment_System from "@/public/assets/Projects/Student_Enrollment_System.png";

import ProjectTile from "./ProjectTile";

const Projects = () => {
  return (
    <div id="project" className="w-full items-center justify-center pt-14">
      <div className="max-w-310 m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8 w-auto h-auto">
          <ProjectTile
            title="Authentication App"
            bacgroundImage={Authentications_loginPage}
            Skills="React Native, Native Wind,   React Native Firebase, Expo Navigation, Nested Navigator, MVC Architecture, React Native AsyncStorage"
            projectUrl="/authentication"
          />
          <ProjectTile
            title="Expenses Tracker App"
            bacgroundImage={ExpensesTracker}
            Skills="React Native, Native Wind, Expo Navigation, Nested Navigator, MVC Architecture"
            projectUrl="/expenses"
          />
          <ProjectTile
            title="Meals App"
            bacgroundImage={MealsApp}
            Skills="React Native, Native Wind, Expo Navigation, Nested Navigator, MVC Architecture"
            projectUrl="/mealsapp"
          />

          <ProjectTile
            title="Chat APP"
            bacgroundImage={ChatApp}
            Skills="Flutter, Dart, Google Firebase Auth and Firestore"
            projectUrl="/chatapp"
          />
          <ProjectTile
            title="PhotoMemo Flutter App"
            bacgroundImage={Photomemoflutter}
            Skills="Flutter, Android Studio and Google Firebase"
            projectUrl="/photomemo"
          />

          <ProjectTile
            title="Stock Prediction"
            bacgroundImage={LSTM}
            Skills="ReactJS, JavaScript, Python Flask and LSTM model"
            projectUrl="/stock"
          />
          <ProjectTile
            title="Weather APP"
            bacgroundImage={weatherapp}
            Skills="NextJS, JavaScript and openweathermap API"
            projectUrl="/weatherapp"
          />
          <ProjectTile
            title="Smart Chat Bot"
            bacgroundImage={smartChatBot}
            Skills="NextJS, JavaScript, NodeJS, Mangodb and OpenAI apikey"
            projectUrl="/smartchatbot"
          />
          <ProjectTile
            title="Student Enrollment System"
            bacgroundImage={Student_Enrollment_System}
            Skills="PLSQL, Oracle DB, PHP, SQL, HTML, CSS, Bootstrap"
            projectUrl="/studentenrollment"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
