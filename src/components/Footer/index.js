import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/RaymundOfina"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/raymund-ofina-3811097b/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/19222677/raymundofina"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
