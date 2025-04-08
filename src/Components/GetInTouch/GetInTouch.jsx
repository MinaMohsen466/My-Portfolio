import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';
import { useForm } from '@formspree/react';
import './GetInTouch.css';

const GetInTouch = ({ language }) => {
  const [state, handleSubmit] = useForm("xdkeogdq");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    // Reset form immediately after submission
    resetForm();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="contact-content"
        >
          <div className="contact-text">
            <h2 className="contact-title">
              <span className="highlight">Get In Touch</span>
            </h2>
            <p className="contact-description">
              {language
                ? "أنا دائمًا منفتح لفرص جديدة، تعاون، أو مجرد دردشة ودية حول تطوير الويب. لا تتردد في التواصل!"
                : "I'm always open to new opportunities, collaborations, or just a friendly chat about web development. Feel free to reach out!"}
            </p>

            <div className="contact-info">
              <div className="contact-info-item">
                <FiMail className="contact-icon" />
                <div>
                  <h3 className="contact-info-title">{language ? "راسلني على" : "Email Me At"}</h3>
                  <p className="contact-info-text"><a href="mailto:minamohsen466@gmail.com">hello@minamohsen.dev</a></p>
                </div>
              </div>

              <div className="contact-card">
                <h3 className="contact-card-title">{language ? "تبحث عن مطور؟" : "Looking for a developer?"}</h3>
                <p className="contact-card-text">
                  {language
                    ? "أنا متاح حاليًا للعمل الحر وفرص العمل بدوام كامل. دعنا نناقش كيف يمكنني المساعدة في تحويل أفكارك إلى واقع."
                    : "I'm currently available for freelance work and open to full-time opportunities. Let's discuss how I can help bring your ideas to life."}
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3 className="form-title">{language ? "أرسل لي رسالة" : "Send Me a Message"}</h3>
            <form onSubmit={onSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{language ? "اسمك" : "Your Name"}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{language ? "بريدك الإلكتروني" : "Your Email"}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{language ? "رسالتك" : "Your Message"}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiSend />
                {state.submitting
                  ? (language ? "جاري الإرسال..." : "Sending...")
                  : (language ? "إرسال الرسالة" : "Send Message")}
              </motion.button>

              {state.succeeded && (
                <div className="form-success">
                  {language
                    ? "شكراً لك! تم استلام رسالتك وسأرد عليك قريباً."
                    : "Thank you! Your message has been received and I'll get back to you soon."}
                </div>
              )}

              {state.errors?.length > 0 && (
                <div className="form-error">
                  {language
                    ? "عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى."
                    : "Sorry, something went wrong. Please try again."}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;