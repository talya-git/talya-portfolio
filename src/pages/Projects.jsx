import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiImage, FiX } from 'react-icons/fi';
import { projects } from '../data/resume';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const next = { ...prev };
        projects.forEach(project => {
          if (project.images && project.images.length > 1) {
            const current = prev[project.id] || 0;
            next[project.id] = (current + 1) % project.images.length;
          }
        });
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={styles.title}>הפרויקטים שלי</h1>
          <p style={styles.subtitle}>אוסף הפרויקטים שפיתחתי - עם קוד, תמונות מסך ולינקים</p>
        </motion.div>

        <div style={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={styles.card}
              onClick={() => setSelectedProject(project)}
            >
              <div style={styles.cardImage}>
                {project.images && project.images.length > 0 ? (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex[project.id] || 0}
                      src={project.images[currentImageIndex[project.id] || 0]}
                      alt={project.title}
                      style={styles.img}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                ) : (
                  <div style={styles.placeholder}>
                    <FiImage size={40} color="#6b6b8a" />
                    <span style={styles.placeholderText}>לחצי להוספת תמונות</span>
                  </div>
                )}
                {project.images && project.images.length > 1 && (
                  <div style={styles.dots}>
                    {project.images.map((_, i) => (
                      <span
                        key={i}
                        style={{
                          ...styles.dot,
                          ...(i === (currentImageIndex[project.id] || 0) ? styles.dotActive : {})
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.cardDesc}>{project.description}</p>

                <div style={styles.techRow}>
                  {[...project.techStack.client, ...project.techStack.server].slice(0, 5).map(tech => (
                    <span key={tech} style={styles.techTag}>{tech}</span>
                  ))}
                </div>

                <div style={styles.cardActions}>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" style={styles.actionBtn}>
                      <FiExternalLink size={16} /> צפייה באתר
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" style={styles.actionBtn}>
                      <FiGithub size={16} /> קוד מקור
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Add New Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: projects.length * 0.1 }}
            style={styles.addCard}
          >
            <span style={styles.addIcon}>+</span>
            <span style={styles.addText}>הוסיפי פרויקט חדש</span>
            <span style={styles.addHint}>ערכי את קובץ resume.js</span>
          </motion.div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.overlay}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={styles.modal}
              onClick={e => e.stopPropagation()}
            >
              <button style={styles.closeBtn} onClick={() => setSelectedProject(null)}>
                <FiX size={24} />
              </button>

              <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
              <p style={styles.modalDesc}>{selectedProject.description}</p>

              <div style={styles.modalSection}>
                <h4 style={styles.modalLabel}>צד לקוח:</h4>
                <div style={styles.techRow}>
                  {selectedProject.techStack.client.map(t => (
                    <span key={t} style={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={styles.modalSection}>
                <h4 style={styles.modalLabel}>צד שרת:</h4>
                <div style={styles.techRow}>
                  {selectedProject.techStack.server.map(t => (
                    <span key={t} style={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={styles.modalSection}>
                <h4 style={styles.modalLabel}>פיצ'רים עיקריים:</h4>
                <ul style={styles.modalList}>
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} style={styles.modalListItem}>▹ {h}</li>
                  ))}
                </ul>
              </div>

              {selectedProject.images && selectedProject.images.length > 0 && (
                <div style={styles.modalSection}>
                  <h4 style={styles.modalLabel}>צילומי מסך:</h4>
                  <div style={styles.imageGallery}>
                    {selectedProject.images.map((img, i) => (
                      <img key={i} src={img} alt={`screenshot ${i + 1}`} style={styles.galleryImg} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
    maxWidth: '1100px',
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '24px'
  },
  card: {
    background: 'rgba(18, 18, 42, 0.8)',
    border: '1px solid rgba(108, 99, 255, 0.1)',
    borderRadius: '20px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  cardImage: {
    height: '200px',
    background: 'rgba(10, 10, 26, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(108, 99, 255, 0.1)',
    position: 'relative',
    overflow: 'hidden'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0
  },
  dots: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '6px',
    zIndex: 10
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.4)',
    transition: 'all 0.3s'
  },
  dotActive: {
    background: '#6c63ff',
    transform: 'scale(1.3)'
  },
  placeholder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'
  },
  placeholderText: {
    color: '#6b6b8a',
    fontSize: '0.85rem'
  },
  cardContent: {
    padding: '24px'
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '8px'
  },
  cardDesc: {
    color: '#b8b8d4',
    fontSize: '0.9rem',
    marginBottom: '16px',
    lineHeight: 1.6
  },
  techRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '16px'
  },
  techTag: {
    padding: '4px 10px',
    borderRadius: '12px',
    background: 'rgba(108, 99, 255, 0.08)',
    border: '1px solid rgba(108, 99, 255, 0.15)',
    color: '#8b83ff',
    fontSize: '0.75rem'
  },
  cardActions: {
    display: 'flex',
    gap: '12px'
  },
  actionBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '20px',
    background: 'rgba(108, 99, 255, 0.1)',
    color: '#8b83ff',
    fontSize: '0.85rem',
    textDecoration: 'none',
    transition: 'all 0.3s'
  },
  addCard: {
    background: 'rgba(18, 18, 42, 0.4)',
    border: '2px dashed rgba(108, 99, 255, 0.2)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '340px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    gap: '12px'
  },
  addIcon: {
    fontSize: '3rem',
    color: '#6b6b8a'
  },
  addText: {
    color: '#6b6b8a',
    fontSize: '1rem',
    fontWeight: 600
  },
  addHint: {
    color: '#4a4a6a',
    fontSize: '0.8rem'
  },
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '24px'
  },
  modal: {
    background: '#12122a',
    border: '1px solid rgba(108, 99, 255, 0.2)',
    borderRadius: '24px',
    padding: '40px',
    maxWidth: '700px',
    width: '100%',
    maxHeight: '80vh',
    overflowY: 'auto',
    position: 'relative'
  },
  closeBtn: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    background: 'none',
    border: 'none',
    color: '#6b6b8a',
    cursor: 'pointer'
  },
  modalTitle: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '12px'
  },
  modalDesc: {
    color: '#b8b8d4',
    marginBottom: '24px',
    lineHeight: 1.7
  },
  modalSection: {
    marginBottom: '20px'
  },
  modalLabel: {
    color: '#6c63ff',
    fontWeight: 600,
    marginBottom: '8px'
  },
  modalList: {
    listStyle: 'none',
    padding: 0
  },
  modalListItem: {
    color: '#b8b8d4',
    marginBottom: '8px',
    lineHeight: 1.6,
    fontSize: '0.9rem'
  },
  imageGallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '12px'
  },
  galleryImg: {
    width: '100%',
    borderRadius: '12px',
    border: '1px solid rgba(108, 99, 255, 0.1)'
  }
};

export default Projects;
