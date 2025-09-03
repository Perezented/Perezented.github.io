import { AcademicCapIcon, BriefcaseIcon, HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function About() {
  const skills = [
    'JavaScript/TypeScript',
    'React',
    'Next.js',
    'Remix.js',
    'C#',
    'SQL',
    'Asp.NET Razor',
    'Wordpress',
    'DotNetNuke (DNN)',
    'AngularJS',
    'Node.js/Express',
    'MongoDB',
    'PostgreSQL',
    'Bootstrap',
    'Tailwind CSS',
    'Git',
    'Docker',
    'Python',
    'Jest',
    'Playwright',
    'Cypress'
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            About Me
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for web development.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Story
            </h2>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p className="mb-6">
                I&apos;m a passionate web developer with a love for creating digital experiences that make a difference.
                My journey into programming started with curiosity and has grown into a full-blown passion for
                building innovative solutions.
              </p>
              <p className="mb-6">I&apos;m a systems thinker and creative builder who thrives at the intersection of precision and play. With deep expertise in SQL scripting, modern web frameworks like Remix.js and Tailwind CSS, and robust scripting across PowerShell, Bash, and JavaScript, I design solutions that are modular, scalable, and elegant.</p>
              <p className="mb-6">Whether I&apos;m optimizing Entity Framework queries, automating Git workflows, or crafting regex patterns to parse complex data structures, I bring a methodical rigor and a touch of curiosity to every challenge. My work spans backend infrastructure, frontend styling, performance tracking, and hardware integration—always with a focus on reliability, adaptability, and user experience.</p>
              <p className="mb-6">I believe that good code tells a story: one of clarity, efficiency, and thoughtful design. From debugging shipping logic in C# to customizing SteelSeries mouse profiles through scripting, I approach each task with a blend of technical mastery and creative exploration.</p>
              <p className="mb-6">When I&apos;m not refining systems or writing reusable utilities, I’m likely experimenting with filler data generation, baking with precision, or drafting empathetic communications that connect people and ideas.</p>
            </div>
          </div>

          {/* Profile image */}
          <div className="lg:order-first self-center mx-auto">
            <Image src="/ascii_profile_pic_.jpg" alt="Profile Image" width={500} height={500} className='rounded' />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Michael Perez</h3>
            </div>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Experience & Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <BriefcaseIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Frontend Developer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Clarity Ventures</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">April 2021 - Aug 2025</p>
                  <ul className='text-gray-600 dark:text-gray-300 mt-2 list-disc pl-5'>
                    <li>Proficient in <strong>TypeScript</strong> and <strong>JavaScript</strong> for building dynamic web applications.</li>
                    <li>Extensive experience with front-end frameworks such as <strong>React</strong> and <strong>Angular</strong>.</li>
                    <li>Background in back-end development using <strong>C#</strong>.</li>
                    <li>Expertise in CSS frameworks, including <strong>Bootstrap</strong> and <strong>Tailwind CSS</strong>.</li>
                    <li>Hands-on experience with <strong>DNN (DotNetNuke)</strong> and <strong>WordPress</strong> for content management and web development.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AcademicCapIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Certificate from Bloom Tech, formerly Lambda School
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">2020</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    6-12 month program that covers web development, data science, and computer science fundamentals while gaining over 900 hours of coding experience. Certificate earned in October of 2020.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <HeartIcon className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Continuous Learning
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Always Growing</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Ongoing</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Staying up-to-date with the latest technologies and best practices in web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/50 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/70 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
