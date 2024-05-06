import React from 'react'

export default function Intro() {
    return (
        <div className='min-h-screen'>
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-20 mb-10">Ionixx Technologies.</h2>
                <div className="max-w-screen-md mx-4">
                    Este documento presenta una exhaustiva gu&iacute;a sobre el proyecto de cableado estructurado diseñado para satisfacer las necesidades espec&iacute;ficas de nuestra empresa. Abarcando desde la selecci&oacute;n de materiales hasta la implementaci&oacute;n de tecnolog&iacute;a de vanguardia, este proyecto se centra en proporcionar una infraestructura de red robusta y adaptable que respalde las operaciones presentes y futuras de la organizaci&oacute;n.

                    Exploraremos detalladamente los materiales seleccionados para este proyecto, destacando su calidad, durabilidad y capacidad para soportar las demandas de un entorno empresarial din&aacute;mico. Adem&aacute;s, se analizar&aacuten las &uacute;ltimas tendencias y avances en tecnolog&iacute;a de cableado estructurado, con el objetivo de garantizar la incorporaci&oacute;n de soluciones innovadoras que impulsen la eficiencia y la productividad.

                    El diseño del cableado estructurado desempeña un papel crucial en la optimizaci&oacute;n del flujo de datos y la maximizaci&oacute;n del rendimiento de la red. Por lo tanto, este documento tambi&eacute;n examina en profundidad el diseño propuesto, teniendo en cuenta aspectos como la topología de la red, la distribución de los puntos de conexi&oacute;n y la gesti&oacute;n de la energ&iacute;a, entre otros.
                </div>
                <div className="max-w-screen-md mx-4">
                    Aqui debajo te dejamos el bot&oacute;n de descarga para que puedas acceder a la documentaci&oacute;n completa en PDF.
                </div>
                <a href="/cableadoEstructurado.pdf" download className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-6">Descargar PDF</a>
            </div>
        </div>
    )
}