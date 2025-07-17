import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Hassan Ali',
    role: 'Experience Architect',
    image: '/Images/Hassan.jpg',
    bio: 'Crafts immersive, intuitive UIs.',
    skills: ['UX Strategy', 'Python', 'Rust', 'React']
  },
  {
    id: 2,
    name: 'Haseeb Arif',
    role: 'Full‑Stack Engineer',
    image: '/Images/Haseeb.png',
    bio: 'Builds scalable, resilient web platforms.',
    skills: ['React', 'Node.js', 'Python', 'MongoDB']
  },
  {
    id: 3,
    name: 'Mian Mubasher',
    role: 'AI/ML Engineer',
    image: '/Images/MianMuhammad.jpg',
    bio: 'Designs advanced machine‑learning solutions.',
    skills: ['ML', 'Python', 'TensorFlow', 'SQL']
  }
];  

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getVisibleMembers = () => {
    if (isMobile) {
      const prev = teamMembers[(currentIndex + teamMembers.length - 1) % teamMembers.length];
      const current = teamMembers[currentIndex];
      const next = teamMembers[(currentIndex + 1) % teamMembers.length];
      return [prev, current, next];
    }
    return teamMembers;
  };

  const handleLeft = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleRight = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const memberVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <motion.h2
            className="team-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our <span>Team</span>
          </motion.h2>
          <motion.p 
            className="team-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Meet the talented individuals behind our success
          </motion.p>
        </div>

        <motion.div 
          className="team-display"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left arrow for small screens */}
          {isMobile && (
            <motion.button 
              className="team-arrow left" 
              onClick={handleLeft} 
              aria-label="Previous member"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &#8592;
            </motion.button>
          )}

          <AnimatePresence mode="wait">
            {getVisibleMembers().map((member, idx) => (
              <motion.div 
                key={`${member.id}-${currentIndex}`}
                className={`team-member${idx === 1 && isMobile ? ' current' : ''}`}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                custom={idx === 1 ? 1 : idx === 0 ? -1 : 1}
                variants={isMobile ? slideVariants : memberVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="member-image-container"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="member-image"
                  />
                </motion.div>
                <motion.h3 
                  className="member-name"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="member-role"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {member.role}
                </motion.p>
                <motion.p 
                  className="member-bio"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  {member.bio}
                </motion.p>
                <motion.div 
                  className="member-skills"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {member.skills.map((skill, i) => (
                    <motion.span 
                      key={skill}
                      className="skill-tag"
                      variants={skillVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Right arrow for small screens */}
          {isMobile && (
            <motion.button 
              className="team-arrow right" 
              onClick={handleRight} 
              aria-label="Next member"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &#8594;
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;