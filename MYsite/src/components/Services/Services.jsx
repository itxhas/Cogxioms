import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Scalable, secure, and user‑centric software solutions—from mobile apps to enterprise platforms—delivered rapidly through agile, continuous iteration.',
    image: '/Images/customSoftware.png',
    items: [
      {
        name: 'Mobile & Web Applications',
        desc: 'Cross-platform apps for seamless user experiences on any device.'
      },
      {
        name: 'Enterprise Software Systems',
        desc: 'Robust solutions for complex business operations and workflows.'
      },
      {
        name: 'UI/UX Design Prototypes',
        desc: 'Interactive prototypes to validate ideas and delight users.'
      },
      {
        name: 'Cloud Deployment & Hosting',
        desc: 'Scalable, secure cloud infrastructure for modern applications.'
      },
      {
        name: 'Ongoing Maintenance & Support',
        desc: 'Continuous updates and support to keep your software running smoothly.'
      },
    ],
  },
  {
    title: 'Artificial Intelligence',
    description: 'Harness AI to transform data into actionable insights and automate workflows for boosted efficiency and competitive advantage.',
    image: '/Images/ArtificialIntelligence.jpg',
    items: [
      {
        name: 'AI Model Training & Deployment',
        desc: 'Custom AI models built, trained, and deployed for your needs.'
      },
      {
        name: 'Predictive Analytics Solutions',
        desc: 'Forecast trends and outcomes using advanced analytics.'
      },
      {
        name: 'NLP & Chatbot Systems',
        desc: 'Conversational AI for customer support and automation.'
      },
      {
        name: 'Computer Vision Applications',
        desc: 'Image and video analysis for real-world insights.'
      },
      {
        name: 'AI Consulting & Strategy',
        desc: 'Expert guidance to integrate AI into your business.'
      },
    ],
  },
  {
    title: 'Predictive Analysis',
    description: 'Machine learning–powered forecasting and automated insights, delivering tailored predictive models for confident, data‑driven decision‑making.',
    image: '/Images/predictiveAnalysis.png',
    items: [
      {
        name: 'Trend Forecasting with ML',
        desc: 'Anticipate market shifts and customer behavior.'
      },
      {
        name: 'Real-Time Data Processing',
        desc: 'Instant analysis for up-to-date business intelligence.'
      },
      {
        name: 'Customer Churn Prediction',
        desc: 'Identify and retain at-risk customers with smart models.'
      },
      {
        name: 'Risk Assessment Models',
        desc: 'Quantify and manage business risks proactively.'
      },
      {
        name: 'Scenario Simulation',
        desc: 'Test strategies and outcomes before making big decisions.'
      },
    ],
  },
  {
    title: 'Data Visualization',
    description: 'Interactive dashboards that translate complex data into clear, actionable insights for rapid, informed decision‑making.',
    image: '/Images/Visualization.png',
    items: [
      {
        name: 'Interactive Dashboards',
        desc: 'Real-time, interactive views of your key metrics.'
      },
      {
        name: 'Custom BI Solutions',
        desc: 'Tailored business intelligence for your unique needs.'
      },
      {
        name: 'Geospatial Mapping',
        desc: 'Visualize data on maps for location-based insights.'
      },
      {
        name: 'KPI & Metric Tracking',
        desc: 'Monitor performance with clear, actionable visuals.'
      },
      {
        name: 'Data Storytelling',
        desc: 'Turn complex data into compelling, easy-to-understand stories.'
      },
    ],
  },
  {
    title: 'Data Scraping & Automation',
    description: 'Automated data collection and processing workflows that save time, eliminate errors, and deliver real‑time insights.',
    image: '/Images/scrapping.png',
    items: [
      {
        name: 'Web Data Crawling & Parsing',
        desc: 'Extract valuable data from websites and online sources.'
      },
      {
        name: 'Automated Workflow Systems',
        desc: 'Streamline repetitive tasks with automation.'
      },
      {
        name: 'Data Cleaning & Deduplication',
        desc: 'Ensure your data is accurate and free of duplicates.'
      },
      {
        name: 'Scheduled Data Pipelines',
        desc: 'Automate data flows on a set schedule.'
      },
      {
        name: 'Integration with APIs',
        desc: 'Connect and sync data with other platforms easily.'
      },
    ],
  },
  {
    title: 'API Integration',
    description: 'Secure, scalable integrations that unify internal APIs and third‑party services to streamline operations and unlock new capabilities.',
    image: '/Images/ApiIntegration.png',
    items: [
      {
        name: 'REST & GraphQL Integration',
        desc: 'Modern API standards for flexible, robust connections.'
      },
      {
        name: 'Webhook & Auth Setup',
        desc: 'Secure authentication and real-time event handling.'
      },
      {
        name: 'Payment Gateway Integration',
        desc: 'Enable secure online payments in your apps.'
      },
      {
        name: 'API Monitoring & Analytics',
        desc: 'Track API usage and performance with ease.'
      },
      {
        name: 'API Security & Rate Limiting',
        desc: 'Protect your APIs from abuse and ensure reliability.'
      },
    ],
  },
];

