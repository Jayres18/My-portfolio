import React from "react";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* Bio Section*/}
      <section className="mb-12 px-4">
        <p className="max-w-5xl mx-auto text-secondary text-center">
          I’m <span className="font-bold">Joseph Daniel Lansang</span>, a web
          developer passionate about building web-based systems and applications
          that make processes more efficient. I work with Next.js, React,
          Node.js, and MySQL to create practical and user-friendly solutions. I
          also serve as an{" "}
          <span className="font-bold">
            Administrative Assistant III at Batangas State University
          </span>
          , where I support research projects and handle coordination and
          documentation. With experience in both development and administration,
          I bring a balance of technical skills and organizational expertise to
          everything I do.
        </p>
      </section>

      {/* Skills Section*/}
      <section className="mb-12 px-4">
        <h2 className="section-title">Skills</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 hover:scale-[1.08] transition-transform">
            <div className="flex flex-row gap-3 items-center">
              <FaCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">FrontEnd</h3>
            </div>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>React / Next.js</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 hover:scale-[1.08] transition-transform">
            <div className="flex flex-row gap-3 items-center">
              <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">BackEnd</h3>
            </div>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Node JS</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 hover:scale-[1.08] transition-transform">
            <div className="flex flex-row gap-3 items-center">
              <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            </div>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Git / Github</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
