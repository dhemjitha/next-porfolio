'use client'

import React from 'react'
import { Separator } from '../ui/separator'
import { Avatar, AvatarImage } from '../ui/avatar';
import { SocialIcon } from "react-social-icons";
import Link from 'next/link';
import SocialLinks from './SocialLinks';

function Footer() {
    return (
        <footer className="flex flex-col  max-w-screen-lg mx-auto gap-y-3 py-5  text-white">
            <Separator />

            <Avatar>
                <AvatarImage src="/profile/dulran.jpeg" />
            </Avatar>
            <div>
                <h1 className="font-extrabold">Dulran Hemjitha</h1>
            </div>
            <div>
                <div className="flex space-x-6 mt-0">
                    <SocialLinks/>
                </div>
            </div>

            <div className="mt-2 flex items-center justify-between font-semibold">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/#lets-talk">Let's Talk</Link>
            </div>
        </footer>
    )
}

export default Footer