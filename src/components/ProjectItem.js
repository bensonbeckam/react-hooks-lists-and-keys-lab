// src/components/ProjectItem.js
import React from "react";

function ProjectItem({ name, description, technologies }) {
  return (
    <div className="project-item">
      <h4>{name}</h4>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;