import React from "react";
import { Award, Code, Database } from "lucide-react";

function Achievements() {
  return (
    <section className="section" id="achievements">
      <h2>Achievements & Awards</h2>

      <div className="card">
        <Award />
        <h3>Google Cloud Skills Boost Completion</h3>
        <p>
          Completed comprehensive cloud computing training with hands-on
          experience in Docker, Kubernetes, and GCP services.
        </p>
      </div>

      <div className="card">
        <Code />
        <h3>AI & Cryptography Project Excellence</h3>
        <p>
          Demonstrated AI algorithms and cryptographic implementations through
          the <b>Vault of Secrets</b> project-based learning.
        </p>
      </div>

      <div className="card">
        <Database />
        <h3>Full-Stack Development Proficiency</h3>
        <p>
          Built multiple end-to-end applications demonstrating expertise in web
          technologies and databases.
        </p>
      </div>
    </section>
  );
}

export default Achievements;
