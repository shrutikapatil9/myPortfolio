import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 text-center mt-16">
      <p>© {new Date().getFullYear()} Shrutika Patil. All rights reserved.</p>
    </footer>
  );
}

