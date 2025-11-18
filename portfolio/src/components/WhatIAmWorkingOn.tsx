"use client";
import ProjectCard from './ProjectCard';
import React, { useState } from 'react';

type WhatIAmWorkingOnProps = object

export default function WhatIAmWorkingOn({}: WhatIAmWorkingOnProps) {
  const whatImWorkingOn = [
    {
      name: "Appointment System",
      description: (
        <>
          A comprehensive appointment scheduling platform built with React and TypeScript. Features include real-time calendar management using WebSocket, payment processing (Stripe/PayPal/Square), automated SMS/email campaigns, and invoice generation. Supports multiple user roles with role-based access control and integrates with third-party calendars. Responsive Material UI design with light/dark themes.
          <br /><br />
          <strong>Demo Credentials:</strong><br />
          U: <CopyableKbd value="+15551234567" />
          <br /><br />
          P: <CopyableKbd value="OwnerPass123!" />
        </>
      ),
      technologies: [
        "React 19",
        "TypeScript",
        "Material UI",
        "React Router 7",
        "React Hook Form",
        "Socket.IO/WebSocket",
        "Axios",
        "DayJS",
      ],
      liveUrl: "https://appointmylife.vercel.app/",
      image: "/appointmentSystem/Appointment-WebSockets-Toasts.gif",
      images: [
        "/appointmentSystem/Appointment-SSO.gif",
        "/appointmentSystem/Appointment-WebSockets-Toasts.gif",
      ],
      imageProperty: 'unoptimized',
      imageAlt: 'Appointment System website demo showing calendar scheduling, invoice management, and real-time notifications'
    },
    {
      name: "Appointment System Backend",
      description: "Node.js/TypeScript backend. Features include JWT authentication with role-based access control, SSO (Google/Microsoft/Facebook), real-time updates via WebSockets, multi-location support, calendar syncing (Google Calendar, Outlook), payment processing (Stripe/PayPal/Square), and background job scheduling. Provides a robust RESTful API with MongoDB integration and comprehensive logging.",
      technologies: [
        "Node.js/Express",
        "MongoDB",
        "Socket.IO/WebSocket",
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
        "Morgan",
        "TypeScript",
      ],
      // liveUrl: "https://appointmylife.vercel.app/",
      image: "/appointmentSystem/AppointmentSystem-Postman.png",
      images: [
        "/appointmentSystem/AppointmentSystem-Postman.png",
        "/appointmentSystem/AppointmentSystem-mongodb.png",
        "/appointmentSystem/AppointmentSystem-AppointmentController.png",
      ],
      imageAlt: 'Appointment System backend architecture showing API endpoints, WebSocket integration, and payment processing workflows',
      carouselLength: 4_000,
    },
  ];

  // Toast component
  function Toast({ message, onClose }: { message: string; onClose: () => void }) {
    React.useEffect(() => {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }, [onClose]);
    return (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in">
        {message}
      </div>
    );
  }

  // Ripple effect component
  function Ripple({ x, y }: { x: number; y: number }) {
    return (
      <span
        className="absolute pointer-events-none rounded-full bg-white/40 animate-ripple"
        style={{
          left: x,
          top: y,
          width: 40,
          height: 40,
          transform: 'translate(-50%, -50%)',
        }}
      />
    );
  }

  // CopyableKbd component
  function CopyableKbd({ value }: { value: string }) {
    const [showToast, setShowToast] = useState(false);
    const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      navigator.clipboard.writeText(value);
      setShowToast(true);

      const rect = e.currentTarget.getBoundingClientRect();
      setRipple({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });

      setTimeout(() => setRipple(null), 400);
    };

    return (
      <span className="relative inline-block">
        <kbd
          style={{
            cursor: 'pointer',
            background: '#161616ff',
            padding: '2px 6px',
            borderRadius: '4px',
            fontFamily: 'monospace',
            position: 'relative',
            color: 'white',
            userSelect: 'none',
          }}
          title="Click to copy"
          onClick={handleClick}
        >
          {value}
          {ripple && <Ripple x={ripple.x} y={ripple.y} />}
        </kbd>
        {showToast && (
          <Toast message="Copied!" onClose={() => setShowToast(false)} />
        )}
        <style>{`
          @keyframes ripple {
            0% { opacity: 0.5; transform: scale(0.5);}
            100% { opacity: 0; transform: scale(2);}
          }
          .animate-ripple {
            animation: ripple 0.4s linear;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.3s;
          }
        `}</style>
      </span>
    );
  }

  return (
    <section className="py-16">
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