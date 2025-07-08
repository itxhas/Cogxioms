import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <motion.div
            className="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Cogxiom</h3>
            <p>
              Empowering businesses with intelligent, scalable solutions that drive innovation and growth.
            </p>
            <div className="socialLinks">
              <a href="https://github.com/cogxioms" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/company/cogxioms" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
              <a href="https://twitter.com/cogxioms" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Contact Info</h3>
            <ul>
              <li>
                <a href="mailto:haseebarif1285@gmail.com">haseebarif1285@gmail.com</a>
              </li>
              <li>
                <a href="tel:03468767647">0346 8767647</a>
              </li>
              <li>
                <a href="https://www.cogxioms.com" target="_blank" rel="noopener noreferrer">www.cogxoms.com</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Cogxiom Solutions. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;