// Hero.js
import React from "react";
// Adjust path if needed

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center h-screen pt-20"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.8)" }}
    >
      

      {/* Profile image */}
      <img
        src="photo.jpg"
        alt="Shrutika Patil"
        className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-lg object-cover mb-6"
      />

      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-2">Hi, I’m Shrutika Patil</h1>

      {/* Subheading */}
      <p className="text-xl mb-6 max-w-xl">
        Fullstack Developer | AI/ML Enthusiast | Problem Solver
      </p>

      {/* Resume download button */}
      <a
        href="/Shrutika_Patil_Resume.pdf"
        download
        className="px-8 py-3 bg-blue-600 rounded-md font-semibold shadow-lg hover:bg-blue-700 transition-colors text-white"
      >
        Download Resume
      </a>
    </section>
  );
}

