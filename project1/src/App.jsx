import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import TestimonialPage from './Components/Testimonialpage'
import Footer from './Components/Footer'


export default function App() {
  return (
    <div className="min-h-screen bg-white font-gerbil overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <section id="contact">
          <TestimonialPage />
        </section>
        <Footer />
      </main>
    </div>
  )
}