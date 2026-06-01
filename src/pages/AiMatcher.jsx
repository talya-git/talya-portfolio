import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCpu, FiUser, FiTrendingUp } from 'react-icons/fi';
import { skills, experience, education } from '../data/resume';

async function analyzeJob(jobText) {
  const profile = `
Skills: ${skills.languages.join(', ')}, ${skills.web.join(', ')}, ${skills.databases.join(', ')}, ${skills.tools.join(', ')}
Concepts: ${skills.concepts.join(', ')}
Experience: ${experience.map(e => `${e.role} at ${e.company} - ${e.highlights.join(', ')}`).join('. ')}
Education: ${education[0].items.join(', ')}
`;

  try {
    const res = await fetch('/.netlify/functions/ai-matcher', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobDescription: jobText, profile })
    });
    const data = await res.json();
    if (data.error) return `❌ Error: ${data.error}`;
    return data.analysis;
  } catch (err) {
    return `❌ Failed to connect to AI service. Please try again.`;
  }
}

function AiMatcher() {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: "Hi! 👋 I'm Talya's AI Job Matcher. Paste a job description and I'll analyze how well it matches her profile, then prioritize it for outreach.\n\nYou can paste multiple jobs — I'll rank them all!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [rankings, setRankings] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    const jobText = input;
    setInput('');
    setIsTyping(true);

    const analysis = await analyzeJob(jobText);
    const aiMsg = { role: 'ai', text: analysis };
    setMessages(prev => [...prev, aiMsg]);
    setRankings(prev => [...prev, { text: jobText.slice(0, 60) + '...', analysis }]);
    setIsTyping(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={styles.title}>
            <FiCpu style={{ marginRight: '12px' }} />
            AI Job Matcher
          </h1>
          <p style={styles.subtitle}>
            Paste a job description and my AI agent will analyze the match & prioritize it
          </p>
        </motion.div>

        <div style={styles.chatLayout}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={styles.chatBox}
          >
            <div style={styles.chatMessages}>
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      ...styles.message,
                      ...(msg.role === 'user' ? styles.userMsg : styles.aiMsg)
                    }}
                  >
                    <div style={msg.role === 'user' ? styles.userIcon : styles.aiIcon}>
                      {msg.role === 'user' ? <FiUser size={14} /> : <FiCpu size={14} />}
                    </div>
                    <div style={styles.msgText}>
                      {msg.text.split('\n').map((line, j) => (
                        <p key={j} style={{ margin: '4px 0' }}>
                          {line.replace(/\*\*(.*?)\*\*/g, '⟨$1⟩').split('⟨').map((part, k) => {
                            if (part.includes('⟩')) {
                              const [bold, rest] = part.split('⟩');
                              return <span key={k}><strong style={{ color: '#fff' }}>{bold}</strong>{rest}</span>;
                            }
                            return <span key={k}>{part}</span>;
                          })}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ ...styles.message, ...styles.aiMsg }}
                >
                  <div style={styles.aiIcon}><FiCpu size={14} /></div>
                  <div style={styles.typing}>
                    <span style={styles.typingDot} />
                    <span style={{ ...styles.typingDot, animationDelay: '0.2s' }} />
                    <span style={{ ...styles.typingDot, animationDelay: '0.4s' }} />
                  </div>
                </motion.div>
              )}
            </div>

            <div style={styles.inputRow}>
              <textarea
                style={styles.input}
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Paste a job description here..."
                rows={2}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
              />
              <button style={styles.sendBtn} onClick={handleSend} disabled={!input.trim()}>
                <FiSend size={20} />
              </button>
            </div>
          </motion.div>

          {rankings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              style={styles.sidebar}
            >
              <h3 style={styles.sidebarTitle}>
                <FiTrendingUp size={18} /> Priority Ranking
              </h3>
              {rankings.map((r, i) => (
                <div key={i} style={styles.rankItem}>
                  <span style={styles.rankNum}>#{i + 1}</span>
                  <span style={styles.rankText}>{r.text}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' },
  container: { maxWidth: '1100px', margin: '0 auto', padding: '0 24px' },
  title: {
    fontSize: '2.5rem', fontWeight: 800, display: 'flex', alignItems: 'center',
    background: 'linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px'
  },
  subtitle: { color: '#b8b8d4', fontSize: '1.1rem', marginBottom: '48px' },
  chatLayout: { display: 'grid', gridTemplateColumns: '1fr 280px', gap: '24px', alignItems: 'start' },
  chatBox: {
    background: 'rgba(18, 18, 42, 0.8)', border: '1px solid rgba(108, 99, 255, 0.1)',
    borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '600px'
  },
  chatMessages: { flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' },
  message: { display: 'flex', gap: '12px', maxWidth: '85%' },
  userMsg: { alignSelf: 'flex-end', flexDirection: 'row-reverse' },
  aiMsg: { alignSelf: 'flex-start' },
  userIcon: {
    width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0, 212, 170, 0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d4aa', flexShrink: 0
  },
  aiIcon: {
    width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(108, 99, 255, 0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6c63ff', flexShrink: 0
  },
  msgText: {
    padding: '12px 16px', borderRadius: '16px', background: 'rgba(108, 99, 255, 0.06)',
    border: '1px solid rgba(108, 99, 255, 0.1)', color: '#b8b8d4', fontSize: '0.9rem', lineHeight: 1.6
  },
  typing: { display: 'flex', gap: '4px', padding: '12px 16px', alignItems: 'center' },
  typingDot: {
    width: '8px', height: '8px', borderRadius: '50%', background: '#6c63ff',
    animation: 'pulse 1s infinite'
  },
  inputRow: {
    display: 'flex', gap: '12px', padding: '16px 24px',
    borderTop: '1px solid rgba(108, 99, 255, 0.1)', alignItems: 'flex-end'
  },
  input: {
    flex: 1, padding: '12px 16px', borderRadius: '12px',
    border: '1px solid rgba(108, 99, 255, 0.15)', background: 'rgba(10, 10, 26, 0.6)',
    color: '#fff', fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none', resize: 'none'
  },
  sendBtn: {
    width: '44px', height: '44px', borderRadius: '12px',
    background: 'linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)',
    border: 'none', color: '#fff', cursor: 'pointer', display: 'flex',
    alignItems: 'center', justifyContent: 'center', flexShrink: 0
  },
  sidebar: {
    background: 'rgba(18, 18, 42, 0.8)', border: '1px solid rgba(108, 99, 255, 0.1)',
    borderRadius: '16px', padding: '20px'
  },
  sidebarTitle: {
    color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '16px',
    display: 'flex', alignItems: 'center', gap: '8px'
  },
  rankItem: {
    display: 'flex', gap: '8px', alignItems: 'center', padding: '10px 12px',
    borderRadius: '10px', background: 'rgba(108, 99, 255, 0.05)',
    border: '1px solid rgba(108, 99, 255, 0.08)', marginBottom: '8px'
  },
  rankNum: { color: '#6c63ff', fontWeight: 700, fontSize: '0.85rem' },
  rankText: { color: '#b8b8d4', fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
};

const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 0.3; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1); }
  }
  @media (max-width: 768px) {
    .chatLayout { grid-template-columns: 1fr !important; }
  }
`;
document.head.appendChild(styleSheet);

export default AiMatcher;
