import React from "react";
import { Code, Clock } from "lucide-react";

function WorkExperience() {
  return (
    <section className="section" id="experience">
      <h2>Work Experience / Projects</h2>
      <div className="card">
        <Clock />
        <h3>Google Cloud Skills Boost</h3>
        <p>Hands-on with Docker, Kubernetes, and GCP (2023).</p>
      </div>
      <div className="card">
        <Code />
        <h3>Vault of Secrets</h3>
        <p>AI + Cryptography project (2024).</p>
      </div>
    </section>
  );
}

export default WorkExperience;
