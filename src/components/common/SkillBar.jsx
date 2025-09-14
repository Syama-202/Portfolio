import React from "react";

const SkillBar = ({ skill, percentage, icon: Icon }) => (
  <div className="mb-6">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-3">
        <Icon className="w-5 h-5 text-purple-600" />
        <span className="font-semibold text-gray-800">{skill}</span>
      </div>
      <span className="text-purple-600 font-bold">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default SkillBar;
