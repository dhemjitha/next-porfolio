import React from 'react'
import Image from 'next/image';

function Horizone() {
    return (
        <div className="py-10 text-white">
            <h1 className="text-3xl font-bold mb-4">
            <span className="font-bold">Hori</span>
            <span className="text-blue-500 font-bold">zone</span> - AI-Powered Hotel Booking
            </h1>
            <p className="text-gray-300 mb-6">
                Horizone is an innovative hotel booking platform leveraging AI to provide personalized recommendations
                based on user preferences, ensuring a seamless booking experience.
            </p>

            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>AI-Powered Hotel Recommendations</li>
                        <li>Seamless Booking and Secure Payments</li>
                        <li>Real-time Admin Dashboard for Hotel Management</li>
                        <li>Personalized User Experience with AI Assistance</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2"></h2>
                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/horizone/image1.png"
                            alt="Horizone Dashboard Screenshot"
                            width={800}
                            height={300}
                            className="rounded-lg"
                        />
                        <Image
                            src="/horizone/image2.png"
                            alt="Horizone Dashboard Screenshot"
                            width={800}
                            height={300}
                            className="rounded-lg"
                        />
                        <Image
                            src="/horizone/image3.png"
                            alt="Horizone Dashboard Screenshot"
                            width={800}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
                    <p className="text-gray-300">
                        - Frontend: Next.js, Tailwind CSS, Shadcn UI <br />
                        - Backend: Next.js with TypeScript <br />
                        - Database: MongoDB <br />
                        - AI Integration: OpenAI 4o & LangChain <br />
                        - Authentication: Clerk <br />
                        - Deployment: Vercel
                    </p>
                </div>

                <div>
                <h2 className="text-2xl font-semibold mb-3">Impact</h2>
                    <p className="text-gray-300">
                        - Faster booking experience with AI-driven insights. <br />
                        - Enhanced user engagement through personalized recommendations. <br />
                        - Improved hotel management with real-time data.
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
                            href="https://github.com/dhemjitha/next-aidf"
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

export default Horizone;