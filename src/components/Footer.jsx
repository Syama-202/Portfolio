import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Inala Syama Sri
            </div>
            <p className="text-gray-400">
              B.Tech CSE Student & Full-Stack Developer passionate about
              creating amazing digital experiences.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#personal"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#education"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Education
              </a>
              <a
                href="#experience"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Experience
              </a>
              <a
                href="#samples"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Syama-202"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/syama-sri-sai-inala"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:syamainala@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Inala Syama Sri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
