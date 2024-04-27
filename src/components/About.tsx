import React from 'react'

export default function AboutComponent() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text underline mt-20">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center bg-gradient-to-r from-teal-200 to-teal-500 rounded-md p-4">
                    <h3 className="text-xl font-medium">Maximo Gomez</h3>
                    <p className="text-base text-gray-600">CEO</p>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-r from-teal-200 to-teal-500 rounded-md p-4">
             <h3 className="text-xl font-medium">Sebastian Carabajal</h3>
                    <p className="text-base text-gray-600">Marketing Manager</p>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-r from-teal-200 to-teal-500 rounded-md p-4">
             <h3 className="text-xl font-medium">Salustiano Vargas</h3>
                    <p className="text-base text-gray-600">Engineering Manager</p>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-r from-teal-200 to-teal-500 rounded-md p-4">
             <h3 className="text-xl font-medium">Manuel Garcia</h3>
                    <p className="text-base text-gray-600">Finance Manager</p>
                </div>
            </div>
        </div>
    )
}