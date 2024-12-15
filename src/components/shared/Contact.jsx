import React from 'react'
import { AtSign } from 'lucide-react'
import { PhoneCall } from 'lucide-react'

function Contact() {
    return (

        <section id="lets-talk">
            <div className=" text-white">
                <h1 className="text-2xl font-semibold">Let's Talk</h1>
                <p className="mt-4">
                    Feel free to contact me via email or reach out to me on my personal
                    number:
                </p>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center space-x-2">
                        <AtSign className="w-4 h-4" />
                        <a href="mailto:dhemjitha@gmail.com" className="text-blue-500">
                            dhemjitha@gmail.com
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <PhoneCall className="w-4 h-4" />
                        <a href="tel:+94 78 629 5820" className="text-blue-500">
                            +94 78 629 5820
                        </a>
                    </li>
                </ul>
            </div>
        </section>


    )
}

export default Contact