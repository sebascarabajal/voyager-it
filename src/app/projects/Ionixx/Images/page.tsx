import React from 'react'
import Image from 'next/image'

export default function Images() {
    return (
        <main className='min-h-screen'>
            <div className='flex flex-col items-center justify-center'>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-20 mb-10">Planos en 2D del cableado estructurado.</h2>
                <Image src={"/baja.png"} width={1000} height={600} alt='Plano de la planta baja.' />
                <Image src={"/alta.png"} width={1000} height={600} alt='Plano de la planta alta.' />
            </div>
        </main>
    )
}
