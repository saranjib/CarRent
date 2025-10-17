import React, { use, useState } from 'react'
import {navbarStyles as styles} from '../assets/dummyStyles'
import Logo from '../assets/logocar.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/cars', label: 'Cars' },
    { to: '/contact', label: 'Contact' },
  ];
    return (
        <nav className= {'${styles.base} ${scrolled ? styles.nav.scrolled : styles.nav.notScrolled} }'}
        aria-label="Main Navigation">
        <div className=" max-w-7xl mx-auto pxx-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
                <div className={'${styles.floatingNav.scrolled : styles.flotingNav.notScrolled} '}
                    role="region" aria-roledescription="navigation">
                  <div className="flex items-center justify-between gap-4">
                    <Link className="flex items-center">
                    <div className={styles.logoContainer}>
                        <img src={Logo} alt= "Logo" style= {{ display: "block", objectFit: "contain" }}/>
                    </div>
                    </Link>
                  </div>      
                 </div>
                </div>
             </div>
            </nav>
  );
};

export default Navbar