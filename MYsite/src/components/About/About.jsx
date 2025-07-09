// src/pages/About.jsx
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="abouts">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span>Us</span>
        </motion.h2>

        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="content-grid">
            <div className="content-block">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2v4m0 12v4m8-10h-4M4 12h4m11.3-5.3l-2.8 2.8m2.8 8.5l-2.8-2.8M6.7 6.7l2.8 2.8m-2.8 8.5l2.8-2.8" />
                </svg>
              </div>
              <p className="highlighted">
                Cogxioms builds tailored software solutions from mobile and web apps to enterprise platforms designed to meet your business goals.
              </p>
              <p>
                We focus on intuitive design, scalable architecture, and seamless API integration to deliver reliable, high-performing applications.
              </p>
            </div>
            
            <div className="content-block">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <p className="highlighted">
                We leverage AI, machine learning, and data technologies to drive smarter decisions, automate processes, and extract insights.
              </p>
              <p>
                Our expertise spans intelligent systems, data visualization, scraping, and workflow automation enabling innovation and efficiency at scale.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;