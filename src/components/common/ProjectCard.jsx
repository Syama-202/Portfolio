import React from "react";
const ProjectCard = ({ title, description, tech }) => (
  <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">
          {tech}
        </span>
      </div>
    </div>
  </div>
);

export default ProjectCard;
