import React, {useState} from 'react'

const Nav = () => {

  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav>
        <div className="brand-logo">fa<span>i</span>th</div>
    
        <ul style={{ right: isMenuOpen ? '0' : '-300px' }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className='bx bx-x-circle' onClick={toggleMenu}></i>
        </ul>
                
        <i className='bx bx-menu-alt-right' onClick={toggleMenu}></i>
    </nav>
  )
}

export default Nav
