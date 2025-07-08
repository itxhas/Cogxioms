import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="imageContainer">
        <img src={project.image} alt={project.title} className="image" />
      </div>
      <div className="content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="techStack">
          <h4>Tech Stack:</h4>
          <ul>
            {project.techStack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
        <button className="link" onClick={() => console.log('View project:', project.title)}>
          View Project <FiExternalLink />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;