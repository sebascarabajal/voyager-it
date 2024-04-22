import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import React from 'react'

function HomePage() {
  return (
    <main className='min-h-screen min-w-max'>
      <Hero />
      <Banner />
    </main>
  )
}

export default HomePage