import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions from mobile apps to enterprise platforms designed to meet your business goals.',
    image: '/Images/custom.svg',
    items: [
      'Mobile & Web Applications',
  'Enterprise Software Systems',
  'UI/UX Design Prototypes',
  '3rd-Party API Integration',
    ],
  },
  {
    title: 'Artificial Intelligence',
    description: 'Leverage AI to drive smarter decisions and automate processes.',
    image: '/Images/ArtificialIntelligence.svg',
    items: [
      'AI Model Training & Deployment',
  'Predictive Analytics Solutions',
  'NLP & Chatbot Systems',
  'Computer Vision Applications',
    ],
  },
  {
    title: 'Predictive Analysis',
    description: 'A system that uses machine learning to forecast trends and automate insights.',
    image: '/Images/predictiveAnalysis.svg',
    items: [
      'Trend Forecasting with ML',
  'Real-Time Data Processing',
  'API Deployment with Flask',
  'Feature Engineering with Pandas',
    ],
  },
  {
    title: 'Data Visualization',
    description: 'Transform your data into actionable insights with beautiful visualizations.',
    image: '/Images/Visualization.svg',
    items: [
      'Interactive Dashboards',
  'Custom BI Solutions',
  'Real-Time Analytics',
  'Clean & Insightful Reports',
    ],
  },
  {
    title: 'Data Scraping & Automation',
    description: 'Automate data collection and processing workflows.',
    image: '/Images/Dataextraction.svg',
    items: [
      'Web Data Crawling & Parsing',
  'Automated Workflow Systems',
  'Social Media Data Extraction',
  'RPA for Business Processes',
    ],
  },
  {
    title: 'API Integration',
    description: 'Seamlessly connect your systems with third-party services and internal APIs.',
    image: '/Images/apiIntegeration.svg',
    items: [
      'REST & GraphQL Integration',
  'Webhook & Auth Setup',
  'Internal API Development',
  'API Testing & Documentation',
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
          Our <span>Services</span>
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
                <img src={service.image} alt={service.title + ' icon'} />
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
