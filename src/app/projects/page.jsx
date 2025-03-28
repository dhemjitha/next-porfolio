'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Projects() {
  const router = useRouter();

  const projects = [
    {
      title: 'HirelyAI - AI-Powered Hiring Revolution',
      description: 'Streamlining the hiring process using AI technologies.',
      link: '/projects/hirelyai',
      projectLink: 'https://aidf-front-end-dulran.netlify.app/',
    },
    {
      title: 'Horizone - AI-Powered Hotel Booking',
      description: 'An innovative platform offering personalized hotel recommendations using AI.',
      link: '/projects/horizone',
      projectLink: 'https://next-aidf-dulran.vercel.app/'
    },
    {
      title: 'ACME Dashboard - Financial Management Platform',
      description: 'A full-stack financial dashboard built with Next.js, Prisma, and PostgreSQL.',
      link: '/projects/nextjs-dashboard',
      projectLink: 'https://nextjs-dashboard-dhemjithas-projects.vercel.app/'
    },
    {
      title: 'ShopZoneAI - AI-Powered E-commerce Platform',
      description: 'An AI-driven e-commerce platform offering personalized shopping experiences with intelligent recommendations and secure payment integration.',
      link: '/projects/shopzoneai',
      projectLink: 'https://aidf-e-commerce-front-end-dulran.netlify.app/'
    }


  ];

  const navigateToDetails = (path) => {
    router.push(path);
  };

  return (
    <div className="py-5 text-white min-h-screen">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className="py-2">Here is what I have accomplished:</p>
      <div className="mt-6 space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="ml-2 pb-4 border-b border-secondary/15">
            <Link href={project.link}>
              <p className="text-lg font-semibold hover:underline">
                {project.title}
              </p>
            </Link>
            <p className="text-gray-300 mt-2">{project.description}</p>

            <div className="mt-3">
              <button
                onClick={() => navigateToDetails(project.link)}
                className="text-blue-400 text-sm hover:underline mr-4"
              >
                Read Details
              </button>

              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;