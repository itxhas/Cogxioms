import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Starlink User Analytics Dashboard",
    description:
      "A real-time tracking system for Starlink user statistics, including connectivity and usage insights.",
    techStack: [
      "Flask – Backend API integration with Starlink data sources",
      "Advanced JavaScript – Enables dynamic, real-time data updates",
      "Chart.js – Visualizes analytics through interactive graphs",
      "Firebase – Handles authentication, storage, and real-time syncing",
    ],
    image: "/Images/starlink-dashboard.jpg",
  },
  {
    title: "Bakery Website",
    description:
      "A modern bakery management system designed to streamline operations and enhance customer experience.",
    techStack: [
      "Ruby on Rails – Backend logic",
      "JavaScript – Interactive frontend",
      "Tailwind CSS – Clean, responsive UI",
    ],
    image: "/Images/bakery-website.jpg",
  },
  {
    title: "Rice Quality Detection APP",
    description:
      "A machine learning-based system for detecting and classifying rice varieties using advanced image recognition.",
    techStack: [
      "TensorFlow/Keras – ML model for rice quality classification",
      "Flutter – Cross-platform mobile UI",
      "Firebase – Auth & storage handling",
    ],
    image: "/Images/rice-app.jpg",
  },
  {
    title: "Robinhood Stock Prediction App",
    description:
      "An AI-powered mobile app that predicts stock trends to help users make informed investment decisions.",
    techStack: [
      "TensorFlow/Scikit-learn – Stock prediction models",
      "Python – Data processing backend",
      "Flutter – Cross-platform mobile frontend",
    ],
    image: "/Images/stock-app.jpg",
  },
  {
    title: "Geographic Loan Analysis Dashboard",
    description:
      "An interactive dashboard that visualizes regional deprivation and loan distribution using integrated data.",
    techStack: [
      "Tableau – Map-based financial analytics",
      "GeoJSON – Region-wise boundary mapping",
      "Excel – Loan data source",
    ],
    image: "/Images/loan-dashboard.jpg",
  },
  {
    title: "Child Bureau - Welfare Management",
    description:
      "A web-based application to streamline child welfare processes like registration and case tracking.",
    techStack: [
      "Flask – Backend framework",
      "MySQL – Secure data storage",
      "Jinja2 + HTML/CSS – Frontend templates",
      "ReportLab – PDF generation",
    ],
    image: "/Images/child-bureau.jpg",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <motion.h2
            className="projects-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our <span>Projects</span>
          </motion.h2>
          <motion.p
            className="projects-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our portfolio of successful projects delivering real business value.
          </motion.p>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              className="project-card" 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="image-container"
                variants={imageVariants}
                whileHover="hover"
              >
                <img src={project.image} alt={project.title} />
              </motion.div>
              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-button-wrapper">
                  <motion.button
                    className="learn-more-button"
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="modal-overlay" 
              onClick={() => setSelectedProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.button 
                  className="modal-close" 
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &times;
                </motion.button>
                <motion.img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                />
                <motion.h2 
                  style={{ textAlign: 'center', marginBottom: '1rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {selectedProject.title}
                </motion.h2>
                <motion.p 
                  style={{ marginBottom: '1rem', lineHeight: '1.6' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  {selectedProject.description}
                </motion.p>
                <motion.p 
                  style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  This project was developed as part of our initiative to deliver modern, scalable, and user-focused solutions across various industries. It demonstrates our technical depth and ability to solve real-world problems.
                </motion.p>
                <motion.div 
                  className="tech-stack-container"
                  variants={techStackVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {selectedProject.techStack.map((tech, i) => (
                    <motion.div 
                      className="tech-item" 
                      key={i}
                      variants={techItemVariants}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
