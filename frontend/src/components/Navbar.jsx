import React, { use, useState } from 'react'
import {navbarStyles as styles} from '../assets/dummyStyles'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/cars', label: 'Cars' },
    { to: '/contact', label: 'Contact' },
  ];
    return (
        <nav className= {'${styles.base} ${scrolled}'}>
            </nav>
  )
}

export default Navbar