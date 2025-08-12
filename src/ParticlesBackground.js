import React from "react";
import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  
  return (
    <Particles
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: { value: "#0f172a" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.3, width: 1 },
          move: { enable: true, speed: 2 },
          number: { value: 50, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: 3 }
        },
        detectRetina: true
      }}
    />
  );
}

