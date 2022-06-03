import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  //deployed projects and GitHub repos
  const [projects] = useState([
    {
      
      description: 'Due Final Project',
      link: "https://floating-waters-78682.herokuapp.com/login",
      repo: "https://github.com/RaymundOfina/due"
    },
    {
      name: 'Regex',
      description: ' Tutorial',
      link: "https://gist.github.com/RaymundOfina/65685745760be957422edcbb21fa5253",
      repo: "https://gist.github.com/RaymundOfina/65685745760be957422edcbb21fa5253"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: " https://raymundofina.github.io/run-buddy/",
      repo: "https://github.com/RaymundOfina/run-buddy"
    },
    {
      name: 'Coding Challenge',
      description: 'Node/IoT',
      link: "https://github.com/RaymundOfina/Coding_Quiz_Challenge",
      repo: "https://github.com/RaymundOfina/Coding_Quiz_Challenge"
    },
    {
      name: 'Weather Updater',
      description: 'React/JavaScript/CSS',
      link: "https://github.com/RaymundOfina/weather-updater",
      repo: "https://github.com/RaymundOfina/weather-updater"
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
