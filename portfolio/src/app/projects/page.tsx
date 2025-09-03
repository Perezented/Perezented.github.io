"use client"
import Link from 'next/link';
import { useState } from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Image, { StaticImageData } from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  imageUrl: string | StaticImageData;
  live?: boolean;
}
const frontEndString = "Frontend";
const fullStackString = "Full Stack";

const projects: Project[] = [
  {
    id: 1,
    title: "Pro-Select Flooring",
    description: "A full-stack e-commerce application originally built with React.js and Bootstrap, featuring user authentication, payment processing, and admin dashboard. The project was then converted to Remix.js with Tailwind CSS.",
    technologies: ["React.js", "Bootstrap", "jest", "axios", "emailjs-com", "gh-pages", "node-sass", "sass"],
    liveUrl: "https://Pro-SelectFlooring.com",
    githubUrl: "https://github.com/Perezented/PSF",
    category: frontEndString,
    imageUrl: "/psfhome.gif",
    live: true
  },
  {
    id: 2,
    title: "Clarity E-Commerce Framework / Clarity Payhub",
    description: "A full-stack e-commerce application originally built with React.js and Bootstrap, featuring user authentication, payment processing, and admin dashboard. The project was then converted to Remix.js with Tailwind CSS.",
    technologies: ["Remix.js", "TypeScript", "C#", "MSSQL", "radix-ui", "Tailwind CSS", "React.js", "Bootstrap"],
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com/example",
    category: fullStackString,
    imageUrl: "/PH-InvoiceAging.gif"
  },
  {
    id: 3,
    title: "New Solutions",
    description: "A full-stack hippa compliant application built with React.js and Node.js, ensuring secure user authentication and data protection. Doctor portal with patient management branched off of the Clarity E-Commerce Framework. Features a product showcase platform for New Solutions, featuring pharmaceutical compounds aimed at enhancing wellness, performance, and aesthetics.",
    technologies: ["React.js", "TypeScript", "C#", "MSSQL", "Bootstrap", "DNN", "Microsoft Azure"],
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com/example",
    category: fullStackString,
    imageUrl: "/SPG-Edit-Patient-Updates.gif"
  },
  {
    id: 4,
    title: "Destination Athlete",
    description: "DestinationAthlete.com is built on the DNN (DotNetNuke) content management system, leveraging ASP.NET for server-side rendering and modular component integration. The site architecture supports dynamic content delivery and e-commerce functionality through custom modules and third-party extensions tailored for team sports merchandising.",
    technologies: ["DNN", "AngularJS", "TypeScript", "MSSQL", "Bootstrap"],
    liveUrl: "https://destinationathlete.com/",
    // githubUrl: "https://github.com/example",
    category: frontEndString,
    imageUrl: "/ATHLT-Store-Listing-Max-08406.gif",
    live: true
  },
  {
    id: 5,
    title: "My Portfolio",
    description: "A showcase of my work as a developer, featuring projects built with various technologies and frameworks. This portfolio demonstrates my skills in front-end and back-end development, as well as my ability to create responsive and user-friendly interfaces.",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Three.js", "emailjs-com"],
    liveUrl: "https://perezented-portfolio.vercel.app/",
    // githubUrl: "https://github.com/example",
    category: frontEndString,
    imageUrl: "/Perezented-Portfolio.gif",
    live: true
  },
];


const categories = ["All", frontEndString, fullStackString];

export default function Projects() {
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState<string>("All");
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            My Projects
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some highlights from my journey as a developer—each project reflects my dedication to quality and innovation.
          </p>
        </div>

        {/* Category filter - For now showing all projects */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-1 rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentSelectedCategory(category)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${category === currentSelectedCategory
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.filter(x => x.category === currentSelectedCategory || currentSelectedCategory === "All").map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col justify-between"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="responsive"
                width={300}
                height={200}
                className="object-cover object-top max-h-[20rem]"
              />

              <div className="px-6 py-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-nowrap inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/50 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                    {project.category}
                  </span>
                </div>

                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className={((project.githubUrl || project.liveUrl) ? "mt-4 " : null )+ "flex space-x-3"}>
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                      {project.live ? "Production Site" : "Live Demo"}
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <CodeBracketIcon className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Interested in working together?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            I&apos;m always open to discussing new opportunities and exciting projects.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-blue-700 hover:via-purple-600 hover:to-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
