import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import './Projects.css';
// import raqya from '../../../assets/img/raqya.png'
import inanc from '../../../assets/img/inanc.png'
import serelle from '../../../assets/img/serelle.png';
import n21 from '../../../assets/img/n21.png'
import mubaaderServices from '../../../assets/img/mubaaderServices.png'
import theqaInvest from '../../../assets/img/theqaInvest.png'

const Projects = ({ language }) => {
  // Projects data
  const projectsData = [
    {
      id: 1,
      title: 'RAYQA E-Commerce',
      image: inanc,
      description: language ? 'موقع احترافي لعرض الأعمال لموقع ملابس عصري يوفر تجربة تسوق سهلة وتصميم متجاوب مع جميع الأجهزة' : 'Modern fashion website offering a smooth shopping experience and responsive design.',
      tags: ['shopify'],
      demoLink: 'https://raqya.store/',
    },
    {
      id: 2,
      title: 'INANC E-Commerce',
      image: inanc,
      description: language ? 'موقع احترافي لعرض الأعمالموقع ملابس عصري يوفر تجربة تسوق سهلة وتصميم متجاوب مع جميع الأجهزة' : 'Modern fashion website offering a smooth shopping experience and responsive design.',
      tags: ['Shopify'],
      demoLink: 'https://inanckw.com/',
    },
    {
      id: 3,
      title: 'Serelle E-commerce',
      image: serelle,
      description: language ? 'موقع احترافي لعرض الأعمالموقع ملابس عصري يوفر تجربة تسوق سهلة وتصميم متجاوب مع جميع الأجهزة' : 'Modern fashion website offering a smooth shopping experience and responsive design.',
      tags: ['Shopify', 'Liquid'],
      demoLink: 'https://serellekw.com',
    },
    {
      id: 4,
      title: 'N21 E-commerce',
      image: n21,
      description: language ? 'موقع احترافي لعرض الأعمالموقع ملابس عصري يوفر تجربة تسوق سهلة وتصميم متجاوب مع جميع الأجهزة' : 'Modern fashion website offering a smooth shopping experience and responsive design.',
      tags: ['Shopify'],
      demoLink: 'https://N21kw.com',
    },
    {
      id: 5,
      title: 'mubaader services',
      image: mubaaderServices,
      description: language ? 'موقع خدمات يقدم عروض متعددة بتصميم جذاب ومتجاوب يسهل التنقل.' : 'A services website offering various packages with an attractive and responsive design for easy navigation.',
      tags: ['HTML', 'CSS', 'JS', 'React'],
      demoLink: 'https://mubaader-services.vercel.app/',
    },
    {
      id: 6,
      title: 'THEQA -INVESTS',
      image: theqaInvest,
      description: language ? 'موقع تعريفي احترافي لشركة "ثقة إنفست" يقدم معلومات واضحة عن خدمات الاستثمار، متجاوب يبرز الهوية المؤسسية.' : 'A professional landing page for "Theqa Invest" showcasing investment services, responsive design that reflects the brand’s identity.',
      tags: ['HTML', 'CSS', 'Taliwind', 'JS', 'React'],
      demoLink: 'https://theqa-invest.vercel.app/',
    },
  ];

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

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {projectsData.map((project) => (
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