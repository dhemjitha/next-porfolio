import React from 'react'
import { Separator } from '../ui/separator'
import { SocialIcon } from 'react-social-icons'

function Title() {
  return (
    <div>
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

export default Title