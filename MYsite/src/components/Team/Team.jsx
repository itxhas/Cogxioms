// Team.jsx
import { useState } from 'react';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Muhammad Haseeb',
    role: 'Full-stack Web Developer',
    image: '/Images/MianMuhammad.png',
    bio: 'Experienced in React, Node.js, and modern web development practices.'
  },
  {
    id: 2,
    name: 'Hassan Ali ',
    role: 'UI/UX Designer',
    image: '/Images/MianMuhammad.png',
    bio: 'Specializes in creating intuitive user interfaces and engaging experiences.'
  },
  {
    id: 3,
    name: 'Mian Mubasher',
    role: 'Backend Engineer',
    image: '/Images/MianMuhammad.png',
    bio: 'Expert in database architecture and server-side development.'
  }
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleMembers = () => {
    // Get current, next, and previous members
    const prev = teamMembers[(currentIndex + teamMembers.length - 1) % teamMembers.length];
    const current = teamMembers[currentIndex];
    const next = teamMembers[(currentIndex + 1) % teamMembers.length];
    
    return [
      { ...prev, key: 'prev-prev' }, // Left-most duplicate
      { ...prev, key: 'prev' },      // Left card
      { ...current, key: 'current' }, // Center card
      { ...next, key: 'next' },      // Right card
      { ...next, key: 'next-next' }   // Right-most duplicate
    ];
  };

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Our Team</h2>
          <p className="team-subtitle">Meet the talented individuals behind our success</p>
        </div>

        <div className="team-display" onClick={handleClick}>
          {getVisibleMembers().map((member) => (
            <div key={`${member.id}-${member.key}`} className={`team-member ${member.key.includes('current') ? 'current' : ''}`}>
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image"
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.name === 'Zohaib Murtaza' ? 'Full-stack Web Developer' : member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;