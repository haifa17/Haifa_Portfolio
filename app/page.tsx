import Experience from "@/app/experience/Experience";
import Hero from "@/app/hero/Hero";
import Projects from "@/app/projects/Projects";
import Skills from "@/app/skills/Skills";


export default function Home() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-10 lg:gap-20 items-center justify-center py-10 overflow-hidden ">
      <Hero />
      <Skills />
      <Experience />
      {/* <Projects /> */}
    </div>
  );
}
