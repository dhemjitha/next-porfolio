'use client'

import React from 'react'
import { Separator } from '../ui/separator'
import { Avatar, AvatarImage } from '../ui/avatar';
import { SocialIcon } from "react-social-icons";

function Footer() {
    return (
        <footer className="flex flex-col  max-w-screen-lg mx-auto gap-y-3 py-5  text-white">
            <Separator />

            <Avatar>
                <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQHNo8f5n--PvA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720128085901?e=1740614400&v=beta&t=ptG_PFbouvLdtcjWa4JtRPTw_TA9Py72bHZoayLjBpQ" />
            </Avatar>
            <div>
                <h1 className="font-extrabold">Dulran Hemjitha</h1>
            </div>
            <div>
                <div className="flex space-x-6 mt-0">
                    <SocialIcon
                        url="https://github.com/dhemjitha"
                        style={{ height: 28, width: 28 }}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/dulran-hemjitha/"
                        style={{ height: 32, width: 32 }}
                    />
                    <SocialIcon
                        network="x"
                        url="https://x.com/dhemjitha"
                        style={{ height: 28, width: 28 }}
                    />
                    <SocialIcon
                        url="https://www.youtube.com/@dhemjitha"
                        style={{ height: 28, width: 28 }}
                    />
                </div>
            </div>

            <div className="mt-2 flex items-center justify-between font-semibold">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/#lets-talk">Let's Talk</a>
            </div>
            <div className="mt-5 flex justify-center">
                <span className="text-sm">
                    &copy; {new Date().getFullYear()} All Rights
                    Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer