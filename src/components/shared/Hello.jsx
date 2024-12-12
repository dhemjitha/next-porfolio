import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Separator } from '../ui/separator'
import { SocialIcon } from 'react-social-icons'

function Hello() {
    return (
        <div>
            <div className="py-6">
                <Avatar className="w-20 h-20"> {/* Increase the width and height here */}
                    <AvatarImage
                        className="w-full h-full rounded-full" // Ensure image fills the avatar and is circular
                        src="https://media.licdn.com/dms/image/v2/D5603AQHNo8f5n--PvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720128085923?e=1735171200&v=beta&t=flvEb17uYxmTNmJVPPL9xI8rU8_cS8F98cYCJ-JJl1U"
                    />
                </Avatar>
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-white">Hello, I'm Dulran</h1>
            </div>
            <div className="py-5 text-white">
                <h1 className="font-semibold">Aspiring Full Stack Developer</h1>
                <h1>ReactJS | NextJS | ExpressJS | TypeScript</h1>
            </div>
            <div className="flex space-x-6 mt-4">
                <SocialIcon
                    url="https://github.com/dhemjitha"
                    style={{ height: 32, width: 32 }}
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/dulran-hemjitha/"
                    style={{ height: 32, width: 32 }}
                />
                <SocialIcon
                    network="x"
                    url="https://x.com/dhemjitha"
                    style={{ height: 32, width: 32 }}
                />
                <SocialIcon
                    url="https://www.youtube.com/@dhemjitha"
                    style={{ height: 32, width: 32 }}
                />
            </div><br />
            <Separator />
        </div>
    )
}

export default Hello
