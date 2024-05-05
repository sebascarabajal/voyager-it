"use client"
import React from 'react'
import DataTable from 'react-data-table-component'

export default function Materiales() {
    const columns = [
        {
            name: 'Nombre',
            selector: (row: { Nombre: any }) => row.Nombre,
            sortable: true,

        },
        {
            name: 'Cantidad',
            selector: (row: { Cantidad: any }) => row.Cantidad,
            sortable: true,
        },
        {
            name: 'Precio',
            selector: (row: { Precio: any }) => row.Precio,
            sortable: true,
        },
    ]

    const data = [
        {
            Nombre: 'F.O. Multimodal fibra de 6 hilos - 100 m',
            Cantidad: '10',
            Precio: '$91,000.00'
        },
        {
            Nombre: 'UTP Cat. 6 - 305 m',
            Cantidad: '20',
            Precio: '$81,134.00'
        },
        {
            Nombre: 'UTP Cat. 5e - 305 m',
            Cantidad: '30',
            Precio: '$67,000.00'
        },
        {
            Nombre: 'Roseta para UTP Cat. 5e - Doble boca',
            Cantidad: '40',
            Precio: '$3,399.00'
        },
        {
            Nombre: 'Roseta para UTP Cat. 6 - Doble boca',
            Cantidad: '50',
            Precio: '$4,356.97'
        },
        {
            Nombre: 'Patchera Para UTP Cat. 5e - 24 puertos',
            Cantidad: '60',
            Precio: '$35,891.47'
        },
        {
            Nombre: 'Patchera Para UTP Cat. 6 - 24 puertos',
            Cantidad: '60',
            Precio: '$65,169.36'
        },
        {
            Nombre: 'Cable canal 18x21 mm - 2 mts',
            Cantidad: '60',
            Precio: '$2,882.00'
        },
        {
            Nombre: 'Cable Canal Piso 48x13 - 10 mts',
            Cantidad: '60',
            Precio: '$44,420.00'
        },
        {
            Nombre: 'Bandeja Portacables Perforada 20cm - 3 mts',
            Cantidad: '60',
            Precio: '$20,872.00'
        },
        {
            Nombre: 'Switch TPLINK 24 Puertos 48 GBps',
            Cantidad: '60',
            Precio: '$125,000.00'
        },
        {
            Nombre: 'Switch TPLINK 48 Puertos',
            Cantidad: '60',
            Precio: '$376,990.00'
        },
        {
            Nombre: 'Patch panel para UTP Cat. 6 - 8 puertos',
            Cantidad: '60',
            Precio: '$23,013.75'
        },
        {
            Nombre: 'Patch panel para UTP Cat. 6 - 12 puertos',
            Cantidad: '60',
            Precio: '$27,659.16'
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
