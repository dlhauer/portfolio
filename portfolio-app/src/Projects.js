import React from "react";
import Project from "./Project";
import myDish from "./assets/img-mydish-screen.jpg";
import ant from "./assets/img-ants-knapsack.jpg";
import sauti from "./assets/img-sauti.jpg";

const projects = [
  {
    name: "MyDish",
    description: `A mobile version control recipe editing app that allows users to create 
      recipes, edit them, and view all previous versions of their recipes. 
      I worked as a frontend developer, writing in React Native. I was responsible
      for implementing an image upload feature, refactoring styling throughout the app
      in accordance with new UX designs, managing state for creating and editing a recipe,
      and integrating with an ingredient-prediction API built by our Data Science team. 
      I collaborated with a remote team of seven other developers over a period of eight weeks.`,
    image: myDish,
    repo: "https://github.com/Lambda-School-Labs/mydish-fe",
    site: "",
  },
  {
    name: "The Ant's Knapsack",
    description: `A multi-user dungeon game in which you travel around and pick up, drop,
    or barter items, attempting to maximize your score while staying within the weight limit. 
    I worked on the backend,
    where I was responsible for creating an algorithm that would generate a random map of
    150 rooms with randomly generated names and descriptions.
    Built with a remote team of five developers over five days, using Flask and following OOP 
    principles.`,
    image: ant,
    repo:
      "https://github.com/Organization-for-CS-Build-Week-1/CS-Build-Week-1-Flask",
    site: "https://the-ants-knapsack.netlify.app/",
  },
  {
    name: "Sauti Studio",
    description: `This project was built in five days on a remote team of three developers.
    I was solely in charge of building the backend API, including the data model, REST endpoints,
    and authentication. The product vision was an app that allows users to create categorized
    workflows with multiple pages in each flow. I built the API using Node, Express, Knex,
    and a SQLite database.`,
    image: sauti,
    repo: "https://github.com/Sauti-Studio3/Back-End",
    site: "https://sauti-forms.now.sh/",
  },
];

const Projects = (props) => (
  <div className="projects">
    <h2 className="heading projects-heading">Projects</h2>
    {projects.map((project) => (
      <Project key={project.name} project={project} />
    ))}
  </div>
);

export default Projects;
