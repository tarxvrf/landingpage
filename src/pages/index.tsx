import React from 'react'
import Hero from '@/pages/components/Hero'
import About from './components/about'
import Footer from './components/footer'
import Slogan from './components/slogan'

const Home = () => {
  return (
    <div>
      <section id='hero'>
       <Hero/>
      </section>
      <section id='content'>
        <About/>
        <Slogan/>

      </section>
      <section id='footer'>
      <Footer/>
      </section>
 
      
    </div>
  )
}

export default Home
