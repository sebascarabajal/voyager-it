import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import React from 'react'

function HomePage() {
  return (
    <main className='min-h-screen'>
      <Hero />
      <Banner />
    </main>
  )
}

export default HomePage