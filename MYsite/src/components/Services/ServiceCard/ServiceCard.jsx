// src/components/Services/ServiceCard/ServiceCard.jsx
import { motion } from 'framer-motion';
import './ServiceCard.css';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>
        {service.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;