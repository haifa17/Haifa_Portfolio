import Experience from "@/app/experience/Experience";
import Hero from "@/app/hero/Hero";
import Skills from "@/app/skills/Skills";
import Projects from "./projects/Projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-10 lg:gap-20 items-center justify-center py-10 overflow-hidden ">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
