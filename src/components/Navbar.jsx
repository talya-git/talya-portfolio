import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={styles.nav}
    >
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <img src="/profile.png" alt="TT" style={styles.logoImg} />
        </Link>

        <div style={styles.links}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                ...styles.link,
                ...(location.pathname === link.path ? styles.activeLink : {})
              }}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeTab"
                  style={styles.activeDot}
                />
              )}
            </Link>
          ))}
        </div>

        <button style={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.mobileMenu}
        >
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: 'rgba(10, 10, 26, 0.9)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(108, 99, 255, 0.1)',
    padding: '16px 0'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logoImg: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgba(108, 99, 255, 0.4)'
  },
  logoAccent: {
    color: '#6c63ff'
  },
  links: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  },
  link: {
    color: '#b8b8d4',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    position: 'relative',
    padding: '4px 0',
    transition: 'color 0.3s'
  },
  activeLink: {
    color: '#6c63ff'
  },
  activeDot: {
    position: 'absolute',
    bottom: '-4px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#6c63ff'
  },
  menuBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer'
  },
  mobileMenu: {
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  mobileLink: {
    color: '#b8b8d4',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 500
  }
};

const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @media (max-width: 768px) {
    nav button { display: block !important; }
    nav > div > div:nth-child(2) { display: none !important; }
  }
`;
document.head.appendChild(styleSheet);

export default Navbar;
