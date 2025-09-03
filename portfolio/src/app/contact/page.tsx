'use client';


import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { sendContactEmail } from '@/utils/emailjs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await sendContactEmail(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError(`${err} Failed to send message. Please try again later.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I would love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                    <a
                    href="mailto:Perez6473@Gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                    Perez6473@Gmail.com
                    </a>
                </div>
              </div>

              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                    <a
                    href="tel:+19187799639"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                    +1 (918) 779-9639
                    </a>
                </div>
              </div>

              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">Okmulgee, Oklahoma</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Perezented"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/perezenting-michael/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {success && (
                <div className="p-3 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-center">
                  Thank you for your message! I will get back to you soon.
                </div>
              )}
              {error && (
                <div className="p-3 rounded bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-center">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

                <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-500 hover:via-purple-400 hover:to-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors disabled:opacity-60"
                disabled={loading}
                >
                {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-24 bg-gray-50 dark:bg-gray-800 rounded-lg px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ready to start your project?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Let us discuss how we can bring your ideas to life with modern web technologies.
          </p>
          <div className="mt-8">
            <a
              href="mailto:Perez6473@Gmail.com"
              className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-blue-500 hover:via-purple-400 hover:to-pink-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Send Email Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
