'use client'

import React from 'react'

function Footer() {
    return (
        <footer className="flex flex-col items-center md:items-stretch max-w-screen-lg mx-auto gap-y-6 py-12  text-white">
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-y-6 md:gap-y-0">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Me</a>
                <a href="/help">Need Help?</a>
            </div>
            <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-y-6 md:gap-y-0">
                <span className="text-sm">
                    &copy; {new Date().getFullYear()} All Rights
                    Reserved.
                </span>
                <span className="flex items-center text-sm">
                    <a href="/" className="text-3xl font-bold text-white text-underlay-1">
                        DulranDev
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer