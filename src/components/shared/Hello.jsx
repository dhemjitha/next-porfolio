import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'

function Hello() {
    return (
        <div>
            <div className="py-6">
                <Avatar className="w-20 h-20">
                    <AvatarImage
                        className="w-full h-full rounded-full"
                        src="https://media.licdn.com/dms/image/v2/D5603AQHNo8f5n--PvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720128085923?e=1746057600&v=beta&t=lmKpyElbPzGnR5fikZu3En6KfDpZ8CrnPlqRfek6JSQ"
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
