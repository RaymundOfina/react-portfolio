import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Due',
      description: 'Due Final Project',
      link: "https://ofina-final-project.herokuapp.com",
      repo: "https://github.com/RaymundOfina/due"
    },
    {
      name: 'Regex ',
      description: 'Regex Tutorial',
      link: "https://gist.github.com/RaymundOfina/65685745760be957422edcbb21fa5253",
      repo: "https://gist.github.com/RaymundOfina/65685745760be957422edcbb21fa5253"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://raymundofina.github.io/run-buddy/",
      repo: "https://github.com/RaymundOfina/run-buddy"
    },
    {
      name: 'Note Taker',
      description: '',
      link: "https://raymundofina.github.io/note-taker/",
      repo: "https://github.com/RaymundOfina/note-taker"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
