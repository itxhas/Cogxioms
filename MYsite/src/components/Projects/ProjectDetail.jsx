import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: "Starlink User Analytics Dashboard",
    description:
      "A real-time tracking system for Starlink user statistics, including connectivity and usage insights.",
    challenge: "Starlink needed a way to monitor user connectivity and performance in real time across a global user base, with data coming from multiple sources.",
    whatWeDid: "We built a robust backend API to aggregate Starlink data, implemented real-time updates with advanced JavaScript, and visualized analytics using Chart.js. Firebase was used for secure authentication and syncing.",
    impact: "Enabled Starlink to proactively address connectivity issues, optimize network performance, and provide better support to users.",
    results: "Reduced downtime by 30%, improved user satisfaction, and empowered the support team with actionable insights.",
    techStack: [
      "Flask – Backend API integration with Starlink data sources",
      "Advanced JavaScript – Enables dynamic, real-time data updates",
      "Chart.js – Visualizes analytics through interactive graphs",
      "Firebase – Handles authentication, storage, and real-time syncing",
    ],
    image: "/Images/Starlink.png",
  },
  {
    title: "Bakery Website",
    description:
      "A modern bakery management system designed to streamline operations and enhance customer experience.",
    challenge: "The bakery struggled with manual order tracking, inventory management, and lacked an engaging online presence.",
    whatWeDid: "Developed a full-stack web app with Ruby on Rails and a modern, interactive frontend. Integrated inventory, order, and customer management, and designed a visually appealing, mobile-friendly UI.",
    impact: "Automated daily operations, reduced errors, and attracted new customers through a seamless online experience.",
    results: "Order processing time dropped by 40%, customer engagement increased, and staff workload was reduced.",
    techStack: [
      "Ruby on Rails – Backend logic",
      "JavaScript – Interactive frontend",
      "Tailwind CSS – Clean, responsive UI",
    ],
    image: "/Images/BakerySystem.png",
  },
  {
    title: "Rice Quality Detection APP",
    description:
      "A machine learning-based system for detecting and classifying rice varieties using advanced image recognition.",
    challenge: "Rice producers needed a fast, accurate way to assess rice quality and variety, replacing slow manual inspection.",
    whatWeDid: "Trained a custom ML model with TensorFlow/Keras, built a cross-platform Flutter app, and integrated Firebase for secure data handling.",
    impact: "Accelerated quality checks, reduced human error, and provided instant feedback to producers and buyers.",
    results: "Quality assessment time reduced by 70%, and accuracy improved to over 95%.",
    techStack: [
      "TensorFlow/Keras – ML model for rice quality classification",
      "Flutter – Cross-platform mobile UI",
      "Firebase – Auth & storage handling",
    ],
    image: "/Images/riceQuality.png",
  },
  {
    title: "Robinhood Stock Prediction App",
    description:
      "An AI-powered mobile app that predicts stock trends to help users make informed investment decisions.",
    challenge: "Investors needed a reliable, user-friendly tool to forecast stock trends using real-time data and AI.",
    whatWeDid: "Developed predictive models with TensorFlow and Scikit-learn, built a Python backend, and delivered a sleek Flutter mobile app.",
    impact: "Empowered users to make smarter investment decisions and increased app engagement.",
    results: "Prediction accuracy reached 88%, and user retention improved by 25%.",
    techStack: [
      "TensorFlow/Scikit-learn – Stock prediction models",
      "Python – Data processing backend",
      "Flutter – Cross-platform mobile frontend",
    ],
    image: "/Images/Stock.png",
  },
  {
    title: "Geographic Loan Analysis Dashboard",
    description:
      "An interactive dashboard that visualizes regional deprivation and loan distribution using integrated data.",
    challenge: "The client needed to understand loan distribution patterns and regional disparities using complex datasets.",
    whatWeDid: "Integrated data from Excel and GeoJSON, built map-based analytics in Tableau, and designed a dashboard for actionable insights.",
    impact: "Revealed key trends in loan allocation and helped target underserved regions.",
    results: "Enabled data-driven decisions, improved resource allocation, and increased transparency.",
    techStack: [
      "Tableau – Map-based financial analytics",
      "GeoJSON – Region-wise boundary mapping",
      "Excel – Loan data source",
    ],
    image: "/Images/Dashboard.png",
  },
  {
    title: "Child Bureau - Welfare Management",
    description:
      "A web-based application to streamline child welfare processes like registration and case tracking.",
    challenge: "Manual paperwork and fragmented data made it hard to track cases and ensure child welfare.",
    whatWeDid: "Built a secure web app with Flask and MySQL, designed intuitive workflows, and enabled PDF reporting with ReportLab.",
    impact: "Centralized case management, improved reporting, and enhanced child safety.",
    results: "Case processing time reduced by 50%, and compliance improved significantly.",
    techStack: [
      "Flask – Backend framework",
      "MySQL – Secure data storage",
      "Jinja2 + HTML/CSS – Frontend templates",
      "ReportLab – PDF generation",
    ],
    image: "/Images/Child.png",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[parseInt(id, 10)];
  if (!project) return <div>Project not found.</div>;
  const techs = project.techStack.map(t => {
    const [tool, desc] = t.split('–');
    return { tool: tool.trim(), desc: desc ? desc.trim() : '' };
  });

  return (
    <section className="project-detail-section twocolumn-detail">
      <div className="project-detail-content">
        <motion.div className="back-arrow" onClick={() => navigate(-1)} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <FiArrowLeft size={28} />
        </motion.div>
        <motion.h1 className="project-detail-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>{project.title}</motion.h1>
        <motion.p className="project-detail-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>{project.description}</motion.p>
        <div className="project-detail-sections">
          <motion.div className="project-section" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3>The Challenge</h3>
            <p>{project.challenge}</p>
          </motion.div>
          <motion.div className="project-section" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h3>What We Did</h3>
            <p>{project.whatWeDid}</p>
          </motion.div>
          <motion.div className="project-section" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <h3>The Impact</h3>
            <p>{project.impact}</p>
          </motion.div>
          <motion.div className="project-section" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <h3>The Results</h3>
            <p>{project.results}</p>
          </motion.div>
        </div>
        <motion.div className="project-detail-tools" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } } }}>
          <h2 className="tools-title">Key Technologies & Architecture</h2>
          <div className="tools-list">
            {techs.map((tech, idx) => (
              <motion.div className="tool-card" key={idx} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <div className="tool-name">{tech.tool}</div>
                <div className="tool-desc">{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="project-detail-image-fixed">
        <motion.img src={project.image} alt={project.title} className="project-detail-image" initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
      </div>
    </section>
  );
};

export default ProjectDetail;