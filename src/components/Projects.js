import React from "react";

const projects = [
  {
    title: "Movie Search App",
    image: "ss1.png",
    description: "A sleek and user-friendly app that lets you search for movies using the OMDb API. Quickly find detailed info, posters, and ratings for your favorite films—all in one place.",
    tech: "React, Node.js, OMDb API",
    live: "hhttps://shrutikapatil9.github.io/moviesearch-app/",
    github: "https://github.com/shrutikapatil9/moviesearch-app",
  },
  {
    title: "Shopping Site",
    image: "movie.png",
    description: "A stylish single-page fashion shopping website built with React. Users can browse products and add them to a wishlist.",
    tech: "React.js, Node.js, CSS",
    live: "https://onlinestore090.netlify.app/",
    github: "https://github.com/shrutikapatil9/shopping-site",
  },
   {
    title: "Landing Page",
    image: "ss2.png",
    description: "A clean and mobile-friendly landing page for a fictional product/brand using HTML, CSS, and Bootstrap.",
    tech: "HTML, Sass, Bootstrap5",
    live: "https://landingpage090.netlify.app/",
    github: "https://github.com/shrutikapatil9/responsive-landing-page",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto p-6 text-white mt-20">
      <h2 className="text-3xl font-semibold mb-8 border-b border-blue-600 inline-block">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map(({ title, description, tech, live, github, image }) => (
          <div key={title} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
<img src={image} alt={title} className="mb-4 rounded" />
            <p className="mb-2">{description}</p>
            <p className="italic mb-3 text-sm text-blue-300">Tech: {tech}</p>
            <div className="flex space-x-4">
              <a href={live} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">
                Live Demo
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
