import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CaseStudies } from "./components/CaseStudies";
import { Experience } from "./components/Experience";
import { Competencies } from "./components/Competencies";
import { Artifacts } from "./components/Artifacts";
import { About, Contact } from "./components/About";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <Experience />
        <Competencies />
        <Artifacts />
        <About />
      </main>
      <Contact />
    </div>
  );
}
