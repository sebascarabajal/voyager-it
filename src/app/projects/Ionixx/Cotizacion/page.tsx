import React from 'react'

export default function Cotizacion() {
    return (
        <div className='min-h-screen'>
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-20 mb-10">Ionixx Technologies.</h2>
                <div className="max-w-screen-md mx-4">
                    Finalmente, el costo total estimado del proyecto de cableado estructurado para el
                    edificio de Ionixx Technologies en Argentina, incluyendo materiales, equipos, mano de
                    obra y los siguientes porcentajes de gastos administrativos: CEO 25%, Marketing
                    Manager 10%, Engineering Manager 20%, Finance Manager 15%, asciende a $
                    9,824,409.46 (Nueve millones ochocientos veinticuatro mil cuatrocientos nueve con
                    cuarenta y seis).
                </div>
                <div className="max-w-screen-md mx-4">
                    Este monto también contempla los costos asociados a la ingeniería aplicada en el
                    diseño, planificación y supervisión del proyecto, garantizando una implementación
                    óptima y acorde con los más altos estándares de calidad de la empresa.
                </div>
                <div className="max-w-screen-md mx-4">
                    Es importante destacar que esta estimación de costos ha sido realizada con el máximo
                    cuidado, considerando precios referenciales actualizados y una asignación de recursos
                    humanos adecuada. No obstante, pueden existir variaciones debido a factores externos e
                    imprevistos propios de un proyecto de esta envergadura
                </div>
                <a className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-6 mb-6">$9,824,409.46</a>
            </div>
        </div>
    )
}
