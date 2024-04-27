import React from 'react'

function Timeline() {
    return (
        <div className="sm:flex sm:justify-center sm:items-center sm:min-h-screen">

            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Our clients.</h1>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-green-400 rounded-full mt-1.5 -start-1.5 border border-green dark:border-green-500 dark:bg-green-500"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2024</time>
                    <h3 className="text-lg font-semibold text-black">Ionixx Technologies</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Complete development of structured cabling using the best network technology.</p>
                    <a href="/projects/Ionixx" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Look at the project<svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg></a>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-red-500 dark:bg-red-500"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">???</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Coming soon...</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Available in next updates</p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-red-500 dark:bg-red-500"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">???</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Coming soon...</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Available in next updates</p>
                </li>
            </ol>
        </div>
    )
}

export default Timeline