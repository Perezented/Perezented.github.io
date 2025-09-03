import Image from "next/image";
import Link from 'next/link';
import { ArrowDownIcon, CodeBracketIcon, DevicePhoneMobileIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-60">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Michael Perez
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A passionate web developer creating modern, responsive, and user-friendly applications.
              I specialize in React, Next.js, and TypeScript.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                href="/projects"
                className="rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                >
                View My Work
                </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Get in touch <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDownIcon className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What I Do
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              I create digital experiences that are beautiful, functional, and user-centered.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 text-blue-600 dark:text-blue-400">
                <ComputerDesktopIcon className="h-12 w-12" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                Frontend Development
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-12 w-12 text-purple-600 dark:text-purple-400">
                <CodeBracketIcon className="h-12 w-12" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                Full Stack Development
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Building complete web applications with backend APIs, databases, and modern deployment practices.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-12 w-12 text-pink-600 dark:text-pink-400">
                <DevicePhoneMobileIcon className="h-12 w-12" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                Mobile-First Design
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Designing and developing applications that work seamlessly across all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Recent Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Here are some of my latest projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              name: 'Pro-Select Flooring',
              description: 'Flooring company based out of Tulsa, OK. ',
              technologies: ['React', 'Cypress', 'EmailJS', 'axios', 'react-router-dom'],
              image: '/psfhome.gif',
              imageAlt: 'Pro-Select Flooring website demo'
            }, {
              name: 'Clarity-Ecommerce Framework / Clarity Payhub',
              description: 'A payment processing platform that simplifies transactions for businesses.',
              technologies: ["Remix.js", "TypeScript", "C#", "MSSQL", "radix-ui", "Tailwind CSS"],
              image: '/PH-InvoiceAging.gif',
              imageAlt: 'Clarity Payhub for invoices on aging setting demo'
            }, {
              name: 'New Solutions',
              description: 'Hippa site',
              technologies: ['React', 'Clarity Ecommerce Framework', 'Bootstrap', 'DNN', 'C#'],
              image: '/SPG-Edit-Patient-Updates.gif',
              imageAlt: 'A full-stack hippa compliant application built with React.js and Node.js, ensuring secure user authentication and data protection...'
            }].map((project) => (
              <div
                key={project.name}
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500"></div> */}
                {/* Image src for gif */}
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover object-top max-h-[20rem]"
                  priority
                />
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text transition-colors">
                    <span>{project.name}</span>
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium
                          bg-${tech.toLowerCase() === 'react' || tech.toLowerCase() === 'c#' ? 'blue-50' : 'green-100'} 
                          dark:bg-${tech.toLowerCase() === 'react' || tech.toLowerCase() === 'c#' ? 'blue-900/50' : 'green-900/100'}
                          text-${tech.toLowerCase() === 'react' || tech.toLowerCase() === 'c#' ? 'blue-700' : 'gray-700'}
                          dark:text--${tech.toLowerCase() === 'react' || tech.toLowerCase() === 'c#' ? 'blue-300' : 'gray-300'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}