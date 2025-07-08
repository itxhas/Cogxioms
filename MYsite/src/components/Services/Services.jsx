import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions from mobile apps to enterprise platforms designed to meet your business goals.',
    image: '/Images/custom.svg',
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
    image: '/Images/ArtificialIntelligence.svg',
    items: [
      'Custom AI Model Development',
      'Predictive Analytics',
      'Natural Language Processing (NLP)',
      'Computer Vision Solutions',
    ],
  },
  {
    title: 'Predictive Analysis',
    description: 'A system that uses machine learning to forecast trends and automate insights.',
    image: '/Images/predictiveAnalysis.svg',
    items: [
    'TensorFlow / Scikit-learn – Model training',
    'Python – Data processing',
    'Flask – API deployment',
    'Pandas – Feature engineering',
    ],
  },
  {
    title: 'Data Visualization',
    description: 'Transform your data into actionable insights with beautiful visualizations.',
    image: '/Images/Visualization.svg',
    items: [
      'Interactive Dashboards',
      'Business Intelligence (BI) Solutions',
      'Visual Reporting & Analytics',
    ],
  },
  {
    title: 'Data Scraping & Automation',
    description: 'Automate data collection and processing workflows.',
    image: '/Images/Dataextraction.svg',
    items: [
      'Web & Social Media Data Extraction',
      'Automated Data Collection Pipelines',
      'Workflow Automation',
      'Robotic Process Automation (RPA)',
    ],
  },
  {
    title: 'API Integration',
    description: 'Seamlessly connect your systems with third-party services and internal APIs.',
    image: '/Images/apiIntegeration.svg',
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
          We offer comprehensive solutions to transform your business with cutting-edge technology.
        </motion.p>

        <div className="grid">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <div className="icon">
                <img src={service.image} alt={service.title + ' icon'} style={{ width: 80, height: 80 }} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
