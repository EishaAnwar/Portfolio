// components/ProjectModal.jsx
"use client";

import Image from "next/image";
import { FaTimes } from "react-icons/fa";

export default function ProjectModal({ project, onClose, techIcons }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="bg-[#1a1817] text-white p-6 rounded-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl"
        >
          <FaTimes />
        </button>

        {/* ✅ Project Image */}
        <div className="mb-4">
          <Image
            src={project.preview}
            alt={project.name}
            width={600}
            height={300}
            className="rounded-md object-contain w-full max-h-[250px] mx-auto"
          />
        </div>

        <h2 className="text-xl font-bold mb-2">{project.name}</h2>
        <p className="text-sm text-[#998f8f] mb-4">{project.description}</p>

        {project.features && (
          <div className="mb-4">
            <h3 className="font-semibold mb-1">Key Features:</h3>
            <ul className="list-disc list-inside text-sm">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className="font-semibold mb-1">Technologies:</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-1 px-2 py-0.5 text-[10px] bg-white/10 text-white border border-white/30 rounded-full"
              >
                {techIcons[tech] || null} {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
