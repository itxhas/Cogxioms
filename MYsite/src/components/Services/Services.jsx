import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css';

const services = [
	{
		title: 'Custom Software Development',
		description:
			'Tailored solutions from mobile apps to enterprise platforms designed to meet your business goals.',
		icon: '💻',
		items: [
			'Mobile App Development iOS & Android',
			'Web Application Development',
			'Enterprise Software Solutions',
			'UI/UX Design',
			'API Integration & Third-Party Services',
		],
	},
	{
		title: 'Artificial Intelligence',
		description: 'Leverage AI to drive smarter decisions and automate processes.',
		icon: '🧠',
		items: [
			'Custom AI Model Development',
			'Predictive Analytics',
			'Natural Language Processing (NLP)',
			'Computer Vision Solutions',
		],
	},
	{
		title: 'Machine Learning',
		description: 'Model training and deployment for intelligent automation.',
		icon: '🤖',
		items: [
			'Model Training & Deployment',
			'Intelligent Automation',
			'Recommendation Systems',
			'Data Classification & Clustering',
		],
	},
	{
		title: 'Data Visualization',
		description:
			'Transform your data into actionable insights with beautiful visualizations.',
		icon: '📊',
		items: [
			'Interactive Dashboards',
			'Business Intelligence (BI) Solutions',
			'Visual Reporting & Analytics',
		],
	},
	{
		title: 'Data Scraping & Automation',
		description: 'Automate data collection and processing workflows.',
		icon: '🔄',
		items: [
			'Web & Social Media Data Extraction',
			'Automated Data Collection Pipelines',
			'Workflow Automation',
			'Robotic Process Automation (RPA)',
		],
	},
	{
		title: 'API Integration',
		description:
			'Seamlessly connect your systems with third-party services and internal APIs.',
		icon: '🔌',
		items: [
			'REST API Development & Integration',
			'GraphQL API Implementation',
			'Webhook Configuration',
			'Third-Party Service Integration',
			'Authentication & Authorization Setup',
			'API Documentation & Testing',
		],
	},
];

const Services = () => {
	return (
		<section className="services">
			<div className="container">
				<motion.h2
					className="section-title"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Our Services
				</motion.h2>

				<motion.p
					className="subtitle"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
				>
					We offer comprehensive solutions to transform your business with
					cutting-edge technology.
				</motion.p>

				<div className="grid">
					{services.map((service, index) => (
						<ServiceCard key={service.title} service={service} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;