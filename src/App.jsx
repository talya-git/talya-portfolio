import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Designed & Built by <span style={styles.footerName}>Talya Toledano</span> © {new Date().getFullYear()}
        </p>
      </footer>
    </BrowserRouter>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '32px 24px',
    borderTop: '1px solid rgba(108, 99, 255, 0.1)',
    marginTop: '60px'
  },
  footerText: {
    color: '#6b6b8a',
    fontSize: '0.9rem'
  },
  footerName: {
    color: '#6c63ff',
    fontWeight: 600
  }
};

export default App;
