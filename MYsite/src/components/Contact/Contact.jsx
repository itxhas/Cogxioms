import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGlobe } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have questions or want to discuss a project? Reach out to us!
        </motion.p>

        <div className="grid">
          <motion.div
            className="info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Get in Touch</h3>
            <p>
              Have a project in mind or want to learn more about our services? 
              Reach out to us and we'll get back to you as soon as possible.
            </p>

            <div className="contactItems">
              <div className="contactItem">
                <FiMail className="icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:haseebarif1285@gmail.com">haseebarif1285@gmail.com</a>
                </div>
              </div>

              <div className="contactItem">
                <FiPhone className="icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:03468767647">0346 8767647</a>
                </div>
              </div>

              <div className="contactItem">
                <FiGlobe className="icon" />
                <div>
                  <h4>Website</h4>
                  <a href="https://www.cogxoms.com" target="_blank" rel="noopener noreferrer">www.cogxoms.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="formGroup">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;