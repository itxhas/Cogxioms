import { motion } from 'framer-motion';
import './TeamMember.css';
const TeamMember = ({ member, index, span }) => {
  return (
    <motion.div
      className={`card${span === 2 ? ' span2' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="avatar">
        <div className="initials">
          {member.name.split(' ').map(n => n[0]).join('')}
        </div>
      </div>
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      <p className="bio">{member.bio}</p>
      <div className="socialLinks">
        <button 
          className="socialButton"
          onClick={() => console.log(`View ${member.name}'s LinkedIn`)}
        >
          LinkedIn
        </button>
        <button 
          className="socialButton"
          onClick={() => console.log(`View ${member.name}'s GitHub`)}
        >
          GitHub
        </button>
      </div>
    </motion.div>
  );
};

export default TeamMember;