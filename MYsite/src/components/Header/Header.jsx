import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaRobot, FaCode, FaChartLine, FaPlug, FaTools, FaFolder, FaFolderOpen, FaHandshake, FaInfoCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Services', 
      href: '/services',
      icon: <FaTools className="navIcon" />
    },
    { 
      name: 'Projects', 
      href: '/projects',
      icon: <FaFolderOpen className="navIcon" />
    },
    { 
      name: 'About', 
      href: '/about',
      icon: <FaInfoCircle className="navIcon" />
    },
    { 
      name: 'Contact', 
      href: '/contact',
      icon: <FaHandshake className="navIcon" />
    },
  ];

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <NavLink to="/" className="logoLink">
            <img src="/logo.png" alt="Logo" />
          </NavLink>
        </motion.div>

        <nav className="nav">
          <ul className="navList">
            {navItems.map((item) => (
              <motion.li 
                key={item.name}
                className="navItem"
                whileHover={{ scale: 1.05 }}
              >
                <NavLink 
                  to={item.href}
                  className={({ isActive }) => 
                    `navLink${isActive ? ' active' : ''}`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to="/contact" className="ctaButton">
              Let's Talk
              <div className="ctaPulse"></div>
            </NavLink>
          </motion.div>
        </nav>

        <button 
          className="mobileButton" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobileMenu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="mobileLink"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="mobileCta"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;