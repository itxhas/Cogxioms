import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGlobe } from 'react-icons/fi';
import './contact.css';

const contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted');
  };

  return (
    <section id="contacts" className="contacts-section">
      <div className="contacts-container">
        <motion.h2 
          className="contacts-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get <span>In Touch</span>
        </motion.h2>

        <motion.p
          className="contacts-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have questions or want to discuss a project? Reach out to us!
        </motion.p>

        <div className="contacts-content">
          <motion.div
            className="contacts-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="info-title">Contact Information</h3>
            <p className="info-description">
              Fill out the form or contacts us directly. We'll get back to you as soon as possible.
            </p>

            <div className="contacts-items">
              <div className="contacts-item">
                <div className="contacts-icon">
                  <FiMail />
                </div>
                <div className="contacts-details">
                  <h4>Email</h4>
                  <a href="mailto:haseebarif1285@gmail.com">haseebarif1285@gmail.com</a>
                </div>
              </div>

              <div className="contacts-item">
                <div className="contacts-icon">
                  <FiPhone />
                </div>
                <div className="contacts-details">
                  <h4>Phone</h4>
                  <a href="tel:03468767647">+923130107453</a>
                </div>
              </div>

              <div className="contacts-item">
                <div className="contacts-icon">
                  <FiGlobe />
                </div>
                <div className="contacts-details">
                  <h4>Website</h4>
                  <a href="https://www.cogxioms.com" target="_blank" rel="noopener noreferrer">www.cogxioms.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contacts-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <input type="text" id="subject" name="subject" placeholder="Subject" required />
            </div>

            <div className="form-group">
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="secondaryBtn">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default contacts;