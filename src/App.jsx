import { useEffect } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ExperienceEducation from "./components/ExperienceEducation";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Mobile check to disable custom cursor on touch devices
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      <Preloader />
      {!isMobile && <CustomCursor />}
      
      {/* Noise Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative bg-dark min-h-screen text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <ExperienceEducation />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
