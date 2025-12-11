"use client"
import Link from 'next/link';
import { useState } from 'react';
import { StaticImageData } from 'next/image';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  id: number;
  sortOrder: number;
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
    sortOrder: 4,
    title: "Pro-Select Flooring",
    description: "Optimized for clarity and mobile responsiveness, with minimal JavaScript and no heavy client-side frameworks. Pro-Select Flooring is a service-focused platform showcasing commercial flooring expertise across hospitals, schools, churches, and businesses in Oklahoma and surrounding states.",
    technologies: ["React.js", "Bootstrap", "jest", "axios", "emailjs-com", "gh-pages", "node-sass", "sass"],
    liveUrl: "https://Pro-SelectFlooring.com",
    githubUrl: "https://github.com/Perezented/PSF",
    category: frontEndString,
    imageUrl: "/projects/psfhome.gif",
    live: true
  },
  {
    id: 2,
    sortOrder: 3,
    title: "Clarity E-Commerce Framework / Clarity Payhub",
    description: "A full-stack e-commerce application originally built with React.js and Bootstrap, featuring user authentication, payment processing, and admin dashboard. The project was then converted to Remix.js with Tailwind CSS.",
    technologies: ["Remix.js", "TypeScript", "C#", "MSSQL", "radix-ui", "Tailwind CSS", "React.js", "Bootstrap"],
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com/example",
    category: fullStackString,
    imageUrl: "/projects/PH-InvoiceAging.gif"
  },
  {
    id: 3,
    sortOrder: 1,
    title: "New Solutions",
    description: "A full-stack hippa compliant application built with React.js and Node.js, ensuring secure user authentication and data protection. Doctor portal with patient management branched off of the Clarity E-Commerce Framework. Features a product showcase platform for New Solutions, featuring pharmaceutical compounds aimed at enhancing wellness, performance, and aesthetics.",
    technologies: ["React.js", "TypeScript", "C#", "MSSQL", "Bootstrap", "DNN", "Microsoft Azure"],
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com/example",
    category: fullStackString,
    imageUrl: "/projects/SPG-Edit-Patient-Updates.gif"
  },
  {
    id: 4,
    sortOrder: 2,
    title: "Destination Athlete",
    description: "DestinationAthlete.com is built on the DNN (DotNetNuke) content management system, leveraging ASP.NET for server-side rendering and modular component integration. The site architecture supports dynamic content delivery and e-commerce functionality through custom modules and third-party extensions tailored for team sports merchandising.",
    technologies: ["DNN", "AngularJS", "TypeScript", "MSSQL", "Bootstrap"],
    liveUrl: "https://destinationathlete.com/",
    // githubUrl: "https://github.com/example",
    category: frontEndString,
    imageUrl: "/projects/ATHLT-Store-Listing-Max-08406.gif",
    live: true
  },
  {
    id: 5,
    sortOrder: 5,
    title: "My Portfolio",
    description: "A showcase of my work as a developer, featuring projects built with various technologies and frameworks. This portfolio demonstrates my skills in front-end and back-end development, as well as my ability to create responsive and user-friendly interfaces.",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Three.js", "emailjs-com"],
    liveUrl: "https://perezented-portfolio.vercel.app/",
    githubUrl: "https://github.com/Perezented/Perezented.github.io",
    category: frontEndString,
    imageUrl: "/projects/Perezented-Portfolio.gif",
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
          {projects.sort((a, b) => a.sortOrder - b.sortOrder).filter(x => x.category === currentSelectedCategory || currentSelectedCategory === "All").map((project) => (
            <ProjectCard
              key={project.id}
              project={{
                name: project.title,
                description: project.description,
                technologies: project.technologies,
                image: typeof project.imageUrl === 'string' ? project.imageUrl : project.imageUrl.src,
                imageAlt: project.title,
                liveUrl: project.liveUrl,
                githubUrl: project.githubUrl,
                category: project.category,
                live: project.live
              }}
            />
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
