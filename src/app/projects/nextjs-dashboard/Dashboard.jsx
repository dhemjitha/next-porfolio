import React from 'react'
import Image from 'next/image';

function Dashboard() {
    return (
        <div className="py-10 text-white">
            <h1 className="text-3xl font-bold mb-4">
                <span className="font-bold">ACME Dashboard</span> - Financial Management
            </h1>
            <p className="text-gray-300 mb-6">
                ACME Dashboard is a comprehensive financial platform designed to provide businesses with real-time insights
                into their financial performance and management.
            </p>

            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Real-Time Financial Insights</li>
                        <li>Invoice and Payment Management</li>
                        <li>Customer Financial Data Tracking</li>
                        <li>Admin Dashboard for User and System Management</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Dashboard Preview</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/dashboard/image1.png"
                            alt="ACME Dashboard Screenshot"
                            width={800}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
                    <p className="text-gray-300">
                        - Frontend: Next.js, Tailwind CSS <br />
                        - Backend: Next.js with TypeScript <br />
                        - Database: PostgreSQL with Prisma ORM <br />
                        - Authentication: NextAuth.js <br />
                        - Deployment: Vercel
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">Impact</h2>
                    <p className="text-gray-300">
                        - Real-time updates for financial data with optimized performance. <br />
                        - Enhanced efficiency for managing invoices and payments. <br />
                        - Improved customer data tracking and reporting.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Explore</h2>
                    <p>
                        Check out the live project:{" "}
                        <a
                            href="https://nextjs-dashboard-dhemjithas-projects.vercel.app/"
                            className="text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ACME Dashboard Live Demo
                        </a>
                    </p>
                    <p>
                        View the code:{" "}
                        <a
                            href="https://github.com/dhemjitha/nextjs-dashboard"
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

export default Dashboard;
