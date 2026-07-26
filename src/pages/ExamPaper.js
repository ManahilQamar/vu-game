import React, { useState, useEffect } from 'react';
import examData from '../data/examData';
import subjects from '../data/subjects';

const API_BASE = 'https://vu-study-app-backend.vercel.app';

// ── AI Explanation ────────────────────────────────────────────────
function ExplainBtn({ question, options, answer, subjectId }) {
  const [open,    setOpen]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [text,    setText]    = useState('');
  const [error,   setError]   = useState('');

  const fetchExplain = async () => {
    if (open) { setOpen(false); return; }
    setOpen(true);
    if (text) return;
    setLoading(true); setError('');
    try {
      const res = await fetch(`${API_BASE}/api/explain`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, options, answer, subjectId }),
      });
      if (!res.ok) throw new Error('error');
      const data = await res.json();
      setText(data.explanation || data.reply || '');
    } catch {
      setError('Could not load explanation. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: 8 }}>
      <button onClick={fetchExplain} style={{
        fontSize: 12, fontWeight: 600, padding: '4px 12px',
        borderRadius: 8, border: '1px solid #bfdbfe',
        background: open ? '#2563eb' : '#eff6ff',
        color: open ? '#fff' : '#2563eb',
        cursor: 'pointer', fontFamily: 'inherit',
        display: 'flex', alignItems: 'center', gap: 5,
        transition: 'all 0.15s',
      }}>
        💡 {open ? 'Hide Explanation' : 'Explain Answer'}
      </button>

      {open && (
        <div style={{
          marginTop: 8, background: '#eff6ff',
          border: '1px solid #bfdbfe', borderRadius: 10,
          padding: '12px 14px',
        }}>
          {loading && (
            <div style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'#2563eb' }}>
              <div style={{ width:14, height:14, borderRadius:'50%', border:'2px solid #bfdbfe', borderTopColor:'#2563eb', animation:'spin 0.7s linear infinite' }} />
              AI is explaining...
            </div>
          )}
          {error && <div style={{ fontSize:13, color:'#dc2626' }}>⚠ {error}</div>}
          {text && (
            <div style={{ fontSize:13.5, color:'#1e40af', lineHeight:1.7, whiteSpace:'pre-wrap' }}>{text}</div>
          )}
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}
    </div>
  );
}

