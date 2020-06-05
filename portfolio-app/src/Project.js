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
            >
              View Site
            </a>
          )}
          {project.repo && (
            <a
              className="link project-link"
              href={project.repo}
              target="_blank"
            >
              View Code
            </a>
          )}
          <div className="wacky-container">
            {descVisible ? (
              <a
                className="link project-link"
                onClick={() => setDescVisible(false)}
              >
                View my PRs
              </a>
            ) : (
              <a
                className="link project-link"
                onClick={() => setDescVisible(true)}
              >
                View Description
              </a>
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
            className={`project-image ${
              project.name == "MyDish" && "mydish-image"
            }`}
            src={project.image}
          />
        )}
      </div>
    </div>
  );
};

export default Project;
