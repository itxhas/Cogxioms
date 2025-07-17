import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { FaTools, FaFolderOpen, FaHandshake, FaInfoCircle, FaHome } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll to top when logo is clicked
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Home', href: '/', icon: <FaHome className="navIcon" /> },
    { name: 'Services', href: '/services', icon: <FaTools className="navIcon" /> },
    { name: 'Projects', href: '/projects', icon: <FaFolderOpen className="navIcon" /> },
    { name: 'About', href: '/about', icon: <FaInfoCircle className="navIcon" /> },
    { name: 'Contact', href: '/contact', icon: <FaHandshake className="navIcon" /> },
  ];

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      x: '100%',
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        {/* Scroll Progress Bar */}
        <motion.div 
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
        
        <div className="container">
          <motion.div
            className="logo"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <NavLink to="/" className="logoLink" onClick={handleLogoClick}>
              <div className="logo-container">
                <img src="/logo.png" alt="Cogxioms" className="logo-image" />
                <div className="logoPulse"></div>
              </div>
            </NavLink>
          </motion.div>

          <motion.nav 
            className="nav"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <ul className="navList">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name} 
                  className="navItem"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink 
                    to={item.href} 
                    className={({ isActive }) => `navLink${isActive ? ' active' : ''}`}
                  >
                    <span className="navIconWrapper">
                      {item.icon}
                    </span>
                    <span className="navText">{item.name}</span>
                    <motion.div 
                      className="navUnderline"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              className="ctaContainer"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <NavLink to="/contact" className="ctaButton">
                <span className="ctaText">Let's Talk</span>
                <FiArrowRight className="ctaArrow" />
                <div className="ctaPulse"></div>
                <div className="ctaGlow"></div>
              </NavLink>
            </motion.div>
          </motion.nav>

          <motion.button 
            className="mobileButton" 
            onClick={() => setIsOpen(true)} 
            aria-label="Open menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FiMenu size={24} />
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobileOverlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="mobileMenu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="mobileHeader">
                <motion.button
                  className="mobileCloseButton"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX size={24} />
                </motion.button>
              </div>
              
              <div className="mobileNav">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink
                      to={item.href}
                      className="mobileLink"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mobileIcon">{item.icon}</span>
                      <span className="mobileText">{item.name}</span>
                      <FiArrowRight className="mobileArrow" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mobileCtaContainer"
                variants={itemVariants}
              >
                <NavLink
                  to="/contact"
                  className="mobileCta"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Start Your Project</span>
                  <FiArrowRight />
                </NavLink>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
