// src/pages/About.jsx
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>

        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            Cogxioms builds tailored software solutions from mobile and web apps to enterprise platforms designed to meet your business goals. 
            We focus on intuitive design, scalable architecture, and seamless API integration to deliver reliable, high-performing applications.
          </p>
          <p>
            We leverage AI, machine learning, and data technologies to drive smarter decisions, automate processes, and extract insights. 
            Our expertise spans intelligent systems, data visualization, scraping, and workflow automation enabling innovation and efficiency at scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;