import { motion } from 'framer-motion';
import './Projects.css';
import custom from '/Images/custom.svg';
import automationScraper from '/Images/automation-scraper.jpg';
import bakeryWebsite from '/Images/bakery-website.jpg';
import Dataextraction from '/Images/Dataextraction.svg';
import loanDashboard from '/Images/loan-dashboard.jpg';
import stockApp from '/Images/stock-app.jpg';

const projects = [
	{
		title: 'Starlink User Analytics Dashboard',
		description:
			'A real-time tracking system for Starlink user statistics, including connectivity and usage insights.',
		techStack: [
			'Flask – Backend API integration with Starlink data sources',
			'Advanced JavaScript – Enables dynamic, real-time data updates',
			'Chart.js – Visualizes analytics through interactive graphs',
			'Firebase – Handles authentication, storage, and real-time syncing',
		],
		image: '/images/starlink-dashboard.jpg',
	},
	{
		title: 'Bakery Website',
		description:
			'A modern bakery management system designed to streamline operations and enhance customer experience.',
		techStack: [
			'Ruby on Rails – Handles backend logic and efficient data processing',
			'JavaScript – Enables interactive, dynamic user interfaces',
			'Tailwind CSS – Delivers a clean, responsive, and modern design',
		],
		image: '/images/bakery-website.jpg',
	},
	{
		title: 'Rice Quality Detection APP',
		description:
			'A machine learning-based system for detecting and classifying rice varieties using advanced image recognition.',
		techStack: [
			'Machine Learning (TensorFlow/Keras) – Trained models to accurately identify and classify rice types',
			'Flutter – Delivers a cross-platform mobile app',
			'Firebase – Handles user authentication and cloud storage',
		],
		image: '/images/rice-app.jpg',
	},
	{
		title: 'Robinhood Stock Prediction App',
		description:
			'An AI-powered mobile app that predicts stock trends to help users make informed investment decisions.',
		techStack: [
			'Machine Learning – Predicts stock prices using TensorFlow/Scikit-learn',
			'Python – Handles data processing and model training',
			'Flutter – Delivers a responsive, cross-platform mobile UI',
		],
		image: '/images/stock-app.jpg',
	},
	{
		title: 'Geographic Loan Analysis Dashboard',
		description:
			'An interactive dashboard that visualizes regional deprivation and loan distribution using integrated data.',
		techStack: [
			'Tableau for dynamic, map-based visualizations',
			'Excel for loan and financial data',
			'GeoJSON for geographic boundaries',
			'Interactive filters by region and loan type',
			'Choropleth maps for visual insights',
		],
		image: '/images/loan-dashboard.jpg',
	},
	{
		title: 'Child Bureau - Welfare Management',
		description:
			'A web-based application to streamline child welfare processes like registration and case tracking.',
		techStack: [
			'Flask backend framework',
			'MySQL + SQLAlchemy for data management',
			'HTML/CSS + Jinja2 for frontend',
			'Werkzeug for secure file uploads',
			'ReportLab for PDF generation',
			'Flask-Session for user management',
		],
		image: '/images/child-bureau.jpg',
	},
];
const Projects = () => {
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
						Explore our portfolio of successful projects delivering real business
						value.
					</motion.p>
				</div>
				<div className="projects-grid">
					{projects.map((project, index) => (
						<div className="project-card" key={project.title}>
							<div className="card-content">
								<img
									src={bakeryWebsite}
									alt={project.title}
									style={{
										width: 80,
										height: 80,
										objectFit: 'contain',
										display: 'block',
										margin: '0 auto 1rem auto',
									}}
								/>
								<h3 className="project-title">{project.title}</h3>
								<p className="project-description">
									{project.description}
								</p>
								<div className="tech-stack-container">
									{project.techStack.map((tech, i) => (
										<div className="tech-item" key={i}>
											{tech}
										</div>
									))}
								</div>
								<button
									className="view-project-button"
									onClick={() =>
										console.log('View project:', project.title)
									}
								>
									View Project
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;