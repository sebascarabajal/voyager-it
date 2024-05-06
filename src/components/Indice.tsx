import React from 'react'
import Link from 'next/link'

export default function Indice() {
    return (
        <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-20">Ionixx Technologies.</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Link href={"./Ionixx/Introduccion"} className="text-lg px-4 py-2 text-teal-500 border-[#116b4e] border rounded md:w-1/5">Introduccion</Link>
                <Link href={"./Ionixx/Materiales"} className="text-lg px-4 py-2 text-teal-500 border-[#116b4e] border rounded md:w-1/5">Lista de materiales</Link>
                <Link href={"./Ionixx/Cableado"} className="text-lg px-4 py-2 text-teal-500 border-[#116b4e] border rounded md:w-1/5">Cableado estructurado</Link>
                <Link href={"./Ionixx/Images"} className="text-lg px-4 py-2 text-teal-500 border-[#116b4e] border rounded md:w-1/5">Imagenes</Link>
                <Link href={""} className="text-lg px-4 py-2 text-teal-500 border-[#116b4e] border rounded md:w-1/5">Cotizacion Final</Link>
            </div>
        </div>
    )
}
