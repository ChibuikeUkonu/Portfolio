import Hero from '@/Component/Navbar/Hero/Hero'
import Navbar from '@/Component/Navbar/Navbar'
import React from 'react'
import About from '@/Component/About/About'
import Services from '@/Component/Services/Services'
import MyWork from '@/Component/MyWork/MyWork'
import Contact from '@/Component/Contact/Contact'
import Footer from '@/Component/Footer/Footer'
import { ThemeProvider } from '@/context/LoadingContext'

const page = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <MyWork/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default page
