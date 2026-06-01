import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCpu, FiUser, FiStar, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';
import { skills, experience, education } from '../data/resume';

const myProfile = {
  skills: [...skills.languages, ...skills.web, ...skills.databases, ...skills.concepts, ...skills.tools],
  experience: experience.map(e => e.highlights).flat(),
  courses: skills.courses
};

function scoreJob(jobText) {
  const text = jobText.toLowerCase();
  let score = 0;
  let matches = [];
  let missing = [];

  myProfile.skills.forEach(skill => {
    if (text.includes(skill.toLowerCase())) {
      score += 10;
      matches.push(skill);
    }
  });

  const aiKeywords = ['ai', 'llm', 'prompt', 'genai', 'machine learning', 'openai', 'langchain', 'gpt', 'agent'];
  aiKeywords.forEach(kw => {
    if (text.includes(kw)) {
      score += 15;
      if (!matches.includes(kw)) matches.push(kw);
    }
  });

  const commonRequirements = ['react', 'angular', 'node', '.net', 'python', 'typescript', 'sql', 'docker', 'aws', 'azure'];
  commonRequirements.forEach(req => {
    if (text.includes(req) && !myProfile.skills.some(s => s.toLowerCase().includes(req))) {
      missing.push(req);
    }
  });

  const maxScore = 100;
  const normalized = Math.min(Math.round((score / maxScore) * 100), 98);

  return { score: normalized, matches, missing };
}

function generateAiResponse(input) {
  const lines = input.split('\n').filter(l => l.trim());

  if (lines.length === 0) {
    return "שלחי לי תיאור משרה או כמה משרות (כל אחת בשורה נפרדת) ואני אתעדף אותן לפי הפרופיל שלך 🎯";
  }

  if (lines.length === 1 && lines[0].length < 20) {
    return "זה נראה קצר מדי. נסי להדביק תיאור משרה מלא או לפחות את הדרישות הטכניות.";
  }

  const jobs = lines.length > 1 ? lines : [input];
  const results = jobs.map((job, i) => {
    const { score, matches, missing } = scoreJob(job);
    return { job: job.substring(0, 80), score, matches, missing, index: i + 1 };
  });

  results.sort((a, b) => b.score - a.score);

  let response = "## 🎯 תוצאות תעדוף AI\n\n";

  results.forEach((r, i) => {
    const emoji = r.score >= 70 ? '🟢' : r.score >= 40 ? '🟡' : '🔴';
    const priority = r.score >= 70 ? 'HIGH PRIORITY' : r.score >= 40 ? 'MEDIUM' : 'LOW';

    response += `### ${emoji} #${i + 1} — ${r.job}...\n`;
    response += `**Match Score: ${r.score}%** | Priority: ${priority}\n`;

    if (r.matches.length > 0) {
      response += `✅ Skills Match: ${r.matches.slice(0, 5).join(', ')}\n`;
    }
    if (r.missing.length > 0) {
      response += `⚠️ Missing: ${r.missing.slice(0, 3).join(', ')}\n`;
    }
    response += '\n';
  });

  response += "---\n";
  response += `**📊 Summary:** ${results.filter(r => r.score >= 70).length} high priority, ${results.filter(r => r.score >= 40 && r.score < 70).length} medium, ${results.filter(r => r.score < 40).length} low\n`;
  response += `**💡 Recommendation:** Focus on the top-ranked positions first — they align best with your AI + Full Stack profile.`;

  return response;
}

