import React from 'react'

export default function AboutComponent() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text underline mt-20">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center border border-[#116b4e] rounded-md p-4">
                    <h3 className="text-xl font-medium">M&aacute;ximo Gomez</h3>
                    <p className="text-base text-teal-500">CEO</p>
                </div>
                <div className="flex flex-col items-center border border-[#116b4e] rounded-md p-4">
             <h3 className="text-xl font-medium">Sebasti&aacute;n Carabajal</h3>
                    <p className="text-base text-teal-500">Marketing Manager</p>
                </div>
                <div className="flex flex-col items-center border border-[#116b4e] rounded-md p-4">
             <h3 className="text-xl font-medium">Salustiano Vargas</h3>
                    <p className="text-base text-teal-500">Engineering Manager</p>
                </div>
                <div className="flex flex-col items-center border border-[#116b4e] rounded-md p-4">
             <h3 className="text-xl font-medium">Manuel Garc&iacute;a</h3>
                    <p className="text-base text-teal-500">Finance Manager</p>
                </div>
            </div>
        </div>
    )
}