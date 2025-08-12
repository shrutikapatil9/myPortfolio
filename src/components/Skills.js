import React from "react";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Databases", icon: <FaDatabase className="text-purple-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 border-b-4 border-blue-600 inline-block pb-1">
        Skills
      </h2>
      <div className="flex justify-center flex-wrap gap-8 text-3xl">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center space-y-2 text-center"
          >
            <div>{icon}</div>
            <p className="text-lg">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

