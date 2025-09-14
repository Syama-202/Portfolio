import React from "react";

const StatCard = ({ icon: Icon, number, label, gradient }) => (
  <div className="text-center group">
    <div
      className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
    >
      <Icon className="w-8 h-8 text-white" />
    </div>
    <div className="text-3xl font-bold text-gray-800 mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export default StatCard;
