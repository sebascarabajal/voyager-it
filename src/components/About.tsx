import React from 'react'

export default function AboutComponent() {
    return (
        <div className='flex flex-col md:flex-row justify-center md:items-center mt-5 mx-4 space-y-4'>
            <div className='w-full md:w-1/4 h-40 bg-gradient-to-r from-teal-200 to-green-50 rounded-md mr-5 flex flex-col justify-center items-center'>
                <h2 className='text-2xl py-4'>Máximo Gomez</h2>
                <p className='text-base py-2'>CEO</p>
                <p className='text-sm italic px-2'>I am proud to lead and guide this company.</p>
            </div>
            <div className='w-full md:w-1/4 h-40 bg-gradient-to-r from-teal-200 to-green-50 rounded-md mr-5 flex flex-col justify-center items-center'>
                <h2 className='text-2xl py-4'>Sebastián Carabajal</h2>
                <p className='text-base py-2'>Marketing manager</p>
                <p className='text-sm italic px-2'>Representing voyager requires maximum knowledge.</p>
            </div>
            <div className='w-full md:w-1/4 h-40 bg-gradient-to-r from-teal-200 to-green-50 rounded-md mr-5 flex flex-col justify-center items-center'>
                <h2 className='text-2xl py-4'>Salustiano Vargas</h2>
                <p className='text-base py-2'>Engineering Manager</p>
                <p className='text-sm italic px-2'>Voyager engineering makes our clients' dreams come true.</p>
            </div>
            <div className='w-full md:w-1/4 h-40 bg-gradient-to-r from-teal-200 to-green-50 rounded-md flex flex-col justify-center items-center'>
                <h2 className='text-2xl py-4'>Manuel García</h2>
                <p className='text-base py-2'>Finance Manager</p>
                <p className='text-sm italic px-2'>At Voyager, finances sparkle with success.</p>
            </div>
        </div>
    )
}