"use client"
import React from 'react'
import ButtonHero from './Button'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Hero() {

    const [text] = useTypewriter({
        words: ['solutions.', 'services.', 'support.', 'experience.', 'company.', 'team.', 'experts.'],
        loop: false,
        deleteSpeed: 80,
        typeSpeed: 100, // Optional
    })
    
    return (
        <div className=" flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-8 mb-4 py-4 text-center text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">Voyager IT</h2>
                    <p className="mt-2 text-center text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">The best IT {text}<Cursor cursorStyle="|" cursorColor="black"/></p>
                    <div className="flex justify-center mt-6">
                        <ButtonHero />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero