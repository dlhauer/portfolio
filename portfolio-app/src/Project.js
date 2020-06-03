import React from "react";

const Project = ({ project }) => (
  <div className="project-container">
    <div className="body-text project-text">
      <h2>{project.name}</h2>
      <div className="link-container">
        {project.site && (
          <a className="link project-link" href={project.site} target="_blank">
            View Site
          </a>
        )}
        {project.repo && (
          <a className="link project-link" href={project.repo} target="_blank">
            View Code
          </a>
        )}
      </div>
      <p className="project-description">{project.description}</p>
    </div>
    <div
      className={`image-container ${
        !project.name.includes("MyDish") && "knapsack-container"
      }`}
    >
      {project.image && (
        <img
          className={`project-image ${
            project.name == "MyDish" && "mydish-image"
          }`}
          src={project.image}
        />
      )}
    </div>
  </div>
);

export default Project;
