import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import "./Projects.css";

const projects = [
  {
    title: "Starlink View",
    description:
      "A real-time tracking system for Starlink user statistics, including connectivity and usage insights.",
    techStack: [
      "Flask – Backend API integration with Starlink data sources",
      "Advanced JavaScript – Enables dynamic, real-time data updates",
      "Chart.js – Visualizes analytics through interactive graphs",
      "Firebase – Handles authentication, storage, and real-time syncing",
    ],
    image: "/Images/Starlink.png",
  },
  {
    title: "From Oven to Invoice – Your Bakery, Perfectly Automated",
    description:
      "A modern bakery management system designed to streamline operations and enhance customer experience.",
    techStack: [
      "Ruby on Rails – Backend logic",
      "JavaScript – Interactive frontend",
      "Tailwind CSS – Clean, responsive UI",
    ],
    image: "/Images/BakerySystem.png",
  },
  {
    title: "GrainGenius",
    description:
      "A machine learning-based system for detecting and classifying rice varieties using advanced image recognition.",
    techStack: [
      "TensorFlow/Keras – ML model for rice quality classification",
      "Flutter – Cross-platform mobile UI",
      "Firebase – Auth & storage handling",
    ],
    image: "/Images/riceQuality.png",
  },
  {
    title: "MarketMind",
    description:
      "An AI-powered mobile app that predicts stock trends to help users make informed investment decisions.",
    techStack: [
      "TensorFlow/Scikit-learn – Stock prediction models",
      "Python – Data processing backend",
      "Flutter – Cross-platform mobile frontend",
    ],
    image: "/Images/Stock.png",
  },
  {
    title: "LoanScape",
    description:
      "An interactive dashboard that visualizes regional deprivation and loan distribution using integrated data.",
    techStack: [
      "Tableau – Map-based financial analytics",
      "GeoJSON – Region-wise boundary mapping",
      "Excel – Loan data source",
    ],
    image: "/Images/Dashboard.png",
  },
  {
    title: "ChildCare Central",
    description:
      "A web-based application to streamline child welfare processes like registration and case tracking.",
    techStack: [
      "Flask – Backend framework",
      "MySQL – Secure data storage",
      "Jinja2 + HTML/CSS – Frontend templates",
      "ReportLab – PDF generation",
    ],
    image: "/Images/Child.png",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <div className="projects-list">
          {projects.map((project, index) => {
            const techs = project.techStack.map(t => t.split('–')[0].trim());
            const isEven = index % 2 === 0;
            const cardClass = `project-card alt-layout-${isEven ? 'left' : 'right'}${isMobile ? ' mobile' : ''}`;
            return (
              <div className={cardClass} key={index}>
                <div className="project-image-card">
                  <div className="project-image-container tilt-image blue-glow">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                </div>
                <div className="project-info-card">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tech-list">
                    {techs.map((tech, i) => (
                      <li key={i} className="project-tech-item">{tech}</li>
                    ))}
                  </ul>
                  <div className="project-button-wrapper">
                    <button className="learn-more-button" onClick={() => navigate(`/projects/${index}`)}>Learn More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
