import React, { useState } from "react";
import prs from "./prs";
import PRList from "./PRList";

const Project = ({ project }) => {
  const [descVisible, setDescVisible] = useState(true);

  return (
    <div className="project-container">
      <div className="body-text project-text">
        <h2 className="project-title">{project.name}</h2>
        <div className="link-container">
          {project.site && (
            <a
              className="link project-link"
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          )}
          {project.repo && (
            <a
              className="link project-link"
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          )}
          <div className="toggle-container">
            {descVisible ? (
              <span
                className="link project-link"
                onClick={() => setDescVisible(false)}
              >
                View my PRs
              </span>
            ) : (
              <span
                className="link project-link"
                onClick={() => setDescVisible(true)}
              >
                View Description
              </span>
            )}
          </div>
        </div>
        {descVisible ? (
          <p className="project-description">{project.description}</p>
        ) : (
          <PRList project={prs[project.name]} />
        )}
      </div>
      <div
        className={`image-container ${
          !project.name.includes("MyDish") && "horiz-container"
        }`}
      >
        {project.image && (
          <img
            alt={`Screenshot of ${project.name} app`}
            title={`Screenshot of ${project.name} app`}
            className={`project-image ${
              project.name === "MyDish" && "mydish-image"
            }`}
            src={project.image}
          />
        )}
      </div>
    </div>
  );
};

export default Project;
