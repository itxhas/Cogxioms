import { useState } from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Muhammad Haseeb',
    role: 'Full-stack Developer',
    image: '/Images/Haseeb.png',
    bio: 'Experienced in React, Node.js, and modern web development practices.'
  },
  {
    id: 2,
    name: 'Hassan Ali ',
    role: 'Software Engineer',
    image: '/Images/Hassan.png',
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

  const getVisibleMembers = () => {
    const prev = teamMembers[(currentIndex + teamMembers.length - 1) % teamMembers.length];
    const current = teamMembers[currentIndex];
    const next = teamMembers[(currentIndex + 1) % teamMembers.length];

    return [
      { ...prev, key: 'prev-prev' },
      { ...prev, key: 'prev' },
      { ...current, key: 'current' },
      { ...next, key: 'next' },
      { ...next, key: 'next-next' }
    ];
  };

  const handleClick = () => {
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

        <div className="team-display" onClick={handleClick}>
          {getVisibleMembers().map((member) => (
            <div key={`${member.id}-${member.key}`} className={`team-member ${member.key.includes('current') ? 'current' : ''}`}>
              <div className="member-image-container" style={member.key.includes('current') ? { width: '140px', height: '140px' } : {}}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image"
                />
              </div>
              <h3 className="member-name" style={member.key.includes('current') ? { fontSize: '1.5rem' } : {}}>{member.name}</h3>
              <p className="member-role" style={{ color: '#0f172a', fontSize: member.key.includes('current') ? '1.1rem' : '0.95rem' }}>
                {member.name === 'Zohaib Murtaza' ? 'Full-stack Web Developer' : member.role}
              </p>
              {member.key.includes('current') && (
                <p className="member-bio" style={{ marginTop: '0.7rem', fontSize: '0.95rem', color: '#555' }}>{member.bio}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;