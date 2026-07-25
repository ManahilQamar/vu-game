import React, { useState } from 'react';
import examData from '../data/examData';
import subjects from '../data/subjects';

const API_BASE = 'https://vu-study-app-backend.vercel.app';

// ── AI Explanation per question ───────────────────────────────────
function ExplainBtn({ question, options, answer, subjectId }) {
  const [open,    setOpen]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [text,    setText]    = useState('');
  const [error,   setError]   = useState('');

  const fetchExplain = async () => {
    if (text) { setOpen(true); return; }
    setOpen(true);
    setLoading(true);
    setError('');
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
        background: '#eff6ff', color: '#2563eb',
        cursor: 'pointer', fontFamily: 'inherit',
        display: 'flex', alignItems: 'center', gap: 5,
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
            <div style={{ fontSize:13.5, color:'#1e40af', lineHeight:1.7, whiteSpace:'pre-wrap' }}>
              {text}
            </div>
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

  // Track selected answer per question index
  const [mcqAnswers,  setMcqAnswers]  = useState({});
  const [subjAnswers, setSubjAnswers] = useState({});
  const [submitted,   setSubmitted]   = useState(false);
  const [score,       setScore]       = useState(0);

  if (!paper) {
    return (
      <div className="shell fade-in">
        <header className="topbar">
          <span className="topbar-info">Exam Not Found</span>
        </header>
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

  const handleMcq = (qIdx, opt) => {
    if (submitted) return;
    // Toggle off if same option clicked again
    if (mcqAnswers[qIdx] === opt) {
      setMcqAnswers(prev => { const n = {...prev}; delete n[qIdx]; return n; });
    } else {
      setMcqAnswers(prev => ({ ...prev, [qIdx]: opt }));
    }
  };

  const handleSubj = (idx, val) => setSubjAnswers(prev => ({ ...prev, [idx]: val }));

  const handleSubmit = () => {
    let correct = 0;
    mcqs.forEach((q, i) => { if (mcqAnswers[i] === q.answer) correct++; });
    setScore(correct);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const allMcqAttempted = mcqs.every((_, i) => mcqAnswers[i]);

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

          {/* MCQ Review */}
          <p className="sec-label">MCQ Review</p>
          {mcqs.map((q, i) => {
            const selected = mcqAnswers[i];
            const correct  = selected === q.answer;
            return (
              <div key={i} style={{
                background: 'var(--card-bg)',
                border: `1.5px solid ${correct ? '#34d399' : '#f87171'}`,
                borderRadius: 12, padding: '12px 14px', marginBottom: 10,
              }}>
                <div style={{ display:'flex', gap:8, marginBottom:8 }}>
                  <span style={{
                    width:22, height:22, borderRadius:'50%', flexShrink:0,
                    background: correct ? '#10b981' : '#ef4444', color:'#fff',
                    fontSize:12, fontWeight:700,
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>{correct ? '✓' : '✗'}</span>
                  <div style={{ fontSize:13.5, color:'var(--text-primary)', fontWeight:500 }}>{q.q}</div>
                </div>
                {!correct && (
                  <div style={{ fontSize:12.5, color:'#065f46', background:'#ecfdf3', borderRadius:8, padding:'6px 10px', marginBottom:6 }}>
                    ✓ Correct: {q.answer}
                  </div>
                )}
                {/* Explain button on wrong answers */}
                {!correct && (
                  <ExplainBtn
                    question={q.q}
                    options={q.options}
                    answer={q.answer}
                    subjectId={subject}
                  />
                )}
              </div>
            );
          })}

          {/* Subjective review */}
          {hasSubj && (
            <div style={{ background:'#fffbeb', border:'1.5px solid #fbbf24', borderRadius:12, padding:'14px 16px', marginTop:8 }}>
              <div style={{ fontWeight:700, color:'#78350f', marginBottom:6 }}>📝 Subjective Section</div>
              <div style={{ fontSize:13, color:'#92400e', lineHeight:1.6, marginBottom:10 }}>
                Check your subjective answers against your notes for self-assessment.
              </div>
              {subjectives.map((q, i) => (
                <div key={i} style={{ marginTop:10 }}>
                  <div style={{ fontSize:13, fontWeight:600, color:'#78350f', marginBottom:4 }}>
                    Q{mcqs.length + i + 1}. [{q.marks} marks] {q.q}
                  </div>
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
        <div style={{
          background:'var(--card-bg)', border:'1.5px solid var(--border)',
          borderRadius:14, padding:'16px', marginBottom:16,
        }}>
          <div style={{ fontSize:16, fontWeight:700, color:'var(--text-primary)', marginBottom:4 }}>
            {paper.title}
          </div>
          <div style={{ fontSize:13, color:'var(--text-muted)' }}>
            Total Marks: {paper.totalMarks} &nbsp;·&nbsp; MCQs: {mcqs.length} × {paper.mcqMarks} marks
            {hasSubj && ` · Subjective: ${subjectives.reduce((a,s) => a+s.marks, 0)} marks`}
          </div>
          <div style={{ fontSize:12, color:'#2563eb', marginTop:6, fontWeight:500 }}>
            📌 Click an option to select. Green = correct, Red = wrong. Use 💡 Explain if needed.
          </div>
        </div>

        {/* Live Progress Stats */}
        {mcqs.length > 0 && (
          <div style={{
            background: 'var(--card-bg)',
            border: '1.5px solid var(--border)',
            borderRadius: 14,
            padding: '14px 16px',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 0,
          }}>
            {/* Total */}
            <div style={{ flex: 1, textAlign: 'center', borderRight: '1px solid var(--border)' }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-primary)' }}>
                {mcqs.length}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>Total</div>
            </div>

            {/* Attempted */}
            <div style={{ flex: 1, textAlign: 'center', borderRight: '1px solid var(--border)' }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#2563eb' }}>
                {Object.keys(mcqAnswers).length}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>Attempted</div>
            </div>

            {/* Correct */}
            <div style={{ flex: 1, textAlign: 'center', borderRight: '1px solid var(--border)' }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#16a34a' }}>
                {Object.keys(mcqAnswers).filter(i => mcqAnswers[i] === mcqs[i]?.answer).length}
              </div>
              <div style={{ fontSize: 11, color: '#16a34a', marginTop: 2, fontWeight: 600 }}>✓ Correct</div>
            </div>

            {/* Wrong */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#dc2626' }}>
                {Object.keys(mcqAnswers).filter(i => mcqAnswers[i] !== mcqs[i]?.answer).length}
              </div>
              <div style={{ fontSize: 11, color: '#dc2626', marginTop: 2, fontWeight: 600 }}>✗ Wrong</div>
            </div>
          </div>
        )}

        {/* Progress bar */}
        {Object.keys(mcqAnswers).length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>
              <span>Progress</span>
              <span>{Object.keys(mcqAnswers).length}/{mcqs.length} attempted</span>
            </div>
            <div style={{ height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden', display: 'flex' }}>
              {/* Green portion - correct */}
              <div style={{
                width: `${(Object.keys(mcqAnswers).filter(i => mcqAnswers[i] === mcqs[i]?.answer).length / mcqs.length) * 100}%`,
                background: '#10b981', transition: 'width 0.3s ease',
              }} />
              {/* Red portion - wrong */}
              <div style={{
                width: `${(Object.keys(mcqAnswers).filter(i => mcqAnswers[i] !== mcqs[i]?.answer).length / mcqs.length) * 100}%`,
                background: '#ef4444', transition: 'width 0.3s ease',
              }} />
            </div>
          </div>
        )}

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
              {/* Question */}
              <div style={{ fontSize:14, fontWeight:600, color:'var(--text-primary)', marginBottom:10 }}>
                Q{i + 1}. {q.q}
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
                      // ✅ Always highlight correct option green
                      borderColor = '#10b981';
                      bgColor     = '#ecfdf3';
                      textColor   = '#065f46';
                      fontWeight  = 700;
                    } else if (isSelected) {
                      // ❌ Wrong selected option
                      borderColor = '#ef4444';
                      bgColor     = '#fef2f2';
                      textColor   = '#7f1d1d';
                      fontWeight  = 600;
                    }
                  }

                  return (
                    <button key={j} onClick={() => handleMcq(i, opt)} style={{
                      textAlign:'left', padding:'10px 14px',
                      borderRadius:9,
                      border: `1.5px solid ${borderColor}`,
                      background: bgColor,
                      color: textColor,
                      fontSize: 13.5,
                      cursor: submitted ? 'default' : 'pointer',
                      fontFamily: 'inherit',
                      fontWeight,
                      transition: 'all 0.12s',
                      display: 'flex', alignItems: 'center', gap: 8,
                    }}>
                      {/* Status icon */}
                      {isSelected && (
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

              {/* Explain button — show when wrong answer selected */}
              {answered && selected !== q.answer && (
                <ExplainBtn
                  question={q.q}
                  options={q.options}
                  answer={q.answer}
                  subjectId={subject}
                />
              )}

              {/* Correct message */}
              {answered && selected === q.answer && (
                <div style={{ marginTop:8, fontSize:13, color:'#16a34a', fontWeight:600, display:'flex', alignItems:'center', gap:5 }}>
                  ✅ Correct! Well done.
                </div>
              )}
            </div>
          );
        })}

        {/* Section B: Subjective */}
        {hasSubj && (
          <div style={{ marginBottom:16 }}>
            <p className="sec-label">Section B — Subjective Questions</p>
            {subjectives.map((q, i) => (
              <div key={i} style={{
                background:'var(--card-bg)', border:'1.5px solid var(--border)',
                borderRadius:12, padding:'14px 16px', marginBottom:10,
              }}>
                <div style={{ fontSize:14, fontWeight:600, color:'var(--text-primary)', marginBottom:4 }}>
                  Q{mcqs.length + i + 1}. [{q.marks} Marks]
                </div>
                <div style={{ fontSize:13.5, color:'var(--text-secondary)', marginBottom:10, lineHeight:1.6 }}>
                  {q.q}
                </div>
                <textarea
                  value={subjAnswers[i] || ''}
                  onChange={e => handleSubj(i, e.target.value)}
                  placeholder="Write your answer here..."
                  rows={5}
                  style={{
                    width:'100%', padding:'10px 12px',
                    fontSize:14, fontFamily:"'Georgia', serif",
                    lineHeight:1.7, resize:'vertical',
                    background:'var(--bg)', color:'var(--text-primary)',
                    border:'1.5px solid var(--border)', borderRadius:8, outline:'none',
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Submit */}
        <button onClick={handleSubmit} disabled={!allMcqAttempted} style={{
          width:'100%', padding:'14px',
          borderRadius:12, border:'none',
          background: allMcqAttempted ? '#2563eb' : 'var(--border)',
          color: allMcqAttempted ? '#fff' : 'var(--text-muted)',
          fontSize:15, fontWeight:700,
          cursor: allMcqAttempted ? 'pointer' : 'default',
          fontFamily:'inherit', marginBottom:24,
        }}>
          {allMcqAttempted
            ? '✓ Submit Paper'
            : `Attempt all MCQs to submit (${Object.keys(mcqAnswers).length}/${mcqs.length} done)`}
        </button>

      </main>
    </div>
  );
}