const tagIcons = {
  'Mobile & Web Applications': '💻',
  'Enterprise Software Systems': '🏢',
  'UI/UX Design Prototypes': '🎨',
  'Cloud Deployment & Hosting': '☁️',
  'Ongoing Maintenance & Support': '🔧',
  'AI Model Training & Deployment': '🤖',
  'Predictive Analytics Solutions': '📈',
  'NLP & Chatbot Systems': '💬',
  'Computer Vision Applications': '👁️',
  'AI Consulting & Strategy': '💡',
  'Trend Forecasting with ML': '🔮',
  'Real-Time Data Processing': '⏱️',
  'Customer Churn Prediction': '💸',
  'Risk Assessment Models': '⚠️',
  'Scenario Simulation': '🔮',
  'Interactive Dashboards': '📊',
  'Custom BI Solutions': '🛠️',
  'Geospatial Mapping': '🗺️',
  'KPI & Metric Tracking': '📊',
  'Data Storytelling': '📚',
  'Web Data Crawling & Parsing': '🕸️',
  'Automated Workflow Systems': '⚙️',
  'Data Cleaning & Deduplication': '🧹',
  'Scheduled Data Pipelines': '⏰',
  'Integration with APIs': '🔌',
  'REST & GraphQL Integration': '🔌',
  'Webhook & Auth Setup': '🔒',
  'Payment Gateway Integration': '💳',
  'API Monitoring & Analytics': '📊',
  'API Security & Rate Limiting': '🔒',
};

const Services = () => {
  const [expanded, setExpanded] = useState(null); // index of expanded card
  const [active, setActive] = useState(0); // index of card in view
  const cardRefs = useRef([]);

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const offsets = cardRefs.current.map(ref => ref?.getBoundingClientRect().top || 0);
      const inViewIdx = offsets.findIndex(top => top > 60); // 60px for header offset
      setActive(inViewIdx === -1 ? services.length - 1 : Math.max(0, inViewIdx - 1));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to card
  const scrollToCard = idx => {
    cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="services-section">
      <nav className="services-sidebar" aria-label="Service navigation">
        {services.map((s, i) => (
          <div
            key={i}
            className={`sidebar-item${i === active ? ' active' : ''}`}
            onClick={() => scrollToCard(i)}
            tabIndex={0}
            role="button"
            aria-current={i === active ? 'true' : undefined}
          >
            {s.title}
          </div>
        ))}
      </nav>
      <div className="services-details">
        <h2 className="services-main-heading">Services designed to help your brand shine brighter.</h2>
        {services.map((service, idx) => (
          <motion.div
            className="service-card"
            key={idx}
            ref={el => (cardRefs.current[idx] = el)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="service-card-main">
              <h2>{service.title}</h2>
              <p className="details-desc">{service.description}</p>
              <div className="details-tags">
                {service.items.map((item, i) => (
                  <span className="details-tag" key={i}>
                    <span className="tag-icon">{tagIcons[item.name] || '🔹'}</span> {item.name}
                  </span>
                ))}
              </div>
              <motion.button
                className={`view-details-btn${expanded === idx ? ' expanded' : ''}`}
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                aria-expanded={expanded === idx}
                aria-controls={`service-details-${idx}`}
                whileHover={{ scale: 1.03, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={expanded === idx ? { background: '#ffe6c7', color: '#0f172a', borderColor: '#0f172a', position: 'sticky', top: 0, zIndex: 10 } : {}}
                onMouseEnter={e => {
                  if (expanded !== idx) {
                    e.currentTarget.querySelector('.plus-icon').style.background = '#5f0f40';
                    e.currentTarget.querySelector('.plus-icon').style.color = '#fff';
                  }
                }}
                onMouseLeave={e => {
                  if (expanded !== idx) {
                    e.currentTarget.querySelector('.plus-icon').style.background = '';
                    e.currentTarget.querySelector('.plus-icon').style.color = '#222';
                  }
                }}
              >
                <span className="view-details-text">{expanded === idx ? 'Hide Details' : 'View Details'}</span>
                <motion.span
                  className="plus-icon"
                  animate={{ rotate: expanded === idx ? 0 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{
                    background: expanded === idx ? '#0f172a' : '',
                    color: expanded === idx ? '#fff' : '#222',
                    borderRadius: '6px',
                    padding: '0 0.3em',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.5em',
                    boxSizing: 'border-box',
                    border: expanded === idx ? '2px solid #0f172a' : '2px solid #ececec',
                    transition: 'background 0.18s, color 0.18s, border 0.18s',
                  }}
                >
                  {expanded === idx ? <span style={{fontSize:'1.5em',fontWeight:800,display:'block',lineHeight:'1'}}>–</span> : '+'}
                </motion.span>
              </motion.button>
            </div>
            <AnimatePresence initial={false}>
              {expanded === idx && (
                <motion.div
                  className="service-card-expand"
                  id={`service-details-${idx}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="expand-inner">
                    <img src={service.image} alt={service.title} className="expand-img-full" />
                    <ul className="expand-list">
                      {service.items.map((item, i) => (
                        <li className="expand-list-item" key={i}>
                          <span className="expand-item-name" style={{ fontSize: '0.98em', marginRight: '8px', whiteSpace: 'nowrap' }}>{item.name}</span>
                          <span className="expand-item-desc" style={{ fontSize: '0.93em', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
