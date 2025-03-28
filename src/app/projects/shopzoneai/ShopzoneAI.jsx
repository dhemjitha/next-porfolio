import React from 'react'
import Image from 'next/image';

function ShopZoneAI() {
    return (
        <div className="py-10 text-white">
            <h1 className="text-3xl font-bold mb-4">
                <span className="font-bold">ShopZoneAI</span> - AI-Powered E-commerce
            </h1>
            <p className="text-gray-300 mb-6">
                ShopZoneAI is an AI-driven e-commerce platform that provides personalized shopping experiences
                through AI-powered recommendations, making online shopping more intuitive and efficient.
            </p>

            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>AI-Powered Product Recommendations</li>
                        <li>Seamless Shopping Experience</li>
                        <li>Personalized User Interface</li>
                        <li>Secure Payment Integration</li>
                    </ul>
                </div>

                <div>
                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/shopzoneai/image1.png"
                            alt="ShopZoneAI Dashboard Screenshot"
                            width={800}
                            height={300}
                            className="rounded-lg"
                        />
                        <Image
                            src="/shopzoneai/image2.png"
                            alt="ShopZoneAI Dashboard Screenshot"
                            width={800}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
                    <p className="text-gray-300">
                        - Frontend: React.js, Tailwind CSS, Shadcn UI <br />
                        - Backend: Node.js, Express.js <br />
                        - Database: MongoDB <br />
                        - AI Integration: OpenAI 4o & LangChain<br />
                        - Authentication: Clerk <br />
                        - Deployment: Vercel
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">Impact</h2>
                    <p className="text-gray-300">
                        - Personalized shopping experiences for each user. <br />
                        - AI-driven recommendations that improve sales conversions. <br />
                        - Secure and seamless checkout process for enhanced user satisfaction.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Explore</h2>
                    <p>
                        Check out the live project:{" "}
                        <a
                            href="https://aidf-e-commerce-front-end-dulran.netlify.app/"
                            className="text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ShopZoneAI Live Demo
                        </a>
                    </p>
                    <p>
                        View the code:{" "}
                        <a
                            href="https://github.com/dhemjitha/aidf-e-commerce-front-end"
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

export default ShopZoneAI;