function AiDemo() {
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: "👋 Hi! I'm Talya's AI Job Matcher.\n\nPaste job descriptions or requirements here, and I'll analyze how well they match Talya's profile — prioritizing by relevance to her AI & Full Stack skills.\n\nTry pasting one or more job listings!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAiResponse(input);
      setMessages(prev => [...prev, { role: 'ai', content: response }]);
      setIsTyping(false);
    }, 1200);
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
            Powered by AI — analyzes job descriptions and prioritizes them based on my skills, experience, and tech stack
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={styles.chatContainer}
        >
          <div style={styles.chatHeader}>
            <div style={styles.statusDot} />
            <span style={styles.statusText}>AI Agent Active</span>
          </div>

          <div style={styles.messages}>
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    ...styles.message,
                    ...(msg.role === 'user' ? styles.userMessage : styles.aiMessage)
                  }}
                >
                  <div style={msg.role === 'user' ? styles.userIcon : styles.aiIcon}>
                    {msg.role === 'user' ? <FiUser size={16} /> : <FiCpu size={16} />}
                  </div>
                  <div style={styles.messageContent}>
                    <pre style={styles.messageText}>{msg.content}</pre>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ ...styles.message, ...styles.aiMessage }}
              >
                <div style={styles.aiIcon}><FiCpu size={16} /></div>
                <div style={styles.typingDots}>
                  <span style={styles.typingDot}>●</span>
                  <span style={{ ...styles.typingDot, animationDelay: '0.2s' }}>●</span>
                  <span style={{ ...styles.typingDot, animationDelay: '0.4s' }}>●</span>
                </div>
              </motion.div>
            )}
          </div>

          <div style={styles.inputArea}>
            <textarea
              style={styles.chatInput}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
              placeholder="Paste job descriptions here... (Shift+Enter for new line)"
              rows={3}
            />
            <button style={styles.sendBtn} onClick={handleSend} disabled={!input.trim()}>
              <FiSend size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={styles.features}
        >
          <div style={styles.feature}>
            <FiCheckCircle size={20} color="#00d4aa" />
            <span>Skills Matching</span>
          </div>
          <div style={styles.feature}>
            <FiStar size={20} color="#ffbd2e" />
            <span>Priority Scoring</span>
          </div>
          <div style={styles.feature}>
            <FiAlertTriangle size={20} color="#ff6b9d" />
            <span>Gap Analysis</span>
          </div>
        </motion.div>
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
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 24px'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center'
  },
  subtitle: {
    color: '#b8b8d4',
    fontSize: '1.05rem',
    marginBottom: '32px',
    lineHeight: 1.6
  },
  chatContainer: {
    background: 'rgba(18, 18, 42, 0.9)',
    border: '1px solid rgba(108, 99, 255, 0.2)',
    borderRadius: '20px',
    overflow: 'hidden'
  },
  chatHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '16px 24px',
    borderBottom: '1px solid rgba(108, 99, 255, 0.1)',
    background: 'rgba(108, 99, 255, 0.05)'
  },
  statusDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#00d4aa',
    boxShadow: '0 0 8px rgba(0, 212, 170, 0.6)'
  },
  statusText: {
    color: '#b8b8d4',
    fontSize: '0.85rem',
    fontWeight: 500
  },
  messages: {
    padding: '24px',
    maxHeight: '450px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  message: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start'
  },
  userMessage: {
    flexDirection: 'row-reverse'
  },
  aiMessage: {
    flexDirection: 'row'
  },
  userIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(108, 99, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8b83ff',
    flexShrink: 0
  },
  aiIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(0, 212, 170, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00d4aa',
    flexShrink: 0
  },
  messageContent: {
    maxWidth: '80%'
  },
  messageText: {
    margin: 0,
    padding: '12px 16px',
    borderRadius: '16px',
    background: 'rgba(108, 99, 255, 0.08)',
    border: '1px solid rgba(108, 99, 255, 0.1)',
    color: '#d4d4e8',
    fontSize: '0.9rem',
    lineHeight: 1.7,
    whiteSpace: 'pre-wrap',
    fontFamily: 'inherit'
  },
  typingDots: {
    padding: '12px 16px',
    display: 'flex',
    gap: '4px'
  },
  typingDot: {
    color: '#00d4aa',
    animation: 'pulse 1s infinite',
    fontSize: '1.2rem'
  },
  inputArea: {
    display: 'flex',
    gap: '12px',
    padding: '16px 24px',
    borderTop: '1px solid rgba(108, 99, 255, 0.1)',
    alignItems: 'flex-end'
  },
  chatInput: {
    flex: 1,
    padding: '14px 18px',
    borderRadius: '16px',
    border: '1px solid rgba(108, 99, 255, 0.15)',
    background: 'rgba(10, 10, 26, 0.6)',
    color: '#fff',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    resize: 'none',
    lineHeight: 1.5
  },
  sendBtn: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)',
    border: 'none',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'all 0.3s'
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    marginTop: '24px',
    flexWrap: 'wrap'
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#b8b8d4',
    fontSize: '0.9rem'
  }
};

export default AiDemo;
