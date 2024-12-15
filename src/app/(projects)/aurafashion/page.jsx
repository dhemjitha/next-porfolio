'use client';

import React from 'react';
import Image from 'next/image';

function page() {
    return (
        <div className="py-10 text-white">
            <h1 className="text-3xl font-bold mb-4">
                <span className="text-underlay-3">AuraFashion</span> - The Ultimate Fashion Experience
            </h1>
            <p className="text-gray-300 mb-6">
                AuraFashion is an innovative platform designed to revolutionize the way you experience online fashion. From personalized
                recommendations to seamless shopping experiences, AuraFashion brings the latest trends to your fingertips.
            </p>

            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Personalized Fashion Recommendations</li>
                        <li>Seamless Online Shopping</li>
                        <li>Interactive Fashion Lookbook</li>
                        <li>Real-Time Trend Analysis</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
                    <p className="text-gray-300">
                        - Frontend: HTML, Bootstap CSS, JavaScript <br />
                        - Backend: PHP <br />
                        - Database: MySQL <br />
                        - Payment Integration: PayHere <br />
                    </p>
                </div>

                {/* <div>
                    <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Image
                            src="/images/aura1.jpg"
                            alt="Fashion Preview 1"
                            width={400}
                            height={300}
                            className="rounded-lg object-cover"
                        />
                        <Image
                            src="/images/aura2.jpg"
                            alt="Fashion Preview 2"
                            width={400}
                            height={300}
                            className="rounded-lg object-cover"
                        />
                        <Image
                            src="/images/aura3.jpg"
                            alt="Fashion Preview 3"
                            width={400}
                            height={300}
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div> */}

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Impact</h2>
                    <p className="text-gray-300">
                        - Enhanced shopping efficiency by 60%. <br />
                        - Increased customer satisfaction through AI-driven personalization.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold ">Explore</h2>
                    <p>
                        Check out the live project:{" "}
                        <a
                            href="https://your-live-url.com"
                            className="text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            AuraFashion Live Demo
                        </a>
                    </p>
                    {/* <p>
                        View the code:{" "}
                        <a
                            href="https://github.com/yourgithub/aura-fashion"
                            className="text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </p> */}
                </div>
            </section>
        </div>
    );
}

export default page;
