import React from 'react'
import Image from 'next/image';

function HirelyAi() {
    return (
        <div className="py-10 text-white">
            <h1 className="text-3xl font-bold mb-4">
                <span className="text-underlay-2">HirelyAI</span> - AI-Powered Hiring Revolution
            </h1>
            <p className="text-gray-300 mb-6">
                HirelyAI streamlines the hiring process using advanced AI technologies. It helps employers match candidates
                with job roles efficiently by leveraging machine learning algorithms for resume parsing and matching.
            </p>

            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>AI Resume Matching: Matches candidates to job descriptions based on skills and experience.</li>
                        <li>Automated Candidate Ranking: Scores candidates automatically based on job requirements.</li>
                        <li>User Dashboard: Manage and view candidates with an intuitive, user-friendly interface.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2"></h2>
                    <div className="grid grid-cols-1 gap-4">
                        <Image 
                            src="/hirelyai/image1.png" 
                            alt="HirelyAI Dashboard Screenshot" 
                            width={800} 
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
                    <p className="text-gray-300">
                        - Frontend: React.js, Tailwind CSS <br />
                        - Backend: Node.js, Express.js <br />
                        - Database: MongoDB <br />
                        - AI Integration: GPT-3.5 Turbo <br />
                        - Authentication: Clerk
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Impact</h2>
                    <p className="text-gray-300">
                        - Reduced hiring process time by 50%. <br />
                        - Improved job-to-candidate matching accuracy by 75%.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Explore</h2>
                    <p>
                        Check out the live project:{" "}
                        <a
                            href="https://aidf-front-end-dulran.netlify.app/"
                            className="text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            HirelyAI Live Demo
                        </a>
                    </p>
                    <p>
                        View the code:{" "}
                        <a
                            href="https://github.com/dhemjitha/aidf-front-end"
                            className="text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default HirelyAi