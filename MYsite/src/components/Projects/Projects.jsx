import { useState } from "react";
import { motion } from "framer-motion";
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

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <motion.h2
            className="projects-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span>Projects</span>
          </motion.h2>
          <motion.p
            className="projects-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our portfolio of successful projects delivering real business value.
          </motion.p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-button-wrapper">
                  <button
                    className="learn-more-button"
                    onClick={() => setSelectedProject(project)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
              <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />
              <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>{selectedProject.title}</h2>
              <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{selectedProject.description}</p>
              <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem' }}>
                This project was developed as part of our initiative to deliver modern, scalable, and user-focused solutions across various industries. It demonstrates our technical depth and ability to solve real-world problems.
              </p>
              <div className="tech-stack-container">
                {selectedProject.techStack.map((tech, i) => (
                  <div className="tech-item" key={i}>{tech}</div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
