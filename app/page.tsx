import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack";
import SkillBars from "@/components/SkillBars";

export default function Home() {
  return (
   <main className="bg-darkBg bg-glow">
      <Navbar />
      <Hero />
      <About />
       <TechStack />
       <SkillBars />
      <Projects />
      <Contact />
    </main>
  );
}
