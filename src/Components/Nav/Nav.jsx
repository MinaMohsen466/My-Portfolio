import { useState } from 'react';
import { FiMenu, FiX, FiGlobe, FiChevronRight, FiDownload } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './Nav.css';

const Nav = ({ language, setLanguage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = language ? [
    { text: "أعمالي", href: "#work" },
    { text: "معلومات عني", href: "#about" },
    { text: "مهاراتي", href: "#skills" },
    { text: "تواصل", href: "#contact" }
  ] : [
    { text: "Work", href: "#work" },
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Contact", href: "#contact" }
  ];

  const handleDownload = () => {
    // Create a temporary anchor tag
    const link = document.createElement('a');
    link.href = '/soldkw.docx'; // Make sure this file is in your public folder
    link.download = 'soldkw.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20 }}
    >
      <div className="nav-container">
        {/* Logo/Brand */}
        <a href="#" className="nav-logo">
          {`<MINA.M/>`}
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            {menuItems.map((item, i) => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredItem(item.href)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <a href={item.href}>
                  {item.text}
                  {hoveredItem === item.href && (
                    <motion.span 
                      className="underline"
                      layoutId="navUnderline"
                      transition={{ type: "spring", bounce: 0.25 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
            
            {/* Resume Download Button - Desktop */}
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="resume-btn"
                onClick={handleDownload}
              >
                <FiDownload className="download-icon" />
                {language ? "السيرة الذاتية" : "Resume"}
                <span className="pulse-effect"></span>
              </button>
            </motion.li>
          </ul>
        </nav>

        {/* Language Toggle */}
        <motion.button
          className="language-btn"
          onClick={() => setLanguage(!language)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiGlobe />
          {language ? "EN" : "AR"}
        </motion.button>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: language ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: language ? 300 : -300 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <ul>
                {menuItems.map((item) => (
                  <motion.li
                    key={item.href}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <a href={item.href}>
                      {item.text}
                      <FiChevronRight className="arrow" />
                    </a>
                  </motion.li>
                ))}
                
                {/* Resume Download Button - Mobile */}
                <motion.li
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    handleDownload();
                    setMobileOpen(false);
                  }}
                >
                  <button className="mobile-resume-btn">
                    <FiDownload className="download-icon" />
                    {language ? "السيرة الذاتية" : "Resume"}
                  </button>
                </motion.li>
              </ul>
              
              <motion.button
                className="mobile-language-btn"
                onClick={() => {
                  setLanguage(!language);
                  setMobileOpen(false);
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGlobe />
                {language ? "English" : "العربية"}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Nav;