import React from "react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Contact / Links</h2>

      <div className="contact-info">
        <p>
          <Mail /> syamainala@gmail.com
        </p>
        <p>
          <Github /> github.com/Syama-202
        </p>
        <p>
          <Linkedin /> linkedin.com/in/syama-sri-sai-inala
        </p>
        <p>
          <MapPin /> IIIT Sricity, Andhra Pradesh, India
        </p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
