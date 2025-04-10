import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiZap, FiGlobe } from 'react-icons/fi';
import { SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiShopify, SiAdobephotoshop, SiAdobepremierepro, SiRedux } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import './Skills.css';

const Skills = ({ language }) => {
  // Technical skills data
  const technicalSkills = [
    { name: 'HTML', icon: <SiHtml5 className="skill-tech-icon" /> },
    { name: 'CSS', icon: <SiCss3 className="skill-tech-icon" /> },
    { name: 'Sass', icon: <SiSass className="skill-tech-icon" /> },
    { name: 'JavaScript (ES6+)', icon: <SiJavascript className="skill-tech-icon" /> },
    { name: 'React', icon: <SiReact className="skill-tech-icon" /> },
    { name: 'Redux', icon: <SiRedux className="skill-tech-icon" /> },
    { name: 'GitHub', icon: <FaGithub className="skill-tech-icon" /> },
    { name: 'RESTful API', icon: <TbApi className="skill-tech-icon" /> },
    { name: 'Shopify', icon: <SiShopify className="skill-tech-icon" /> },
    { name: 'Adobe Photoshop', icon: <SiAdobephotoshop className="skill-tech-icon" /> },
    { name: 'Adobe Premiere', icon: <SiAdobepremierepro className="skill-tech-icon" /> },
  ];

  // Core competencies/features data
  const featureCards = [
    {
      id: 'clean-code',
      icon: <FiCode className="feature-icon" />,
      title: language ? 'كود نظيف' : 'Clean Code',
      description: language 
        ? 'كتابة كود نظيف وقابل للصيانة باتباع أفضل الممارسات وأنماط التصميم.'
        : 'Writing clean, maintainable code following best practices and design patterns.'
    },
    {
      id: 'responsive-design',
      icon: <FiLayout className="feature-icon" />,
      title: language ? 'تصميم متجاوب' : 'Responsive Design',
      description: language
        ? 'إنشاء تخطيطات سلسة تعمل بسلاسة عبر جميع أحجام الأجهزة.'
        : 'Creating fluid layouts that work seamlessly across all device sizes.'
    },
    {
      id: 'performance',
      icon: <FiZap className="feature-icon" />,
      title: language ? 'الأداء' : 'Performance',
      description: language
        ? 'تحسين التطبيقات للسرعة والكفاءة باستخدام التقنيات الحديثة.'
        : 'Optimizing applications for speed and efficiency with modern techniques.'
    },
    {
      id: 'accessibility',
      icon: <FiGlobe className="feature-icon" />,
      title: language ? 'إمكانية الوصول' : 'Accessibility',
      description: language
        ? 'ضمان أن تطبيقات الويب قابلة للاستخدام من قبل الجميع، بغض النظر عن القدرة.'
        : 'Ensuring web applications are usable by everyone, regardless of ability.'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {language ? 'المهارات والتقنيات' : 'Skills & Technologies'}
        </motion.h2>

        <div className="skills-content">
          {/* Technical Skills List */}
          <motion.div 
            className="skills-list-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.ul className="skills-list" variants={containerVariants}>
              {technicalSkills.map((skill, index) => (
                <motion.li 
                  key={index} 
                  className="skill-item"
                  variants={itemVariants}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            className="feature-cards-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {featureCards.map((feature) => (
              <motion.div 
                key={feature.id}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="feature-icon-container">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;