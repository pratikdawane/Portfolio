
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './Contact.module.css';
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { FaLocationDot, FaPaperPlane } from "react-icons/fa6";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

   const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
     
      const serviceId = 'service_9gk69jk';
      const templateId = 'template_r7sh8f8';
      const publicKey = 'y2r9Po7iYPqPqESgL';

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
          <span className={styles.titleUnderline}></span>
        </motion.h2>

        <div className={styles.contactGrid}>
          <div className='contactInfo'>
            <motion.div 
            className={styles.contactInfo} 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.infoContent}>
              <h3 className={styles.contactSubtitle}>Let's Talk</h3>
              <p className={styles.contactText}>
                I'm currently open to freelance opportunities, full-time positions, and interesting projects. Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
              
              <div className={styles.contactDetails}>
                <motion.div 
                  className={styles.contactItem}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.contactIcon}>
                    <IoMdMail />
                  </div>
                  <div className={styles.contactItems}>
                    <span className={styles.contactLabel}>Email</span>
                    <a href="pratikdawane661@gmail.com" className={styles.contactValue}>pratikdawane661@gmail.com</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={styles.contactItem}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.contactIcon}>
                    <IoCall />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Phone</span>
                    <a href="tel:+1234567890" className={styles.contactValue}>+91 8767239086</a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className={styles.contactItem}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.contactIcon}>
                    <FaLocationDot />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Location</span>
                    <span className={styles.contactValue}>Pune, Maharastra, India</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          </div>

          <motion.form 
            onSubmit={handleSubmit(onSubmit)}
            className={styles.contactForm}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              <p className={styles.formSubtitle}>Fill out the form and I'll get back to you soon</p>
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name='from_name'
                className={styles.formInput}
                placeholder=" "
                {...register("name", { required: "Name is required" })}
              />
              <label htmlFor="name" className={styles.formLabel}>Full Name</label>
              {errors.name && <span className={styles.formError}>{errors.name.message}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name='from_email'
                className={styles.formInput}
                placeholder=" "
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              <label htmlFor="email" className={styles.formLabel}>Email Address</label>
              {errors.email && <span className={styles.formError}>{errors.email.message}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="text"
                id="subject"
                name='subject'
                className={styles.formInput}
                placeholder=" "
                {...register("subject", { required: "Subject is required" })}
              />
              <label htmlFor="subject" className={styles.formLabel}>Subject</label>
              {errors.subject && <span className={styles.formError}>{errors.subject.message}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <textarea
                id="message"
                name='message'
                rows="5"
                className={styles.formTextarea}
                placeholder=" "
                {...register("message", { 
                  required: "Message is required",
                  minLength: {
                    value: 20,
                    message: "Message must be at least 20 characters"
                  }
                })}
              ></textarea>
              <label htmlFor="message" className={styles.formLabel}>Your Message</label>
              {errors.message && <span className={styles.formError}>{errors.message.message}</span>}
            </div>

            <motion.button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
          >
            {isSubmitting ? (
              <span className={styles.submitText}>Sending...</span>
            ) : (
              <>
                <span className={styles.submitText}>Send Message</span>
                <FaPaperPlane className={styles.submitIcon} />
              </>
            )}
          </motion.button>
           {submitStatus.message && (
            <div className={`${styles.statusMessage} ${submitStatus.success ? styles.success : styles.error}`}>
              {submitStatus.message}
            </div>
          )}
          </motion.form>
        </div>
        <p style={{marginTop: "4rem", marginBottom: "2rem", textAlign: "center", color: "#94a3b8"}}> Have an exciting project or want to discuss opportunities? Reach out and I'll respond within 24 hours.</p>

      </div>
    </section>
  );
};

export default Contact;