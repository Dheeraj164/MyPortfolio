import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Main from "./components/Main";
import CaseStudies from "./components/CaseStudies";
export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Experience />
      <CaseStudies />
      <Projects />
      <Contact />
    </div>
  );
}
