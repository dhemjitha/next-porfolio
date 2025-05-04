import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'

function Hello() {
    return (
        <div>
            <div className="py-6">
                <Avatar className="w-20 h-20">
                    <AvatarImage
                        className="w-full h-full rounded-full"
                        src="/profile/dulran.jpeg"
                    />
                </Avatar>
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-white">Hello, I'm Dulran</h1>
            </div>
        </div>
    )
}

export default Hello
