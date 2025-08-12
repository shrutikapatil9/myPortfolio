import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";



export default function Contact() {
  return (
    <section id="contact" className="py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-600 inline-block pb-1">
        Contact Me
      </h2>
      <p className="mb-6 text-lg">Feel free to reach out via any of the following:</p>
      <div className="flex justify-center space-x-8 text-3xl">
        <a
          href="mailto:shrutika09.patil@gmail.com"
          className="hover:text-blue-400"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/shrutikapatil9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shrutikapatil9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

