import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiGlobe } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* First Column - Brand Info */}
            <motion.div
              className="footer-column brand-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="brand-name">Cogxioms</h2>
              <p className="brand-description">
                Empowering businesses with intelligent, scalable solutions that drive innovation and growth.
              </p>
              <div className="social-links">
                <a href="https://github.com/cognions" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a href="https://linkedin.com/company/cognions" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin />
                </a>
                <a href="https://twitter.com/cognions" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <FiTwitter />
                </a>
              </div>
            </motion.div>

            {/* Second Column - Quick Links */}
            <motion.div
              className="footer-column links-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="column-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </motion.div>

            {/* Third Column - Contact Info */}
            <motion.div
              className="footer-column contact-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="column-title">Contact Info</h3>
              <ul className="contact-info">
                <li>
                  <a href="https://www.cogxioms.com/" target="_blank" rel="noopener noreferrer">
                    <FiGlobe className="contact-icon" />
                    www.cogxioms.com
                  </a>
                </li>
                <li>
                  <a href="mailto:axioms.solutions.3@gmail.com">
                    <FiMail className="contact-icon" />
                    info@cogxioms.com
                  </a>
                </li>
                <li>
                  <a href='https://maps.app.goo.gl/9P4kFadkoCSqDR4o6' target='_blank'>
                  <FiMapPin className="contact-icon" />
                   Sabzazar Block C
                   </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <div className="container">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            © 2025 Cogxioms. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;