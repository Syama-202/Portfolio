import React from "react";
import { Award } from "lucide-react";

function Education() {
  return (
    <section className="section" id="education">
      <h2>Education</h2>
      <div className="card">
        <Award />
        <h3>B.Tech in Computer Science</h3>
        <p>IIIT Sri City, 2023 – 2027</p>
        <p>
          Focus on software development, data structures, algorithms, and modern
          programming paradigms.
        </p>
      </div>
    </section>
  );
}

export default Education;
