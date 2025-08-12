import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-600 inline-block pb-1">
        Resume
      </h2>
      <a
        href="/Shrutika_Patil_Resume.pdf"
        download
        className="px-8 py-3 bg-blue-600 rounded-md font-semibold shadow-lg hover:bg-blue-700 transition-colors text-white"
      >
        Download My Resume
      </a>
    </section>
  );
}

