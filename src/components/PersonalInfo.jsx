import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import TypeWriter from "./common/TypeWriter";
import profileImage from "../assets/ProfileImage.jpg";

function PersonalInfo() {
  const typingTexts = [
    "Full Stack Developer",
    "ML Enthusiast",
    "Cloud Learner",
  ];

  return (
    <section className="section" id="personal">
      <div className="personal-info-container">
        {" "}
        {/* Add this container div */}
        {/* The text content section */}
        <div className="info-text">
          <h2>Personal Information</h2>
          <h3>
            Hello, I'm <span className="text-gradient">Inala Syama Sri</span>
          </h3>
          <p>
            B.Tech CSE student at IIIT Sricity, passionate about full-stack
            development, machine learning, and cloud computing.
          </p>
          <p className="text-lg">
            I am <TypeWriter texts={typingTexts} />
          </p>
          <div className="social-links">
            <a href="https://github.com/Syama-202">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/syama-sri-sai-inala-76838428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <Linkedin />
            </a>
            <a href="mailto:syamainala@gmail.com">
              <Mail />
            </a>
          </div>
        </div>
        {/* The image section */}
        <div className="profile-image-container">
          <img
            src={profileImage}
            alt="A professional headshot of Inala Syama Sri"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;
