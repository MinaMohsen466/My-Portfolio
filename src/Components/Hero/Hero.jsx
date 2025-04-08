import { motion, useAnimation } from 'framer-motion';
import { FiExternalLink, FiMail } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import './Hero.css';
import heroImage from '../../../assets/myImg.jpeg'; // Replace with your image

const Hero = ({ language }) => {
  const [displayName, setDisplayName] = useState('');
  const fullName = "Mina Mohsen";
  const controls = useAnimation();
  const [animationComplete, setAnimationComplete] = useState(false);

  // Typing animation
  useEffect(() => {
    let i = 0;
    let direction = 1;
    const typing = setInterval(() => {
      if (i < fullName.length && direction === 1) {
        setDisplayName(fullName.substring(0, i + 1));
        i++;
      } else if (i > 0 && direction === -1) {
        setDisplayName(fullName.substring(0, i));
        i--;
      } else {
        direction = direction === 1 ? -1 : 1;
        if (direction === 1) {
          setDisplayName('');
          i = 0;
        }
      }
    }, 200);

    return () => clearInterval(typing);
  }, []);

  // Color wave effect variants
  const colorWaveVariants = {
    hidden: { backgroundPosition: '0% 50%' },
    visible: { 
      backgroundPosition: '100% 50%',
      transition: { 
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-text"
          >
            <h4 className="hero-greeting">{language ? "مرحبًا، أنا" : "Hello there, I'm"}</h4>
            
            <motion.h1 
              className="hero-name"
              variants={colorWaveVariants}
              initial="hidden"
              animate={animationComplete ? "visible" : "hidden"}
            >
              {displayName}
              {!animationComplete && (
                <motion.span 
                  className="typing-cursor"
                  animate={controls}
                />
              )}
            </motion.h1>

            <h2 className="hero-title">{language ? "مطور واجهات أمامية" : "Frontend Developer"}</h2>
            <p className="hero-description">
              {language 
                ? "أنا مطور واجهات أمامية شغوف، أتمتع بنظرة ثاقبة للتصميم، وألتزم بإنشاء تطبيقات ويب سهلة الاستخدام وسريعة الاستجابة. بفضل خبرتي في أطر عمل JavaScript الحديثة وفهمي العميق لمبادئ واجهة المستخدم/تجربة المستخدم، أتمكن من سد الفجوة بين التصميم والوظائف."
                : "I'm a passionate frontend developer with a keen eye for design and a commitment to creating intuitive, responsive web applications. With a  foundation in modern JavaScript frameworks and a deep understanding of UI/UX principles, I bridge the gap between design and functionality."}
            </p>
            <div className="hero-buttons">
              <motion.a
                href="#work"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink />
                {language ? "مشاهدة مشاريعي" : "View My Projects"}
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
                {language ? "تواصل معي" : "Contact Me"}
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hero-image-container"
          >
            <div className="hero-image-wrapper">
              <img 
                src={heroImage} 
                alt={language ? "صورة مينا محسن" : "Photo of Mina Mohsen"} 
                className="hero-image"
              />
              <div className="hero-image-border"></div>
              <div className="hero-image-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;