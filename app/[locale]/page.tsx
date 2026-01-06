import Projects from "./projects/Projects";
import ScrollSection from "@/lib/ScrollSection";
import Skills from "./skills/Skills";
import Hero from "./hero/Hero";
import Experience from "./experience/Experience";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-10 lg:gap-20 items-center justify-center overflow-hidden ">
      <ScrollSection nextId="skills">
        <Hero />
      </ScrollSection>

      <ScrollSection nextId="experience">
        <div id="skills">
          <Skills />
        </div>
      </ScrollSection>

      <ScrollSection nextId="projects">
        <div id="experience">
          <Experience />
        </div>
      </ScrollSection>

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
    </div>
  );
}
