import React from 'react'
import Carrousel from '@/components/Carrousel'
import Image from 'next/image'

export default function Images() {
    return (
        <main className='min-h-screen'>
            <Image src={"/plantabaja.png"} width={1000} height={600} alt='Plano de la planta baja.' />
            <Image src={"/plantaalta.png"} width={1000} height={600} alt='Plano de la planta alta.' /> 
        </main>
    )
}
