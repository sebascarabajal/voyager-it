import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <section className="min-h-[30vh] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 flex flex-col md:flex-row items-center justify-center md:justify-between px-10 md:px-[20vw]">
      <Link href={'/'}>
        <h1 className="flex items-center text-black text-3xl font-bold space-x-2">
           <span>Voyager IT</span>
        </h1>
      </Link>
      <div className="">
        <h4 className="text-black mb-5">¡Find us here!</h4>
        <div className="flex justify-between w-full space-x-2">
          <GitHubLogoIcon className="w-8 h-8 text-black" />
          <LinkedInLogoIcon className="w-8 h-8 text-black" />
          <InstagramLogoIcon className="w-8 h-8 text-black" />
        </div>
      </div>
    </section>
  )
}
 

