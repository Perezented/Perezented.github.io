"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
  live?: boolean;
  images?: string[];
  carouselLength?: number;
}

interface ProjectCardProps {
  project: Project;
}
const AppointmentGifCarousel = ({ images, alt, length }: { images: string[]; alt: string; length?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, length ?? 10_000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [images.length, length]);

  return (
    <Image
      src={images[currentIndex]}
      alt={alt}
      width={1000}
      height={720}
      className="w-full h-auto object-cover object-top max-h-[400px] min-h-[400px]"
      priority
    />
  );
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col justify-between border border-gray-200 dark:border-gray-700">
      {project.images && project.images.length > 0
        ? (
          <div className="w-full relative">
            <AppointmentGifCarousel
              images={project.images}
              alt={project.imageAlt}
              length={project?.carouselLength}
            />
          </div>
        )
        : (
          <div className="h-[360px] w-full relative">
            < Image
              src={project.image}
              alt={project.imageAlt}
              width={640}
              height={360}
              className="w-full h-auto object-cover object-top max-h-[20rem] min-h-[20rem]"
              priority
            />
          </div>
        )
      }
      <div className="px-6 py-3 flex flex-col flex-grow justify-between">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>
          {project.category && (
            <span className="text-nowrap inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/50 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
              {project.category}
            </span>
          )}
        </div>

        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
          {project.description}
        </p>

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

        <div className={"mt-4 flex space-x-3"}>
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
          {!project.githubUrl && !project.liveUrl && (
            <div className="text-sm text-gray-500 dark:text-gray-400 min-h-[2.25rem]" />
          )}
        </div>
      </div>
    </div >
  );
}