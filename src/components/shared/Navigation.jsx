'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function Navigation() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const isActiveLink = (path) => pathname === path;

    return (
        <nav className="flex py-5 justify-between items-center">
            <div>
                <a href="/" className="text-3xl font-bold text-white text-underlay-1">
                    DulranDev
                </a>
            </div>

            {/* Align the buttons to the right */}
            <div className="lg:flex lg:gap-x-10 ml-auto hidden justify-center text-white">
                <Link
                    href="/"
                    className={`block rounded-lg px-2 py-1 font-semibold ${isActiveLink('/') ? 'bg-blue-700 text-white' : ''
                        }`}
                >
                    Home
                </Link>
                
                <Link
                    href="/about"
                    className={`block rounded-lg px-2 py-1 font-semibold ${isActiveLink('/about') ? 'bg-blue-700 text-white' : ''
                        }`}
                >
                    About
                </Link>

                <Link
                    href="/#lets-talk"
                    className={`block rounded-lg px-2 py-1 font-semibold`}
                >
                    Let's Talk
                </Link>
            </div>

            <div className="flex items-center space-x-2">
                <button className="lg:hidden focus:outline-none focus:ring-0 text-white" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg z-50 flex justify-center items-center">
                    <nav className="flex flex-col items-center space-y-6 text-white text-2xl font-semibold">
                        <Link
                            href="/"
                            className="dark:text-gray-300 dark:hover:text-white"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="dark:text-gray-300 dark:hover:text-white"
                            onClick={toggleMenu}
                        >
                            About
                        </Link>

                        <Link
                            href="/#lets-talk"
                            className="dark:text-gray-300 dark:hover:text-white"
                            onClick={toggleMenu}
                        >
                            Let's Talk
                        </Link>
                    </nav>
                    <button
                        className="absolute top-6 right-6 text-gray-300"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navigation;
