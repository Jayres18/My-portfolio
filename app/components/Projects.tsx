import { project } from "@/contents/project";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {project.map((project) => (
          <article
            key={project.title}
            className="bg-white dark:bg-dark/80 rounded-lg shadow-md p-7 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div>
              {project.technologies.map((tech) => (
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {tech}{" "}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
