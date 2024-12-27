import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'

function Hello() {
    return (
        <div>
            <div className="py-6">
                <Avatar className="w-20 h-20">
                    <AvatarImage
                        className="w-full h-full rounded-full"
                        src="https://media.licdn.com/dms/image/v2/D5603AQHNo8f5n--PvA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720128085901?e=1740614400&v=beta&t=ptG_PFbouvLdtcjWa4JtRPTw_TA9Py72bHZoayLjBpQ"
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
