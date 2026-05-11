import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/resume';

function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.bgOrb1} />
      <div style={styles.bgOrb2} />
      <div style={styles.bgOrb3} />

      <div style={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.content}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={styles.badge}
          >
            👋 Hi there, I'm
          </motion.span>

          <h1 style={styles.name}>{personalInfo.name}</h1>
          <h2 style={styles.title}>{personalInfo.title}</h2>
          <p style={styles.summary}>{personalInfo.summary}</p>

          <div style={styles.buttons}>
            <Link to="/projects" style={styles.btn}>
              View My Work <FiArrowRight />
            </Link>
            <Link to="/contact" style={styles.btnOutline}>
              Get In Touch
            </Link>
          </div>

          <div style={styles.socials}>
            <a href={`mailto:${personalInfo.email}`} style={styles.socialIcon}><FiMail size={20} /></a>
            <a href="https://github.com/talya-git" target="_blank" rel="noreferrer" style={styles.socialIcon}><FiGithub size={20} /></a>
            <a href="#" style={styles.socialIcon}><FiLinkedin size={20} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={styles.visual}
        >
          <div style={styles.codeBlock}>
            <div style={styles.codeHeader}>
              <span style={styles.dot1} />
              <span style={styles.dot2} />
              <span style={styles.dot3} />
            </div>
            <pre style={styles.code}>
{`const developer = {
  name: "${personalInfo.name}",
  role: "Full Stack Developer",
  expertise: [
    "React", "Angular",
    ".NET", "Node.js",
    "Spring Boot"
  ],
  passion: "Crafting elegant
    solutions to complex
    problems ✨"
};`}
            </pre>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={styles.stats}
      >
        <div style={styles.stat}>
          <span style={styles.statNumber}>2+</span>
          <span style={styles.statLabel}>Years of Study</span>
        </div>
        <div style={styles.stat}>
          <span style={styles.statNumber}>10+</span>
          <span style={styles.statLabel}>Technologies</span>
        </div>
        <div style={styles.stat}>
          <span style={styles.statNumber}>Full Stack</span>
          <span style={styles.statLabel}>Specialization</span>
        </div>
      </motion.div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '80px'
  },
  bgOrb1: {
    position: 'absolute',
    top: '10%',
    right: '-10%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
    animation: 'float 6s ease-in-out infinite'
  },
  bgOrb2: {
    position: 'absolute',
    bottom: '10%',
    left: '-5%',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0,212,170,0.1) 0%, transparent 70%)',
    animation: 'float 8s ease-in-out infinite'
  },
  bgOrb3: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,107,157,0.08) 0%, transparent 70%)',
    animation: 'float 7s ease-in-out infinite'
  },
  hero: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 24px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    gap: '60px',
    minHeight: 'calc(100vh - 200px)'
  },
  content: {
    position: 'relative',
    zIndex: 2
  },
  badge: {
    display: 'inline-block',
    padding: '8px 16px',
    borderRadius: '50px',
    background: 'rgba(108, 99, 255, 0.1)',
    border: '1px solid rgba(108, 99, 255, 0.3)',
    fontSize: '0.9rem',
    marginBottom: '20px',
    color: '#b8b8d4'
  },
  name: {
    fontSize: '3.5rem',
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: '12px',
    background: 'linear-gradient(135deg, #ffffff 0%, #b8b8d4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 600,
    color: '#6c63ff',
    marginBottom: '20px'
  },
  summary: {
    fontSize: '1.05rem',
    color: '#b8b8d4',
    lineHeight: 1.8,
    marginBottom: '32px',
    maxWidth: '500px'
  },
  buttons: {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px',
    flexWrap: 'wrap'
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 32px',
    borderRadius: '50px',
    background: 'linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)',
    color: 'white',
    fontWeight: 600,
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'all 0.3s',
    boxShadow: '0 4px 20px rgba(108, 99, 255, 0.4)'
  },
  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 32px',
    borderRadius: '50px',
    background: 'transparent',
    color: '#6c63ff',
    fontWeight: 600,
    fontSize: '1rem',
    textDecoration: 'none',
    border: '2px solid #6c63ff',
    transition: 'all 0.3s'
  },
  socials: {
    display: 'flex',
    gap: '16px'
  },
  socialIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(108, 99, 255, 0.1)',
    border: '1px solid rgba(108, 99, 255, 0.2)',
    color: '#8b83ff',
    transition: 'all 0.3s',
    textDecoration: 'none'
  },
  visual: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  codeBlock: {
    background: 'rgba(18, 18, 42, 0.9)',
    border: '1px solid rgba(108, 99, 255, 0.2)',
    borderRadius: '16px',
    padding: '0',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    overflow: 'hidden'
  },
  codeHeader: {
    display: 'flex',
    gap: '8px',
    padding: '14px 18px',
    borderBottom: '1px solid rgba(108, 99, 255, 0.1)'
  },
  dot1: { width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' },
  dot2: { width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' },
  dot3: { width: '12px', height: '12px', borderRadius: '50%', background: '#28ca42' },
  code: {
    padding: '24px',
    fontSize: '0.9rem',
    color: '#b8b8d4',
    fontFamily: "'Fira Code', monospace",
    lineHeight: 1.8,
    direction: 'ltr',
    textAlign: 'left',
    margin: 0
  },
  stats: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    background: 'rgba(18, 18, 42, 0.6)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(108, 99, 255, 0.1)',
    borderRadius: '20px'
  },
  stat: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #6c63ff, #00d4aa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  statLabel: {
    color: '#6b6b8a',
    fontSize: '0.9rem'
  }
};

export default Home;