export default function ExamPaper({ subject, paperType, setPage }) {
  const sub   = subjects.find(s => s.id === subject);
  const paper = examData[subject]?.[paperType];

  // localStorage key for this specific paper
  const storageKey = `exam_answers_${subject}_${paperType}`;

  // Load saved answers from localStorage
  const [mcqAnswers,  setMcqAnswers]  = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });
  const [subjAnswers, setSubjAnswers] = useState({});
  const [submitted,   setSubmitted]   = useState(false);
  const [score,       setScore]       = useState(0);

  // Save answers to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(mcqAnswers));
  }, [mcqAnswers, storageKey]);

  if (!paper) {
    return (
      <div className="shell fade-in">
        <header className="topbar"><span className="topbar-info">Exam Not Found</span></header>
        <main className="page">
          <div className="empty-card">
            <div className="empty-icon">📋</div>
            <div className="empty-title">Paper Not Available</div>
            <div className="empty-desc">This exam paper hasn't been added yet.</div>
          </div>
        </main>
      </div>
    );
  }

  const mcqs        = paper.mcqs       || [];
  const subjectives = paper.subjective || [];
  const hasSubj     = subjectives.length > 0;

  // Stats
  const attempted = Object.keys(mcqAnswers).length;
  const correct   = Object.keys(mcqAnswers).filter(i => mcqAnswers[i] === mcqs[parseInt(i)]?.answer).length;
  const wrong     = attempted - correct;

  const handleMcq = (qIdx, opt) => {
    if (submitted) return;
    if (mcqAnswers[qIdx]) return; // already answered — lock it
    setMcqAnswers(prev => ({ ...prev, [qIdx]: opt }));
  };

  const handleSubj = (idx, val) => setSubjAnswers(prev => ({ ...prev, [idx]: val }));

  const handleClear = () => {
    setMcqAnswers({});
    localStorage.removeItem(storageKey);
  };

  const handleSubmit = () => {
    let c = 0;
    mcqs.forEach((q, i) => { if (mcqAnswers[i] === q.answer) c++; });
    setScore(c);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const allAttempted = mcqs.every((_, i) => mcqAnswers[i]);

  // ── Result Screen ─────────────────────────────────────────────
  if (submitted) {
    const total  = mcqs.length;
    const pct    = Math.round((score / total) * 100);
    const passed = pct >= 50;
    const emoji  = pct >= 80 ? '🏆' : passed ? '🌟' : '📖';

    return (
      <div className="shell fade-in">
        <header className="topbar">
          <span className="topbar-info">{paper.title}</span>
        </header>
        <main className="page">
          <div className="result-card" style={{ marginBottom: 16 }}>
            <span className="result-emoji">{emoji}</span>
            <div className="result-heading">{pct >= 80 ? 'Excellent!' : passed ? 'Good Work!' : 'Keep Practicing!'}</div>
            <div className="result-sub">{paper.title}</div>
            <div className="result-stats">
              <div className="rs"><div className="rs-num">{score}</div><div className="rs-lbl">Correct</div></div>
              <div className="rs"><div className="rs-num">{total - score}</div><div className="rs-lbl">Wrong</div></div>
              <div className="rs"><div className="rs-num">{pct}%</div><div className="rs-lbl">Score</div></div>
            </div>
            <div className={`result-banner ${passed ? 'rb-pass' : 'rb-fail'}`}>
              {passed ? '✓ MCQ section passed!' : '⚠ Review your notes and try again.'}
            </div>
          </div>

          <p className="sec-label">MCQ Review</p>
          {mcqs.map((q, i) => {
            const sel = mcqAnswers[i];
            const ok  = sel === q.answer;
            return (
              <div key={i} style={{
                background: 'var(--card-bg)',
                border: `1.5px solid ${ok ? '#34d399' : '#f87171'}`,
                borderRadius: 12, padding: '12px 14px', marginBottom: 10,
              }}>
                <div style={{ display:'flex', gap:8, marginBottom:8 }}>
                  <span style={{ width:22, height:22, borderRadius:'50%', flexShrink:0, background: ok?'#10b981':'#ef4444', color:'#fff', fontSize:12, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    {ok ? '✓' : '✗'}
                  </span>
                  <div style={{ fontSize:13.5, color:'var(--text-primary)', fontWeight:500 }}>{q.q}</div>
                </div>
                {!ok && (
                  <div style={{ fontSize:12.5, color:'#065f46', background:'#ecfdf3', borderRadius:8, padding:'6px 10px', marginBottom:6 }}>
                    ✓ Correct: {q.answer}
                  </div>
                )}
                <ExplainBtn question={q.q} options={q.options} answer={q.answer} subjectId={subject} />
              </div>
            );
          })}

          {hasSubj && (
            <div style={{ background:'#fffbeb', border:'1.5px solid #fbbf24', borderRadius:12, padding:'14px 16px', marginTop:8 }}>
              <div style={{ fontWeight:700, color:'#78350f', marginBottom:6 }}>📝 Subjective Section</div>
              {subjectives.map((q, i) => (
                <div key={i} style={{ marginTop:10 }}>
                  <div style={{ fontSize:13, fontWeight:600, color:'#78350f', marginBottom:4 }}>Q{mcqs.length+i+1}. [{q.marks} marks] {q.q}</div>
                  <div style={{ fontSize:13, color:'#374151', background:'#fff', border:'1px solid #fde68a', borderRadius:8, padding:'8px 10px', whiteSpace:'pre-wrap', minHeight:40 }}>
                    {subjAnswers[i] || '(No answer written)'}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="result-actions" style={{ marginTop:16 }}>
            <button className="btn-dark" onClick={() => {
              setSubmitted(false); setScore(0);
              setMcqAnswers({}); setSubjAnswers({});
              localStorage.removeItem(storageKey);
              window.scrollTo(0, 0);
            }}>Try Again</button>
            <button className="btn-ghost" onClick={() => setPage(subject)}>Back to Lectures</button>
          </div>
        </main>
      </div>
    );
  }

  // ── Exam Paper Screen ─────────────────────────────────────────
  return (
    <div className="shell fade-in">
      <header className="topbar">
        <span className="topbar-info" style={{ fontWeight:700 }}>{paper.title}</span>
      </header>

      <main className="page">

        {/* Paper header */}
        <div style={{ background:'var(--card-bg)', border:'1.5px solid var(--border)', borderRadius:14, padding:'14px 16px', marginBottom:14 }}>
          <div style={{ fontSize:15, fontWeight:700, color:'var(--text-primary)', marginBottom:3 }}>{paper.title}</div>
          <div style={{ fontSize:12.5, color:'var(--text-muted)' }}>
            Total: {mcqs.length} MCQs · {paper.mcqMarks} mark each
            {hasSubj && ` · Subjective: ${subjectives.reduce((a,s)=>a+s.marks,0)} marks`}
          </div>
        </div>

        {/* ── Live Stats Bar ── */}
        <div style={{
          background: 'var(--card-bg)', border: '1.5px solid var(--border)',
          borderRadius: 14, padding: '12px 16px', marginBottom: 14,
        }}>
          {/* Numbers */}
          <div style={{ display:'flex', alignItems:'center', marginBottom: 10 }}>
            <div style={{ flex:1, textAlign:'center', borderRight:'1px solid var(--border)' }}>
              <div style={{ fontSize:20, fontWeight:700, color:'#16a34a' }}>{correct}</div>
              <div style={{ fontSize:11, color:'#16a34a', fontWeight:600, marginTop:1 }}>✓ Correct</div>
            </div>
            <div style={{ flex:1, textAlign:'center', borderRight:'1px solid var(--border)' }}>
              <div style={{ fontSize:20, fontWeight:700, color:'#dc2626' }}>{wrong}</div>
              <div style={{ fontSize:11, color:'#dc2626', fontWeight:600, marginTop:1 }}>✗ Wrong</div>
            </div>
            <div style={{ flex:1, textAlign:'center' }}>
              <div style={{ fontSize:20, fontWeight:700, color:'var(--text-muted)' }}>{mcqs.length - attempted}</div>
              <div style={{ fontSize:11, color:'var(--text-muted)', marginTop:1 }}>Remaining</div>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ height:8, background:'var(--border)', borderRadius:4, overflow:'hidden', display:'flex' }}>
            <div style={{ width:`${(correct/mcqs.length)*100}%`, background:'#10b981', transition:'width 0.3s ease' }} />
            <div style={{ width:`${(wrong/mcqs.length)*100}%`, background:'#ef4444', transition:'width 0.3s ease' }} />
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', fontSize:10, color:'var(--text-muted)', marginTop:4 }}>
            <span>{attempted}/{mcqs.length} attempted</span>
            {attempted > 0 && <span>{Math.round((correct/attempted)*100)}% accuracy</span>}
          </div>

          {/* Clear button */}
          {attempted > 0 && (
            <button onClick={handleClear} style={{
              marginTop: 10, width:'100%', padding:'7px',
              borderRadius:8, border:'1px solid #fca5a5',
              background:'#fef2f2', color:'#dc2626',
              fontSize:12, fontWeight:600, cursor:'pointer',
              fontFamily:'inherit',
            }}>
              🗑 Clear All Answers
            </button>
          )}
        </div>

        {/* Section A: MCQs */}
        <p className="sec-label">Section A — Multiple Choice ({mcqs.length} marks)</p>
        {mcqs.map((q, i) => {
          const selected = mcqAnswers[i];
          const answered = !!selected;

          return (
            <div key={i} style={{
              background:'var(--card-bg)', border:'1.5px solid var(--border)',
              borderRadius:12, padding:'14px 16px', marginBottom:12,
            }}>
              <div style={{ fontSize:14, fontWeight:600, color:'var(--text-primary)', marginBottom:10 }}>
                Q{i+1}. {q.q}
              </div>

              {/* Options */}
              <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                {q.options.map((opt, j) => {
                  const isSelected = selected === opt;
                  const isCorrect  = opt === q.answer;

                  let borderColor = 'var(--border)';
                  let bgColor     = 'var(--bg)';
                  let textColor   = 'var(--text-primary)';
                  let fontWeight  = 400;

                  if (answered) {
                    if (isCorrect) {
                      borderColor = '#10b981';
                      bgColor     = '#ecfdf3';
                      textColor   = '#065f46';
                      fontWeight  = 700;
                    } else if (isSelected) {
                      borderColor = '#ef4444';
                      bgColor     = '#fef2f2';
                      textColor   = '#7f1d1d';
                      fontWeight  = 600;
                    }
                  }

                  return (
                    <button key={j} onClick={() => handleMcq(i, opt)} disabled={answered} style={{
                      textAlign:'left', padding:'10px 14px',
                      borderRadius:9, border:`1.5px solid ${borderColor}`,
                      background:bgColor, color:textColor,
                      fontSize:13.5, cursor: answered || submitted ? 'default' : 'pointer',
                      fontFamily:'inherit', fontWeight,
                      transition:'all 0.12s',
                      display:'flex', alignItems:'center', gap:8,
                    }}>
                      {answered && (isSelected || isCorrect) && (
                        <span style={{
                          width:18, height:18, borderRadius:'50%', flexShrink:0,
                          background: isCorrect ? '#10b981' : '#ef4444',
                          color:'#fff', fontSize:11, fontWeight:700,
                          display:'flex', alignItems:'center', justifyContent:'center',
                        }}>
                          {isCorrect ? '✓' : '✗'}
                        </span>
                      )}
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Explain button — always visible after selecting */}
              <ExplainBtn
                question={q.q}
                options={q.options}
                answer={q.answer}
                subjectId={subject}
              />
            </div>
          );
        })}

        {/* Section B: Subjective */}
        {hasSubj && (
          <div style={{ marginBottom:16 }}>
            <p className="sec-label">Section B — Subjective Questions</p>
            {subjectives.map((q, i) => (
              <div key={i} style={{ background:'var(--card-bg)', border:'1.5px solid var(--border)', borderRadius:12, padding:'14px 16px', marginBottom:10 }}>
                <div style={{ fontSize:14, fontWeight:600, color:'var(--text-primary)', marginBottom:4 }}>
                  Q{mcqs.length+i+1}. [{q.marks} Marks]
                </div>
                <div style={{ fontSize:13.5, color:'var(--text-secondary)', marginBottom:10, lineHeight:1.6 }}>{q.q}</div>
                <textarea
                  value={subjAnswers[i] || ''}
                  onChange={e => handleSubj(i, e.target.value)}
                  placeholder="Write your answer here..."
                  rows={5}
                  style={{ width:'100%', padding:'10px 12px', fontSize:14, fontFamily:"'Georgia', serif", lineHeight:1.7, resize:'vertical', background:'var(--bg)', color:'var(--text-primary)', border:'1.5px solid var(--border)', borderRadius:8, outline:'none' }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Submit */}
        <button onClick={handleSubmit} disabled={!allAttempted} style={{
          width:'100%', padding:'14px', borderRadius:12, border:'none',
          background: allAttempted ? '#2563eb' : 'var(--border)',
          color: allAttempted ? '#fff' : 'var(--text-muted)',
          fontSize:15, fontWeight:700,
          cursor: allAttempted ? 'pointer' : 'default',
          fontFamily:'inherit', marginBottom:24,
        }}>
          {allAttempted ? '✓ Submit Paper' : `Attempt all MCQs to submit (${attempted}/${mcqs.length} done)`}
        </button>

      </main>
    </div>
  );
}