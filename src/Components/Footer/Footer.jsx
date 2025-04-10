import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              {`<MINA.M/>`}
            </a>
            <p className="footer-description">
              {language 
                ? "مطور واجهات أمامية شغوف يركز على إنشاء تطبيقات ويب سهلة الاستخدام وسريعة الاستجابة."
                : "A passionate frontend developer focused on creating intuitive, accessible, and responsive web applications."}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-heading">{language ? "روابط سريعة" : "Quick Links"}</h3>
            <ul className="footer-nav">
              <li><a href="#home">{language ? "معلومات عني" : "About"}</a></li>
              <li><a href="#projects-section">{language ? "أعمالي" : "Projects"}</a></li>
              <li><a href="#contact">{language ? "تواصل" : "Contact"}</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="footer-contact">
            <h3 className="footer-heading">{language ? "تواصل" : "Contact"}</h3>
            <a href="mailto:minamohsen466@gmail.com" className="footer-email">
              <FiMail />
              hello@minamohsen.dev
            </a>
            <div className="footer-social">
              <motion.a 
                href="https://github.com/MinaMohsen466" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="social-icon"
              >
                <FiGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/mina-mohsen-a71711191/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="social-icon"
              >
                <FiLinkedin />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="social-icon"
              >
                <FiTwitter />
              </motion.a>
            </div>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;