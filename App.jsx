import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/About/About'
import Experience from './component/experience/Experience'
import Education from './component/education/Education'
import Portfolio from './component/portfolio/Portfolio'
import Testimonials from './component/testimonials/Testimonials'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Education />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
