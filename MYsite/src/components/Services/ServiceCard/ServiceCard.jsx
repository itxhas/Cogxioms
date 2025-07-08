import { useState } from 'react';
import { motion } from 'framer-motion';
import './ServiceCard.css';

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className={"card" + (hovered ? ' expanded' : '')}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="icon">
        <img src={service.image} alt={service.title + ' icon'} style={{ width: 80, height: 80 }} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {hovered && (
        <ul>
          {service.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ServiceCard;
