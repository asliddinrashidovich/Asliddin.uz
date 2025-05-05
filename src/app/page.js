import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Portfolio from '@/components/portfolio'
import Resume from '@/components/resume'
import React from 'react'

function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home