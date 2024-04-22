import React from 'react'
import { Button } from '@radix-ui/themes'

function Hero() {
    return (
        <div className=" flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-8 mb-4 py-4 text-center text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">Voyager IT</h2>
                    <p className="mt-2 text-center text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">A reliable telecommunications company.</p>
                    <div className="flex justify-center">
                        <Button className="mt-4 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                            View Our Projects
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero