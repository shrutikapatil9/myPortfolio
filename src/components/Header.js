import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold cursor-pointer">Shrutika Patil</div>
        <ul className="flex space-x-6 text-lg">
          {["About", "Projects", "Skills", "Resume", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

