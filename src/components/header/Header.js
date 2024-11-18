import React from 'react'
import Nav from './Nav'
import HeroSection from './HeroSection'

const Header = () => {
  return (
    <header id="home">
        <div class="container">
            <Nav />
            <HeroSection />
        </div>
    </header>
  )
}

export default Header
