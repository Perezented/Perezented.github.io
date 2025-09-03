import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions and forecasts using external APIs.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Weather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Blog CMS",
    description: "A content management system for bloggers with markdown support, SEO optimization, and analytics integration.",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Frontend"
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "A recipe discovery app that helps users find recipes based on available ingredients with nutrition information.",
    technologies: ["React", "Recipe API", "Styled Components", "Jest"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Frontend"
  }
];

const categories = ["All", "Frontend", "Full Stack"];

export default function Projects() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            My Projects
          </h1>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for web development.
          </p> */}
          {/* Option 2 */}
          {/* 
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of my favorite projects, built with modern technologies and creative solutions.
            </p>
            */}
          {/* Option 3 */}

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some highlights from my journey as a developer—each project reflects my dedication to quality and innovation.
          </p>

          {/* Option 4 */}
          {/* 
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dive into my portfolio to see how I turn ideas into impactful digital experiences.
            </p>
            */}
          {/* Option 5 */}
          {/* 
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These projects demonstrate my expertise in building robust, user-friendly web applications.
            </p>
            */}
        </div>

        {/* Category filter - For now showing all projects */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-1 rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${category === "All"
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
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Project image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/50 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
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
                <div className="mt-6 flex space-x-3">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                      Live Demo
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
