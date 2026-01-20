import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import CursorGlow from "./components/ui/CursorGlow";

export default function App() {
  return (
    <>
      {/* ambient cursor light */}
      <CursorGlow />

      {/* fixed navigation */}
      <Navbar />

      {/* content */}
      <main className="relative z-10 pt-24">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
