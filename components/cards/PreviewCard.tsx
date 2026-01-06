import React from "react";
import { COMING_SOON_PROJECTS } from "@/app/[locale]/projects/constants";
import { ProjectCard } from "./ProjectCard";

const PreviewCard = ({
  projects,
}: {
  projects: typeof COMING_SOON_PROJECTS;
}) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl mt-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
};

export default PreviewCard;
