"use client"
import React from 'react'
import DataTable from 'react-data-table-component'

export default function Materiales() {
    const columns = [
        {
            name: 'Nombre',
            selector: (row: { Nombre: any }) => row.Nombre,


        },
        {
            name: 'Cantidad',
            selector: (row: { Cantidad: any }) => row.Cantidad,

        },
        {
            name: 'Precio',
            selector: (row: { Precio: any }) => row.Precio,
            
        },
    ]

    const data = [
        {
            Nombre: 'F.O. Multimodal fibra de 6 hilos - 100 m',
            Cantidad: '1',
            Precio: '$91.000,00'
        },
        {
            Nombre: 'UTP Cat. 6 - 305 m',
            Cantidad: '2',
            Precio: '$81.13400'
        },
        {
            Nombre: 'Roseta para UTP Cat. 6 - Doble boca',
            Cantidad: '33',
            Precio: '$4.356,97'
        },
        {
            Nombre: 'Patchera Para UTP Cat. 6 - 24 puertos',
            Cantidad: '16',
            Precio: '$65.169,36'
        },
        {
            Nombre: 'Cable canal 18x21 mm - 2 mts',
            Cantidad: '25',
            Precio: '$2.882,00'
        },
        {
            Nombre: 'Cable Canal Piso 48x13 - 10 mts',
            Cantidad: '8',
            Precio: '$44.420,00'
        },
        {
            Nombre: 'Bandeja Portacables Perforada 20cm - 3 mts',
            Cantidad: '8',
            Precio: '$20.872,00'
        },
        {
            Nombre: 'Switch TPLINK 24 Puertos 48 GBps',
            Cantidad: '2',
            Precio: '$125.000,00'
        },
        {
            Nombre: 'Switch TPLINK 48 Puertos',
            Cantidad: '3',
            Precio: '$376.990,00'
        },
        {
            Nombre: 'Patch panel para pared UTP Cat. 6 - 8 puertos',
            Cantidad: '6',
            Precio: '$23.013,75'
        },
        {
            Nombre: 'Patch panel para pared UTP Cat. 6 - 12 puertos',
            Cantidad: '7',
            Precio: '$27.659,16'
        },
        {
            Nombre: 'Total',
            Cantidad: '',
            Precio: '$4.818.810,30'
        },

    ]

    return (
        <div>
            <div className='flex justify-center items-center'>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-10">Materiales</h2>
            </div>
            <div className='min-h-screen flex overflow-auto'>
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}
