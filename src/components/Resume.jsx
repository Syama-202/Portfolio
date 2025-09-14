import React from "react";

function Resume() {
  return (
    <section className="section" id="resume">
      <h2>Resume & References</h2>
      <p>You can download my resume here:</p>
      <a href="/resume.pdf" download className="btn btn-primary">
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
