'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Separator } from '../ui/separator';

function Projects() {
  const router = useRouter();
  
  const projects = [
    {
      title: 'HirelyAI - AI-Powered Hiring Revolution',
      description: 'Streamlining the hiring process using AI technologies.',
      link: '/projects/hirelyai',
      projectLink: 'https://aidf-front-end-dulran.netlify.app/'
    },
    {
      title: 'AuraFashion - Modern E-Commerce Platform',
      description: 'A seamless shopping experience with advanced features.',
      link: '/projects/aurafashion',
      projectLink: 'https://aurafashion.rf.gd/'
    },
  ];

  const navigateToDetails = (path) => {
    router.push(path);
  };

  return (
    <div className="py-5 text-white">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <p className="py-2">Here is what I have accomplished:</p>
      <div className="mt-6 space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="ml-2 pb-4">
            <Link href={project.link}>
              <p className="text-lg font-semibold hover:underline">
                {project.title}
              </p>
            </Link>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <div className="mt-3 flex space-x-4">
              <button 
                onClick={() => navigateToDetails(project.link)}
                className="text-blue-400 text-sm hover:underline"
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
      <Separator/>
    </div>
  );
}

export default Projects;