import React from 'react'
import { Separator } from '../ui/separator'
import SocialLinks from './SocialLinks'

function Title() {

    return (
        <div>
            <div className="py-5 text-white">
                <h1 className="font-semibold">Aspiring Full Stack Developer</h1>
                <h1>ReactJS | NextJS | ExpressJS | TypeScript</h1>
            </div>
            <SocialLinks/>
            <Separator />
        </div>
    )
}

export default Title