"use client"
import { Container, Flex, Heading, Link } from '@radix-ui/themes'
import NavLink from 'next/link'
import React, { useState } from 'react';
import Image from "next/image"

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6" style={{boxSizing: 'border-box'}}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href='/' className="font-semibold text-2xl tracking-tight">
            Voyager
          </Link>
        </div>
        <div className="block lg:hidden"> 
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow">
            <Link href='/aboutUs' className="text-base block mt-4 lg:inline-block lg:mt-0  text-white hover:text-teal-200 mr-4 cursor-pointer">
              About Us
            </Link>
            <Link href='/projects' className="text-base block mt-4 lg:inline-block lg:mt-0  text-white hover:text-teal-200 mr-4 cursor-pointer">
              Projects
            </Link>
            <Link  className="text-base block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;