import React from "react";
import { Code, Database, Smartphone, Palette } from "lucide-react";
import SkillBar from "./common/SkillBar";

function Skills() {
  const skills = [
    { name: "C, Java, Python, JavaScript", percentage: 90, icon: Code },
    { name: "React, Node.js, Express", percentage: 85, icon: Database },
    { name: "Machine Learning (Basic)", percentage: 65, icon: Smartphone },
    { name: "Cloud Computing (Learning)", percentage: 60, icon: Palette },
    { name: "MongoDB, SQL", percentage: 75, icon: Database },
  ];

  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      {skills.map((s, i) => (
        <SkillBar
          key={i}
          skill={s.name}
          percentage={s.percentage}
          icon={s.icon}
        />
      ))}
    </section>
  );
}

export default Skills;
