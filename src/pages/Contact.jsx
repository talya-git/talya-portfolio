import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/resume';

const EMAILJS_SERVICE_ID = 'service_d34nq0c';
const EMAILJS_TEMPLATE_ID = 'template_wiuclb8';
const EMAILJS_PUBLIC_KEY = 'GSstTl-kpNl19rfHj';

function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const templateParams = {
      from_name: form.name.value,
      from_email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus(null), 4000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={styles.title}>Get In Touch</h1>
          <p style={styles.subtitle}>Interested in working together? I'd love to hear from you.</p>
        </motion.div>

        <div style={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={styles.infoSection}
          >
            <h3 style={styles.infoTitle}>Let's Connect</h3>
            <p style={styles.infoText}>
              I'm open to new opportunities and excited to collaborate on innovative projects.
              Whether you have a question or just want to say hello — don't hesitate to reach out.
            </p>

            <div style={styles.contactItems}>
              <a href={`mailto:${personalInfo.email}`} style={styles.contactItem}>
                <div style={styles.contactIcon}><FiMail size={20} /></div>
                <div>
                  <span style={styles.contactLabel}>Email</span>
                  <span style={styles.contactValue}>{personalInfo.email}</span>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone}`} style={styles.contactItem}>
                <div style={styles.contactIcon}><FiPhone size={20} /></div>
                <div>
                  <span style={styles.contactLabel}>Phone</span>
                  <span style={styles.contactValue}>{personalInfo.phone}</span>
                </div>
              </a>
            </div>

            <div style={styles.socials}>
              <a href="https://github.com/talya-git" target="_blank" rel="noreferrer" style={styles.socialBtn}>
                <FiGithub size={20} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/talya-toledano-9ba5b1411/" target="_blank" rel="noreferrer" style={styles.socialBtn}>
                <FiLinkedin size={20} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={styles.form}
            onSubmit={handleSubmit}
          >
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input name="name" style={styles.input} placeholder="Your name" required />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input name="email" type="email" style={styles.input} placeholder="your@email.com" required />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Subject</label>
              <input name="subject" style={styles.input} placeholder="How can I help?" />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea name="message" style={styles.textarea} placeholder="Write your message here..." rows={5} required />
            </div>
            <button type="submit" style={styles.submitBtn} disabled={status === 'sending'}>
              {status === 'sending' ? '⏳ Sending...' : <><FiSend size={18} /> Send Message</>}
            </button>

            {status === 'success' && (
              <div style={styles.successMsg}><FiCheck size={18} /> Message sent successfully!</div>
            )}
            {status === 'error' && (
              <div style={styles.errorMsg}><FiAlertCircle size={18} /> Failed to send. Please try again.</div>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    paddingTop: '120px',
    paddingBottom: '80px'
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 24px'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '8px'
  },
  subtitle: {
    color: '#b8b8d4',
    fontSize: '1.1rem',
    marginBottom: '48px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px',
    alignItems: 'start'
  },
  infoSection: {
    padding: '8px 0'
  },
  infoTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '12px'
  },
  infoText: {
    color: '#b8b8d4',
    lineHeight: 1.8,
    marginBottom: '32px'
  },
  contactItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '32px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 20px',
    borderRadius: '12px',
    background: 'rgba(18, 18, 42, 0.8)',
    border: '1px solid rgba(108, 99, 255, 0.1)',
    textDecoration: 'none',
    transition: 'all 0.3s'
  },
  contactIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    background: 'rgba(108, 99, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6c63ff'
  },
  contactLabel: {
    display: 'block',
    color: '#6b6b8a',
    fontSize: '0.8rem',
    marginBottom: '2px'
  },
  contactValue: {
    display: 'block',
    color: '#fff',
    fontWeight: 500
  },
  socials: {
    display: 'flex',
    gap: '12px'
  },
  socialBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    borderRadius: '12px',
    background: 'rgba(108, 99, 255, 0.1)',
    border: '1px solid rgba(108, 99, 255, 0.2)',
    color: '#8b83ff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'all 0.3s'
  },
  form: {
    background: 'rgba(18, 18, 42, 0.8)',
    border: '1px solid rgba(108, 99, 255, 0.1)',
    borderRadius: '20px',
    padding: '32px'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    color: '#b8b8d4',
    fontSize: '0.9rem',
    marginBottom: '8px',
    fontWeight: 500
  },
  input: {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid rgba(108, 99, 255, 0.15)',
    background: 'rgba(10, 10, 26, 0.6)',
    color: '#fff',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s'
  },
  textarea: {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid rgba(108, 99, 255, 0.15)',
    background: 'rgba(10, 10, 26, 0.6)',
    color: '#fff',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    resize: 'vertical',
    transition: 'border-color 0.3s'
  },
  submitBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 32px',
    borderRadius: '50px',
    background: 'linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)',
    color: 'white',
    fontWeight: 600,
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    boxShadow: '0 4px 20px rgba(108, 99, 255, 0.4)',
    transition: 'all 0.3s'
  },
  successMsg: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '16px',
    padding: '12px 20px',
    borderRadius: '12px',
    background: 'rgba(0, 212, 170, 0.1)',
    border: '1px solid rgba(0, 212, 170, 0.3)',
    color: '#00d4aa',
    fontSize: '0.9rem'
  },
  errorMsg: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '16px',
    padding: '12px 20px',
    borderRadius: '12px',
    background: 'rgba(255, 107, 157, 0.1)',
    border: '1px solid rgba(255, 107, 157, 0.3)',
    color: '#ff6b9d',
    fontSize: '0.9rem'
  }
};

export default Contact;
