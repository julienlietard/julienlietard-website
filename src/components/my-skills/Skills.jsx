import React, { useEffect, useState } from 'react';
import './skills.css';

const skills = [
  'JavaScript', 'React', 'TypeScript', 'HTML', 'CSS', 'Java',
  'Spring Boot', 'Python', 'SQL', 'NoSQL', 'Vue', 'Angular',
  'PHP', 'Symfony', 'Flask', 'C++'
];

const getRandomPosition = () => ({
  top: Math.random() * 80 + 10,
  left: Math.random() * 80 + 10,
});

const getRandomAnimation = () => ({
  duration: Math.random() * 8 + 4,     // 4s à 12s
  amplitude: Math.random() * 50 + 50,  // 5px à 15px
  direction: Math.random() < 0.5 ? 1 : -1
});

const Skills = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const generated = skills.map((label) => ({
      label,
      position: getRandomPosition(),
      animation: getRandomAnimation()
    }));
    setBadges(generated);
  }, []);

  return (
    <section id="skills" className="skills-section">
  <div className="skills__grid-bg" />
  <h2 className="skills-title">Mes Compétences</h2>
  <div className="skills-constellation">
    {badges.map((badge, index) => (
      <div
        key={index}
        className="skill-badge"
        style={{
          top: `${badge.position.top}%`,
          left: `${badge.position.left}%`,
          '--duration': `${badge.animation.duration}s`,
          '--amplitude': `${badge.animation.amplitude}px`,
          '--direction': badge.animation.direction
        }}
      >
        {badge.label}
      </div>
    ))}
  </div>
</section>


  );
};

export default Skills;
