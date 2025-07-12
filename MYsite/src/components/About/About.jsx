import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowRight, FiTarget, FiTrendingUp, FiUsers, FiAward, FiZap, FiShield, FiHeart } from 'react-icons/fi';
import './About.css';

const About = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // If on homepage, show basic info with "Learn More" link
  if (isHomePage) {
    return (
      <section className="about-section">
        <div className="about-container">
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="about-title"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transforming Ideas Into
              <span className="gradient-text"> Digital Reality</span>
            </motion.h2>
            
            <motion.p
              className="about-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We are a passionate team of innovators, developers, and designers dedicated to creating cutting-edge solutions that drive business growth and digital transformation.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="highlights-grid">
              <motion.div
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-icon">
                  <FiTarget />
                </div>
                <h3>Mission-Driven</h3>
                <p>Empowering businesses with innovative technology solutions that create lasting impact.</p>
              </motion.div>

              <motion.div
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-icon">
                  <FiTrendingUp />
                </div>
                <h3>Growth Focused</h3>
                <p>Scalable solutions designed to grow with your business and adapt to changing needs.</p>
              </motion.div>

              <motion.div
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-icon">
                  <FiUsers />
                </div>
                <h3>Client-Centric</h3>
                <p>Your success is our priority. We work closely with you to deliver exactly what you need.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="about-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/about" className="learn-more-btn">
              <span>Learn More About Us</span>
              <FiArrowRight className="arrow-icon" />
              <div className="btn-glow"></div>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  // If on about page, show detailed information
  return (
    <section className="about-detail-section">
      <div className="about-detail-container">
        {/* Hero Section */}
        <motion.div
          className="about-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="about-hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About <span className="gradient-text">Cogxioms</span>
          </motion.h1>
          
          <motion.p
            className="about-hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We are a forward-thinking technology company that specializes in creating innovative digital solutions. Our mission is to transform businesses through cutting-edge technology, data-driven insights, and exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="values-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {[
              {
                icon: <FiZap />,
                title: "Innovation",
                description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
              },
              {
                icon: <FiShield />,
                title: "Quality",
                description: "Every project is crafted with attention to detail and commitment to excellence."
              },
              {
                icon: <FiHeart />,
                title: "Passion",
                description: "We're passionate about technology and dedicated to making a positive impact."
              },
              {
                icon: <FiAward />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code quality to client relationships."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="process-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business goals, challenges, and vision for the project."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Our team develops a comprehensive strategy and technical roadmap for your solution."
              },
              {
                step: "03",
                title: "Development",
                description: "We build your solution using modern technologies and best practices."
              },
              {
                step: "04",
                title: "Launch",
                description: "We deploy your solution and provide ongoing support to ensure success."
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="process-step"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{process.step}</div>
                <div className="step-content">
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                </div>
                {index < 3 && <div className="step-connector"></div>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="team-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Team</h2>
          <motion.p
            className="team-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our team consists of experienced developers, designers, and strategists who are passionate about creating exceptional digital experiences. We combine technical expertise with creative thinking to deliver solutions that exceed expectations.
          </motion.p>
          
          <motion.div
            className="team-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
