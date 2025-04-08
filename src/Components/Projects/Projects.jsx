import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import './Projects.css';
import projectImg1 from '../../../assets/fav-icon.png';

const Projects = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter buttons data
  const filterButtons = [
    { id: 'all', label: language ? 'الكل' : 'All' },
    { id: 'react', label: 'React' },
    { id: 'shopify', label: language ? 'مطور ويب' : 'web Develop' },
  ];

  // Sample projects data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      category: ['shopify'],
      image: projectImg1, // Using proper image reference
      description: language ? 'لوحة تحكم متكاملة للتجارة الإلكترونية' : 'A comprehensive dashboard for e-commerce store owners',
      tags: ['Shopify'],
      demoLink: 'https://inanckw.com/',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: ['react'],
      image: projectImg1, // Using proper image reference
      description: language ? 'موقع احترافي لعرض الأعمال' : 'Professional portfolio website with modern design',
      tags: ['React', 'Framer Motion'],
      demoLink: 'https://portfolio-demo.example.com',
    },
    {
      id: 3,
      title: 'Shopify Theme',
      category: ['shopify'],
      image: projectImg1, // Using proper image reference
      description: language ? 'قالب مخصص لمتاجر شوبيفاي' : 'Custom theme for Shopify stores with unique features',
      tags: ['Shopify', 'Liquid', 'JavaScript'],
      demoLink: 'https://shopify-theme-demo.example.com',
    },
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(activeFilter));

  return (
    <section className="projects-section" id="projects-section">
      <div className="projects-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {language ? 'المشاريع' : 'Projects'}
        </motion.h2>

        {/* Filter Buttons */}
        <div className="filter-container">
          {filterButtons.map((button) => (
            <motion.button
              key={button.id}
              className={`filter-btn ${activeFilter === button.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(button.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {button.label}
              {activeFilter === button.id && (
                <motion.span 
                  className="btn-active-indicator" 
                  layoutId="activeFilterIndicator"
                  transition={{ type: 'spring', bounce: 0.25 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <motion.a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-demo-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {language ? 'عرض توضيحي' : 'View Demo'} <FiExternalLink />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;