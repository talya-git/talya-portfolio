import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiCode, FiAward } from 'react-icons/fi';
import { experience, education, skills } from '../data/resume';

function About() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={styles.title}>אודות</h1>
          <p style={styles.subtitle}>הרקע המקצועי וההשכלה שלי</p>
        </motion.div>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={styles.section}
        >
          <div style={styles.sectionHeader}>
            <FiBriefcase size={24} color="#6c63ff" />
            <h2 style={styles.sectionTitle}>ניסיון תעסוקתי</h2>
          </div>

          {experience.map((exp, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>{exp.company}</h3>
                <span style={styles.period}>{exp.period}</span>
              </div>
              <p style={styles.role}>{exp.role}</p>
              <p style={styles.project}>{exp.project}</p>
              <ul style={styles.list}>
                {exp.highlights.map((item, j) => (
                  <li key={j} style={styles.listItem}>
                    <span style={styles.bullet}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={styles.section}
        >
          <div style={styles.sectionHeader}>
            <FiCode size={24} color="#00d4aa" />
            <h2 style={styles.sectionTitle}>ידע מקצועי</h2>
          </div>

          <div style={styles.skillsGrid}>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillCatTitle}>שפות תכנות</h4>
              <div style={styles.tags}>
                {skills.languages.map(s => <span key={s} style={styles.skillTag}>{s}</span>)}
              </div>
            </div>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillCatTitle}>Web & Frameworks</h4>
              <div style={styles.tags}>
                {skills.web.map(s => <span key={s} style={styles.skillTag}>{s}</span>)}
              </div>
            </div>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillCatTitle}>בסיסי נתונים</h4>
              <div style={styles.tags}>
                {skills.databases.map(s => <span key={s} style={styles.skillTag}>{s}</span>)}
              </div>
            </div>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillCatTitle}>עקרונות ומתודולוגיות</h4>
              <div style={styles.tags}>
                {skills.concepts.map(s => <span key={s} style={{...styles.skillTag, ...styles.highlightTag}}>{s}</span>)}
              </div>
            </div>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillCatTitle}>כלים וסביבות</h4>
              <div style={styles.tags}>
                {skills.tools.map(s => <span key={s} style={styles.skillTag}>{s}</span>)}
              </div>
            </div>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillCatTitle}>מערכות הפעלה</h4>
              <div style={styles.tags}>
                {skills.os.map(s => <span key={s} style={styles.skillTag}>{s}</span>)}
              </div>
            </div>
            <div style={styles.skillCategory}>
              <h4 style={styles.skillCatTitle}>קורסי הרחבה</h4>
              <div style={styles.tags}>
                {skills.courses.map(s => <span key={s} style={styles.skillTag}>{s}</span>)}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={styles.section}
        >
          <div style={styles.sectionHeader}>
            <FiBook size={24} color="#ff6b9d" />
            <h2 style={styles.sectionTitle}>השכלה</h2>
          </div>

          {education.map((edu, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>{edu.period}</h3>
              </div>
              <ul style={styles.list}>
                {edu.items.map((item, j) => (
                  <li key={j} style={styles.listItem}>
                    <span style={styles.bullet}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.section>
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
    maxWidth: '900px',
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
  section: {
    marginBottom: '60px'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#fff'
  },
  card: {
    background: 'rgba(18, 18, 42, 0.8)',
    border: '1px solid rgba(108, 99, 255, 0.1)',
    borderRadius: '16px',
    padding: '28px',
    marginBottom: '16px',
    transition: 'all 0.3s',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
    flexWrap: 'wrap',
    gap: '8px'
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#fff'
  },
  period: {
    padding: '4px 12px',
    borderRadius: '20px',
    background: 'rgba(108, 99, 255, 0.1)',
    color: '#8b83ff',
    fontSize: '0.85rem'
  },
  role: {
    color: '#00d4aa',
    fontWeight: 600,
    marginBottom: '4px'
  },
  project: {
    color: '#b8b8d4',
    fontSize: '0.95rem',
    marginBottom: '16px'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  listItem: {
    color: '#b8b8d4',
    marginBottom: '10px',
    display: 'flex',
    gap: '10px',
    lineHeight: 1.7,
    fontSize: '0.95rem'
  },
  bullet: {
    color: '#6c63ff',
    flexShrink: 0
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px'
  },
  skillCategory: {
    background: 'rgba(18, 18, 42, 0.8)',
    border: '1px solid rgba(108, 99, 255, 0.1)',
    borderRadius: '16px',
    padding: '24px'
  },
  skillCatTitle: {
    color: '#fff',
    fontWeight: 600,
    marginBottom: '12px',
    fontSize: '1rem'
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  skillTag: {
    padding: '6px 12px',
    borderRadius: '20px',
    background: 'rgba(108, 99, 255, 0.08)',
    border: '1px solid rgba(108, 99, 255, 0.15)',
    color: '#8b83ff',
    fontSize: '0.82rem'
  },
  highlightTag: {
    background: 'rgba(0, 212, 170, 0.1)',
    border: '1px solid rgba(0, 212, 170, 0.3)',
    color: '#00d4aa',
    fontWeight: 600
  }
};

export default About;
