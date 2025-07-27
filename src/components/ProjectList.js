// src/components/ProjectList.js
import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <section id="projects">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </section>
  );
}

export default ProjectList;