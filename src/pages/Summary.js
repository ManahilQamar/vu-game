import React, { useState, useEffect, useRef, useCallback } from 'react';
import subjects from '../data/subjects';
import mcqs from '../data/mcqs';

const API_BASE = 'https://vu-game-backend.vercel.app';

function getLectureData(subject, idx) {
  const lecNum = idx + 1;
  if (mcqs[subject]?.[lecNum]?.questions?.length > 0) return mcqs[subject][lecNum];
  const stored = localStorage.getItem('vu_ai_' + subject + '_' + idx);
  if (!stored) return null;
  try { return JSON.parse(stored); } catch (e) { return null; }
}

/* ── Markdown renderer — handles **bold** and bullet points ── */
function renderMarkdown(text) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    if (!line.trim()) return <div key={i} style={{ height: 6 }} />;

    // Bold headings **text:**
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={j}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    // Bullet points
    if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
      return (
        <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 4, paddingLeft: 4 }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>•</span>
          <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{rendered.map(r => typeof r === 'string' ? r.replace(/^[-•]\s*/, '') : r)}</span>
        </div>
      );
    }

    return (
      <div key={i} style={{ fontSize: 14, color: '#374151', lineHeight: 1.65, marginBottom: 4 }}>
        {rendered}
      </div>
    );
  });
}

export default function Summary({ subject, lectureIndex, setPage }) {
  const sub         = subjects.find(s => s.id === subject);
  const lectureData = getLectureData(subject, lectureIndex);
  const questions   = lectureData?.questions || [];

  const [summary,     setSummary]     = useState('');
  const [sumLoading,  setSumLoading]  = useState(true);
  const [sumError,    setSumError]    = useState('');

  const [messages,    setMessages]    = useState([]);
  const [input,       setInput]       = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [chatError,   setChatError]   = useState('');

  const chatEndRef = useRef(null);

  // Auto-fetch summary on mount
  const loadSummary = useCallback(async () => {
    setSumLoading(true);
    setSumError('');
    try {
      const res = await fetch(`${API_BASE}/api/summary`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subjectId:    subject,
          lectureNum:   lectureIndex + 1,
          lectureTitle: lectureData?.title || '',
          questions:    questions,
        }),
      });
      if (!res.ok) throw new Error('Server error');
      const data = await res.json();
      setSummary(data.summary);
    } catch {
      setSumError('Could not load summary. Please try again.');
    } finally {
      setSumLoading(false);
    }
  }, [subject, lectureIndex, lectureData, questions]);

  useEffect(() => { loadSummary(); }, [loadSummary]);
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || chatLoading) return;

    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput('');
    setChatLoading(true);
    setChatError('');

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subjectId:    subject,
          lectureNum:   lectureIndex + 1,
          lectureTitle: lectureData?.title || '',
          questions:    questions,
          messages:     newMessages,
        }),
      });
      if (!res.ok) throw new Error('Server error');
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setChatError('Could not get reply. Please try again.');
    } finally {
      setChatLoading(false);
    }
  };

  const handleKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  if (!lectureData || questions.length === 0) {
    return (
      <div className="shell fade-in">
        <header className="topbar">
          <button className="topbar-back" onClick={() => setPage(subject)}>← Back</button>
          <span className="topbar-info">{subject} — Lecture {lectureIndex + 1}</span>
        </header>
        <main className="page">
          <div className="empty-card">
            <div className="empty-icon">📋</div>
            <div className="empty-title">No Data Yet</div>
            <div className="empty-desc">Complete the quiz first or upload a handout to generate MCQs.</div>
            <button className="btn-ghost" onClick={() => setPage(subject)}>← Go Back</button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="shell fade-in">
      <header className="topbar">
        <button className="topbar-back" onClick={() => setPage(subject)}>← Back</button>
        <span className="topbar-info">{sub.id} — Lec {lectureIndex + 1} Summary</span>
      </header>

      <main className="page">

        {/* ── Summary Section ── */}
        <div className="sum-card">
          <div className="sum-header">
            <span style={{ fontSize: 18 }}>📖</span>
            <div>
              <div className="sum-title">Lecture Summary</div>
              <div className="sum-sub">{lectureData.title || `Lecture ${lectureIndex + 1}`}</div>
            </div>
            {!sumLoading && !sumError && (
              <button className="sum-quiz-btn" onClick={() => setPage('quiz-' + subject + '-' + lectureIndex)}>
                Start Quiz →
              </button>
            )}
          </div>

          {sumLoading && (
            <div className="sum-loading">
              <div className="spin-blue" />
              Generating summary...
            </div>
          )}

          {sumError && !sumLoading && (
            <div className="sum-error">
              ⚠ {sumError}
              <button onClick={loadSummary} className="retry-link">Try again</button>
            </div>
          )}

          {summary && !sumLoading && (
            <div className="sum-body">
              {renderMarkdown(summary)}
            </div>
          )}
        </div>

        {/* ── Chat Section ── */}
        <div className="chat-card">
          <div className="chat-header">
            <span style={{ fontSize: 18 }}>🤖</span>
            <div className="chat-title">Ask AI about this Lecture</div>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="chat-empty">
                Ask anything about this lecture — AI will answer based on the MCQs and concepts covered.
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.role === 'user' ? 'msg-user' : 'msg-ai'}`}>
                {msg.role === 'assistant'
                  ? <div className="msg-ai-content">{renderMarkdown(msg.content)}</div>
                  : <div className="msg-user-content">{msg.content}</div>
                }
              </div>
            ))}

            {chatLoading && (
              <div className="chat-msg msg-ai">
                <div className="msg-ai-content" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#6b7280' }}>
                  <div className="spin-blue" style={{ width: 16, height: 16 }} />
                  Thinking...
                </div>
              </div>
            )}

            {chatError && (
              <div style={{ fontSize: 13, color: '#dc2626', padding: '8px 0' }}>⚠ {chatError}</div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="chat-input-row">
            <textarea
              className="chat-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask a question about this lecture..."
              rows={1}
              disabled={chatLoading}
            />
            <button
              className="chat-send"
              onClick={sendMessage}
              disabled={!input.trim() || chatLoading}
            >
              ↑
            </button>
          </div>
          <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 6, textAlign: 'center' }}>
            Press Enter to send
          </div>
        </div>

      </main>
    </div>
  );
}