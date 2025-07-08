import { motion } from 'framer-motion';
import TeamMember from './TeamMember/TeamMember';
import './Team.css';

const teamMembers = [
  { 
    name: 'Syed Rawan Shah', 
    role: 'CEO & Founder',
    bio: 'Visionary leader with 10+ years in tech entrepreneurship'
  },
  { 
    name: 'M. Furgan', 
    role: 'CTO',
    bio: 'Expert in scalable architecture and system design'
  },
  { 
    name: 'M. Haseeb', 
    role: 'Lead Developer',
    bio: 'Full-stack developer specializing in React and Node.js'
  },
  { 
    name: 'Hassan Ali', 
    role: 'AI Engineer',
    bio: 'Machine learning specialist with NLP expertise'
  },
  { 
    name: 'M. Mubasher', 
    role: 'Frontend Developer',
    bio: 'UI/UX expert creating beautiful, responsive interfaces'
  },
  { 
    name: 'Ayesha Khan', 
    role: 'Data Scientist',
    bio: 'Data visualization and analytics professional'
  }
];

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Meet the passionate experts building intelligent solutions.
        </motion.p>

        <div className="grid">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={member.name}
              member={member}
              index={index}
              span={index === 0 || index === teamMembers.length - 1 ? 2 : 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;