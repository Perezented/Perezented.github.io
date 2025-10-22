import Link from 'next/link';
import ProjectCard from './ProjectCard';

type WhatIAmWorkingOnProps = object

export default function WhatIAmWorkingOn({}: WhatIAmWorkingOnProps) {
  const whatImWorkingOn = [
    {
      name: "Appointment System",
      description: "A comprehensive appointment scheduling platform built with React and TypeScript. Features include real-time calendar management, payment processing (Stripe/PayPal/Square), automated SMS/email campaigns, invoice generation, and WebSocket notifications. Supports multiple user roles with role-based access control and integrates with third-party calendars. Responsive Material UI design with light/dark themes.",
      technologies: [
        "React 19",
        "TypeScript",
        "Material UI",
        "React Router 7",
        "React Hook Form",
        "Socket.IO",
        "Axios",
        "DayJS",
        "WebSockets"
      ],
      liveUrl: "https://appointmylife.vercel.app/",
      image: "/appointmentSystem/Appointment-WebSockets-Toasts.gif",
      images: [
        "/appointmentSystem/Appointment-SSO.gif",
        "/appointmentSystem/Appointment-WebSockets-Toasts.gif",
      ],
      imageAlt: 'Appointment System website demo showing calendar scheduling, invoice management, and real-time notifications'
    },
    {
      name: "Appointment System Backend",
      description: "Node.js/TypeScript backend powering a comprehensive appointment scheduling platform. Features include JWT authentication with role-based access control, SSO, real-time updates via WebSockets, multi-location support, payment processing (Stripe/PayPal/Square), automated SMS/email campaigns, invoice generation, and background job scheduling. Provides a robust RESTful API with MongoDB integration and comprehensive logging.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Passport.js",
        "Agenda",
        "JWT",
        "Twilio",
        "Nodemailer",
        "Stripe/PayPal APIs",
        "Handlebars",
        "google-apis",
        "Winston",
        "Helmet",
        "Morgan"
      ],
      liveUrl: "https://appointmylife.vercel.app/",
      image: "/appointmentSystem/AppointmentSystem-Postman.png",
      images: [
        "/appointmentSystem/AppointmentSystem-Postman.png",
        "/appointmentSystem/AppointmentSystem-mongodb.png",
        "/appointmentSystem/AppointmentSystem-AppointmentController.png",
      ],
      imageAlt: 'Appointment System backend architecture showing API endpoints, WebSocket integration, and payment processing workflows',
      carouselLength: 4_000,
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          What I Am Working On
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 '>
          {whatImWorkingOn.map((project) => (
            <div key={project.name} className="mt-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col lg:flex-row">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}