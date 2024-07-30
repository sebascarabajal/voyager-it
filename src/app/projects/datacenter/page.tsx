import React from 'react'
import Link from 'next/link'

export default function DataCenter() {
    return (
        <main className='min-h-screen'>
            <div className='min-h-screen'>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-20 mb-10">DataCenter for Ionixx Technologies.</h2>
                    <div className="max-w-screen-md mx-4">
                        Presentamos nuestro trabajo más reciente: el diseño integral de un centro de datos para la empresa Ionixx Technologies.
                        En este proyecto, nuestros profesionales han volcado sus conocimientos m&aacute;s avanzados para ofrecer la soluci&oacute;n &oacute;ptima.
                    </div>
                    <div className="max-w-screen-md mx-4 mt-4">
                    We are pleased to present our latest work: the comprehensive design of a data center for Ionixx Technologies. 
                    In this project, our professionals have applied their most advanced knowledge to provide the optimal solution.
                    </div>
                    <div className="max-w-screen-md mx-4 mt-4">
                        A continuaci&oacute;n te dejamos el bot&oacute;n de descarga para que puedas acceder a la documentaci&oacute;n completa en PDF y al PowerPoint.
                    </div>
                    <div className="max-w-screen-md mx-4 mt-4">
                    Below, we provide the download button so you can access the complete documentation in PDF and PowerPoint formats.
                    </div>
                    <a href="/Datacenter.pdf" download className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-6 mb-6">Descargar PDF</a>
                    <a href="#" download className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-6 mb-6">Descargar PowerPoint</a>
                </div>
            </div>
        </main>
    )
}
