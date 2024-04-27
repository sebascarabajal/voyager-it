"use client"
import React from 'react'
import { Button } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'

export default function ButtonHero() {
    const router = useRouter()
    return (
        <Button onClick={() => router.push("/projects")} className="mt-4 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            View Our Projects
        </Button>
    )
}
