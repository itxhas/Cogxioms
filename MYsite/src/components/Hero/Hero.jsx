import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    // Clean up any previous animation instance
    if (lottieContainer.current) {
      lottie.destroy();
    }
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/hero.json',
    });
    return () => lottie.destroy();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-left content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering Businesses with <span>Intelligent Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We transform ideas into reality by leveraging AI, automation, and modern technology to drive innovation and growth.
          </motion.p>
          <motion.div
            className="buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          > 
            <Link to="/contact" className="secondaryBtn">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
        <div className="hero-right">
          <div ref={lottieContainer} style={{ width: 500, height: 500 }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;