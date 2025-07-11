import { useState } from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Haseeb Arif',
    role: 'Full-stack Developer',
    image: '/Images/Haseeb.png',
    bio: 'Experienced in React, Node.js, and modern web development practices.'
  },
  {
    id: 2,
    name: 'Hassan Ali ',
    role: 'Software Engineer',
    image: '/Images/Hassan.jpg',
    bio: 'Specializes in creating intuitive user interfaces and engaging experiences.'
  },
  {
    id: 3,
    name: 'Mian Mubasher',
    role: 'AI Engineer',
    image: '/Images/MianMuhammad.jpg',
    bio: 'Expert in database architecture and server-side development.'
  }
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // For small screens, show only prev, current, next
  const getVisibleMembers = () => {
    if (window.innerWidth <= 900) {
      const prev = teamMembers[(currentIndex + teamMembers.length - 1) % teamMembers.length];
      const current = teamMembers[currentIndex];
      const next = teamMembers[(currentIndex + 1) % teamMembers.length];
      return [prev, current, next];
    }
    // For large screens, show all
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

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <motion.h2
            className="team-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span>Team</span>
          </motion.h2>
          <p className="team-subtitle">Meet the talented individuals behind our success</p>
        </div>
        <div className="team-display">
          {/* Left arrow for small screens */}
          <button className="team-arrow left" onClick={handleLeft} aria-label="Previous member">&#8592;</button>
          {getVisibleMembers().map((member, idx) => (
            <div key={member.id} className={`team-member${idx === 1 && window.innerWidth <= 900 ? ' current' : ''}`}>
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image"
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
          {/* Right arrow for small screens */}
          <button className="team-arrow right" onClick={handleRight} aria-label="Next member">&#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default Team;