import React from "react";
import ProjectCard from "./common/ProjectCard";

function Samples() {
  const projects = [
    {
      title: "Nutri Connect",
      description:
        "Nutrition consultation website using Node.js, Express, MongoDB, and EJS.",
      tech: "Node.js, Express, MongoDB",
    },
    {
      title: "SnackHub",
      description:
        "Snack delivery e-commerce site with cart management & order processing.",
      tech: "Node.js, Express, JavaScript",
    },
    {
      title: "Personal Portfolio",
      description:
        "Self-contained portfolio built with React.js & Tailwind CSS.",
      tech: "React.js, Tailwind",
    },
  ];

  return (
    <section className="section" id="samples">
      <h2>Samples of Work</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Samples;
