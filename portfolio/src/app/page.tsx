import Link from 'next/link';
import { ArrowDownIcon, CodeBracketIcon, ComputerDesktopIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import SkillCard from "@/components/SkillCard";
import ProjectCard from '../components/ProjectCard';
import WhatIAmWorkingOn from '@/components/WhatIAmWorkingOn';

export default function Home() {
  const recentProjects = [
    {
      name: 'Clarity-Ecommerce Framework / Clarity Payhub',
      description: 'A full-stack e-commerce application originally built with React.js and Bootstrap, featuring user authentication, payment processing, and admin dashboard. The project was then converted to Remix.js with Tailwind CSS.',
      technologies: ["Remix.js", "TypeScript", "C#", "MSSQL", "radix-ui", "Tailwind CSS"],
      image: '/projects/PH-InvoiceAging.gif',
      imageAlt: 'Clarity Payhub for invoices on aging setting demo'
    },
    {
      name: "Destination Athlete",
      description: "Destination Athlete offers custom team gear, fundraising tools, and performance services for athletes and organizations. Built with ASP.NET, it uses JavaScript, jQuery, and Microsoft IIS for backend and hosting.",
      technologies: ["DNN", "AngularJS", "TypeScript", "MSSQL", "Bootstrap"],
      liveUrl: "https://destinationathlete.com/",
      image: "/projects/ATHLT-Store-Listing-Max-08406.gif",
      imageAlt: 'Destination Athlete website demo'
    },
    {
      name: 'Pro-Select Flooring',
      description: 'Pro-Select Flooring showcases commercial flooring expertise across hospitals, schools, churches, and businesses in Oklahoma and surrounding states. Based out of Tulsa, OK - Pro-Select Flooring has over 100 years of experience collectively.',
      technologies: ['React', 'Cypress', 'EmailJS', 'axios', 'react-router-dom'],
      image: '/projects/psfhome.gif',
      liveUrl: 'https://pro-selectflooring.com/',
      imageAlt: 'Pro-Select Flooring website demo'
    }
  ];

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
                className="rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
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

      {/* Skills Section (What I Do) */}
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
            <SkillCard
              icon={<ComputerDesktopIcon className="h-12 w-12" />}
              iconClassName="text-blue-600 dark:text-blue-400"
              title="Frontend Development"
              description="Building responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks."
            />
            <SkillCard
              icon={<CodeBracketIcon className="h-12 w-12" />}
              iconClassName="text-purple-600 dark:text-purple-400"
              title="Backend & API Integration"
              description="Developing robust backend APIs, integrating databases, and ensuring seamless data flow for full stack solutions."
            />
            <SkillCard
              icon={<DevicePhoneMobileIcon className="h-12 w-12" />}
              iconClassName="text-pink-600 dark:text-pink-400"
              title="Mobile-First & Responsive Design"
              description="Designing applications that look and perform great on all devices, prioritizing mobile usability and accessibility."
            />
          </div>
        </div>
      </section>

      {/* What I Am Working On Section */}
      <WhatIAmWorkingOn />

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
            {recentProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Cool Projects Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Cool Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              A selection of fun and interesting projects I've worked on in my spare time.
            </p>
          </div>
        </div>
        <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white dark:bg-gray-800 p-8 ">
          <ProjectCard
            project={{
              name: 'Month & Year Progress Bar Script',
              description: 'A small Bash script that prints 50-character progress bars and numeric stats for the current month, business days in the month, and the year (minutes/hours/days/weeks elapsed). Includes a watch mode to auto-refresh and requires GNU date / awk for accurate date arithmetic.',
              technologies: ['shell scripting', 'bash'],
              githubUrl: 'https://github.com/Perezented/Month-And-Year-Progress-Bar-Script',
              image: '/projects/month-year-progress-bar.png',
              imageAlt: 'Month & Year Progress Bar Script demo'
            }}
          />
          <ProjectCard
            project={{
              name: 'Bit Flipper',
              description: 'A Python web app that visualizes numbers as binary bits grouped into 8-bit bytes with neon styling and animations. Features two modes: bit count to bytes conversion and binary bytes representation. Includes keyboard shortcuts for quick navigation and E2E tests with Playwright.',
              technologies: ['Python', 'Flask', 'JavaScript', 'CSS', 'HTML', 'Playwright'],
              githubUrl: 'https://github.com/Perezented/Bit-Flipper',
              liveUrl: 'https://bit-flipper.vercel.app/',
              image: '/projects/binary-demo.gif',
              images: ['/projects/binary-demo.gif', '/projects/binary-demo.gif'],
              imageAlt: 'Bit Flipper app showing binary visualization with neon-styled 8-bit byte grids'
            }}
          />
          <ProjectCard
            project={{
              name: "Pumpkin — Raspberry Pi Jack-o'-Lantern",
              description: (
                <>
                  A motion-sensing Halloween prop that rotates to face people who walk by. Built with a Raspberry Pi, PIR motion sensors, an MG995 servo and LEDs on a 3D-printed base.<br/>
                  See coverage: <a href="https://blog.pishop.co.za/this-creepy-raspberry-pi-jack-o-lantern-turns-to-face-anyone-who-walks-by/" target="_blank" className='underline' rel="noopener noreferrer">PiShop</a> and <a href="https://www.tomshardware.com/raspberry-pi/this-creepy-raspberry-pi-jack-o-lantern-turns-to-face-anyone-who-walks-by" target="_blank" className='underline' rel="noopener noreferrer">Tom's Hardware</a>.
                </>
              ),
              technologies: ['Raspberry Pi', 'PIR motion sensors', 'Servo (MG995)', 'LEDs', '3D printing'],
              videoUrl: 'https://www.youtube.com/shorts/hiRQDHXuJxw',
              image: 'https://img.youtube.com/vi/hiRQDHXuJxw/hqdefault.jpg',
              imageProperty: 'unoptimized',
              imageAlt: 'Pumpkin jack-o-lantern rotating to track people',
            }}
          />

          {/* <ProjectCard
            project={{
              name: 'Python ASCII Image',
              description: 'A small Python script that converts images into ASCII art. It resizes and grayscales the input image, maps pixel brightness to ASCII characters, and saves the output to a text file. The width/height are adjustable, and it supports various image formats.',
              technologies: ['Python', 'Pillow (PIL)'],
              githubUrl: 'https://github.com/Perezented/Python-Ascii-Image',
              image: '/projects/Ascii_art.py.gif',
              imageAlt: 'A GIF demonstration of ASCII art generated from an image',
            }}
          /> */}

        </div>
      </section>

    </div>
  );
}
