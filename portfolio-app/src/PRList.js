import React from "react";

const PRList = ({ project }) => (
  <div className="project-description">
    <p className="project-description">{project.description}</p>
    <div className="pr-container">
      {project.select
        .sort((a, b) => b.id - a.id)
        .map((pr) => {
          return (
            <a
              className="link pr-link"
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pr.title}
            </a>
          );
        })}
    </div>
    <a
      className={`link ${!project.select && "project-link"} pr-link`}
      href={project.all}
      target="_blank"
      rel="noopener noreferrer"
    >
      {`View all of my PRs for ${project.name}`}
    </a>
  </div>
);

export default PRList;
