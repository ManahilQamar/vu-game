import React, { useState, useRef, useCallback } from 'react';
import subjects from '../data/subjects';
import mcqs from '../data/mcqs';

/* ─── constants ─── */
const MAX_LIVES = 5;
const PASS_PCT  = 70;
const LABELS    = ['A', 'B', 'C', 'D'];

/* ─── helpers ─── */
function getLectureData(subject, idx) {
  const lecNum = idx + 1;

  if (mcqs[subject]?.[lecNum]?.questions?.length > 0) {
    return mcqs[subject][lecNum];
  }

  const stored = localStorage.getItem('vu_ai_' + subject + '_' + idx);

  if (!stored) return null;

  try {
    return JSON.parse(stored);
  } catch (e) {
    return null;
  }
}

/* ─── AI Explanation fetch ─── */
async function fetchAIExplanation(question, subjectId) {
  const res = await fetch("http://localhost:5000/api/explain", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: question.q,
      options: question.options,
      answer: question.answer,
      subjectId: subjectId
    }),
  });

  if (!res.ok) {
    throw new Error("API error " + res.status);
  }

  const data = await res.json();

  return data.explanation;
}
/* ─── Web Audio sound generator ─── */
function useSound() {
  const ctx = useRef(null);
  const getCtx = () => {
    if (!ctx.current) ctx.current = new (window.AudioContext || window.webkitAudioContext)();
    return ctx.current;
  };
  const playCorrect = () => {
    try {
      const ac = getCtx(); const now = ac.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = ac.createOscillator(); const gain = ac.createGain();
        osc.connect(gain); gain.connect(ac.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.12);
        gain.gain.setValueAtTime(0, now + i * 0.12);
        gain.gain.linearRampToValueAtTime(0.35, now + i * 0.12 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.28);
        osc.start(now + i * 0.12); osc.stop(now + i * 0.12 + 0.3);
      });
    } catch (e) {}
  };

  const retry = () => {
  setCurQ(0);
  setLives(MAX_LIVES);
  setScore(0);
  setSelected(null);
  setAnswered(false);
  setFinished(false);
  setUnlockNext(false);
  setShowSparks(false);
  setShowExplain(false);
};

  const playWrong = () => {
    try {
      const ac = getCtx(); const now = ac.currentTime;
      [392, 293.66].forEach((freq, i) => {
        const osc = ac.createOscillator(); const gain = ac.createGain();
        osc.connect(gain); gain.connect(ac.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + i * 0.18);
        gain.gain.setValueAtTime(0, now + i * 0.18);
        gain.gain.linearRampToValueAtTime(0.25, now + i * 0.18 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.18 + 0.32);
        osc.start(now + i * 0.18); osc.stop(now + i * 0.18 + 0.35);
      });
    } catch (e) {}
  };
  return { playCorrect, playWrong };
}

/* ─── Spark particle component ─── */
function Sparks({ active }) {
  if (!active) return null;
  const particles = Array.from({ length: 22 }, (_, i) => {
    const angle  = (i / 22) * 360;
    const dist   = 55 + Math.random() * 55;
    const size   = 6 + Math.random() * 8;
    const colors = ['#fbbf24','#34d399','#60a5fa','#f472b6','#a78bfa','#fb923c'];
    const color  = colors[i % colors.length];
    const delay  = Math.random() * 0.08;
    const dur    = 0.55 + Math.random() * 0.3;
    const rad    = (angle * Math.PI) / 180;
    const tx     = Math.cos(rad) * dist;
    const ty     = Math.sin(rad) * dist;
    return { size, color, delay, dur, tx, ty, i };
  });
  return (
    <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:999 }}>
      <div style={{ position:'absolute', top:'38%', left:'50%', transform:'translate(-50%,-50%)' }}>
        {particles.map(p => (
          <div key={p.i} style={{
            position:'absolute', width:p.size, height:p.size,
            borderRadius:'50%', background:p.color, top:0, left:0,
            animation:`spark ${p.dur}s ease-out ${p.delay}s both`,
            '--tx':p.tx+'px', '--ty':p.ty+'px',
          }} />
        ))}
      </div>
      <style>{`
        @keyframes spark {
          0%   { transform: translate(0,0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ─── Explanation Modal — AI powered ─── */
function ExplainModal({ question, onClose, subColor, subjectId }) {
  const [aiText,  setAiText]  = useState('');
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState('');

  /* fetch on mount */
  const load = useCallback(() => {
    setLoading(true);
    setError('');
    setAiText('');
    fetchAIExplanation(question, subjectId)
      .then(text => setAiText(text))
      .catch(() => setError('Explanation load nahi ho saki. Dobara try karein.'))
      .finally(() => setLoading(false));
  }, [question, subjectId]);

  React.useEffect(() => { load(); }, [load]);

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position:'fixed', inset:0, zIndex:1000,
        background:'rgba(0,0,0,0.45)', backdropFilter:'blur(3px)',
        display:'flex', alignItems:'flex-end', justifyContent:'center',
        animation:'fadeIn 0.18s ease',
      }}
    >
      <div style={{
        background:'#fff', borderRadius:'20px 20px 0 0',
        width:'100%', maxWidth:'680px',
        padding:'20px 20px 36px',
        maxHeight:'80vh', overflowY:'auto',
        animation:'slideUp 0.22s ease',
      }}>
        {/* Handle bar */}
        <div style={{ width:40, height:4, background:'#e5e7eb', borderRadius:2, margin:'0 auto 18px' }} />

        {/* Header */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{
              width:34, height:34, borderRadius:'50%',
              background: subColor + '22',
              display:'flex', alignItems:'center', justifyContent:'center', fontSize:16,
            }}>💡</div>
            <div style={{ fontSize:15, fontWeight:700, color:'#111827' }}>AI Explanation</div>
          </div>
          <button onClick={onClose} style={{
            background:'none', border:'none', fontSize:20,
            color:'#9ca3af', cursor:'pointer', lineHeight:1, padding:'2px 6px',
          }}>✕</button>
        </div>

        {/* Question recap */}
        <div style={{
          background:'#f9fafb', border:'1px solid #e5e7eb',
          borderRadius:10, padding:'12px 14px', marginBottom:14,
          fontSize:13.5, fontWeight:500, color:'#374151', lineHeight:1.6,
        }}>
          {question.q}
        </div>

        {/* Correct answer */}
        <div style={{ marginBottom:14 }}>
          <div style={{ fontSize:11, fontWeight:700, letterSpacing:'0.6px', textTransform:'uppercase', color:'#9ca3af', marginBottom:6 }}>
            Correct Answer
          </div>
          <div style={{
            background:'#f0fdf4', border:'1px solid #86efac',
            borderRadius:10, padding:'10px 14px',
            fontSize:14, fontWeight:600, color:'#14532d',
            display:'flex', alignItems:'center', gap:8,
          }}>
            <span>✓</span>
            {question.answer.replace(/^[ABCD]\.\s*/, '')}
          </div>
        </div>

        {/* AI explanation body */}
        <div style={{ marginBottom:22 }}>
          <div style={{ fontSize:11, fontWeight:700, letterSpacing:'0.6px', textTransform:'uppercase', color:'#9ca3af', marginBottom:8 }}>
            Explanation
          </div>

          {/* Loading */}
          {loading && (
            <div style={{
              background:'#eff6ff', border:'1px solid #bfdbfe',
              borderRadius:10, padding:'18px 16px',
              display:'flex', alignItems:'center', gap:12,
              fontSize:14, color:'#2563eb',
            }}>
              <div style={{
                width:20, height:20, borderRadius:'50%',
                border:'2.5px solid #bfdbfe', borderTopColor:'#2563eb',
                animation:'spin 0.7s linear infinite', flexShrink:0,
              }} />
              AI samjha raha hai... please wait
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div style={{
              background:'#fef2f2', border:'1px solid #fecaca',
              borderRadius:10, padding:'14px 16px',
              fontSize:13.5, color:'#dc2626', lineHeight:1.6,
            }}>
              ⚠ {error}
              <button onClick={load} style={{
                display:'block', marginTop:8, fontSize:13,
                color:'#2563eb', background:'none', border:'none',
                cursor:'pointer', padding:0, textDecoration:'underline',
              }}>
                Dobara try karo
              </button>
            </div>
          )}

          {/* AI text */}
          {aiText && !loading && (
            <div style={{
              background:'#eff6ff', border:'1px solid #bfdbfe',
              borderRadius:10, padding:'14px 16px',
              fontSize:14, color:'#1e40af', lineHeight:1.8,
            }}>
              {aiText.split('\n').map((line, i) =>
                line.trim() ? <p key={i} style={{ margin:'0 0 8px' }}>{line}</p> : null
              )}
            </div>
          )}
        </div>

        {/* Close */}
        <button onClick={onClose} style={{
          width:'100%', background:'#111827', color:'#fff',
          border:'none', borderRadius:12, padding:'13px',
          fontSize:15, fontWeight:600, cursor:'pointer', fontFamily:'inherit',
        }}>
          Got it ✓
        </button>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/* ─── Main Quiz Component ─── */
export default function Quiz({ subject, lectureIndex, setPage }) {
  const sub         = subjects.find(s => s.id === subject);
  const lectureData = getLectureData(subject, lectureIndex);
  const questions   = lectureData?.questions || [];
  const total       = questions.length;

  const [curQ,        setCurQ]        = useState(0);
  const [lives,       setLives]       = useState(MAX_LIVES);
  const [score,       setScore]       = useState(0);
  const [selected,    setSelected]    = useState(null);
  const [answered,    setAnswered]    = useState(false);
  const [finished,    setFinished]    = useState(false);
  const [unlockNext,  setUnlockNext]  = useState(false);
  const [showSparks,  setShowSparks]  = useState(false);
  const [showExplain, setShowExplain] = useState(false);

  const { playCorrect, playWrong } = useSound();

  const finishQuiz = useCallback((finalScore, finalLives) => {
    const pct    = (finalScore / total) * 100;
    const passed = pct >= PASS_PCT;
    const bestKey = 'vu_best_' + subject + '_' + lectureIndex;
    const prev    = parseInt(localStorage.getItem(bestKey) || '0');
    if (finalScore > prev) localStorage.setItem(bestKey, String(finalScore));
    if (passed) {
      const unKey = 'vu_un_' + subject;
      const unMap = JSON.parse(localStorage.getItem(unKey) || '{"0":true}');
      const nx    = lectureIndex + 1;
      if (nx < sub.total && !unMap[nx]) {
        unMap[nx] = true;
        localStorage.setItem(unKey, JSON.stringify(unMap));
        setUnlockNext(true);
      }
    }
    setFinished(true);
  }, [subject, lectureIndex, total, sub.total]);

  const handleSelect = (optStr, optIdx) => {
    if (answered) return;
    setSelected(optIdx);
    setAnswered(true);
    const isRight = optStr === questions[curQ].answer;
    if (isRight) {
      playCorrect();
      setScore(s => s + 1);
      setShowSparks(true);
      setTimeout(() => setShowSparks(false), 900);
    } else {
      playWrong();
      setLives(l => l - 1);
    }
  };

 const handleNext = () => {
  const nextQ = curQ + 1;

  const currentLives = lives;

  if (nextQ >= total || currentLives <= 0) {
    finishQuiz(score, currentLives);
    return;
  }

  setCurQ(nextQ);
  setSelected(null);
  setAnswered(false);
  setShowExplain(false);
};

  /* ── No data ── */
  if (!lectureData || total === 0) {
    return (
      <div className="shell fade-in">
        <header className="topbar">
          <button className="topbar-back" onClick={() => setPage(subject)}>← Back</button>
          <span className="topbar-info">{subject} — Lecture {lectureIndex + 1}</span>
        </header>
        <main className="page">
          <div className="empty-card">
            <div className="empty-icon">📋</div>
            <div className="empty-title">No MCQs Yet</div>
            <div className="empty-desc">Upload a handout to auto-generate MCQs for this lecture.</div>
            <button className="btn-ghost" onClick={() => setPage('upload-' + subject + '-' + lectureIndex)}>
              Upload Handout &amp; Generate MCQs
            </button>
          </div>
        </main>
      </div>
    );
  }

  /* ── Result screen ── */
  if (finished) {
    const pct    = Math.round((score / total) * 100);
    const passed = pct >= PASS_PCT;
    const emoji  = pct >= 90 ? '🏆' : passed ? '🌟' : '📖';
    return (
      <div className="shell fade-in">
        <header className="topbar">
          <button className="topbar-back" onClick={() => setPage(subject)}>← Lectures</button>
          <span className="topbar-info">Result</span>
        </header>
        <main className="page">
          <div className="result-wrap">
            <div className="result-card">
              <span className="result-emoji">{emoji}</span>
              <div className="result-heading">
                {pct >= 90 ? 'Excellent!' : passed ? 'Good Work!' : 'Keep Trying!'}
              </div>
              <div className="result-sub">{sub.id} — Lecture {lectureIndex + 1}</div>
              <div className="result-stats">
                <div className="rs"><div className="rs-num">{score}</div><div className="rs-lbl">Correct</div></div>
                <div className="rs"><div className="rs-num">{pct}%</div><div className="rs-lbl">Score</div></div>
                <div className="rs"><div className="rs-num">{lives < 0 ? 0 : lives}</div><div className="rs-lbl">Lives left</div></div>
              </div>
              {passed
                ? <div className="result-banner rb-pass">
                    ✓ {unlockNext ? `Lecture ${lectureIndex + 2} is now unlocked!` : 'Great job! Keep it up.'}
                  </div>
                : <div className="result-banner rb-fail">
                    ⚠ You need 70% to advance. Review the lecture and try again.
                  </div>
              }
            </div>
            <div className="result-actions">
              <button className="btn-dark" onClick={retry}>Try Again</button>
              <button className="btn-ghost" onClick={() => setPage(subject)}>Back to Lectures</button>
              <button className="btn-ghost" onClick={() => setPage('home')}>Home</button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  /* ── Quiz screen ── */
  const q = questions[curQ];   
const options = q.options || [];
  const prog    = Math.round(((curQ + 1) / total) * 100);
  const diff    = q.diff || 'medium';
  const isLast  = curQ + 1 >= total;
const normalize = (t) => t.replace(/^[ABCD]\.\s*/, '');

const isRight =
  selected !== null &&
  normalize(q.options[selected]) === normalize(q.answer);

  const getOptClass = (idx, optStr) => {
    if (!answered) return 'opt';
    if (optStr === q.answer)          return 'opt opt-correct';
    if (idx === selected && !isRight) return 'opt opt-wrong';
    return 'opt';
  };

  return (
    <div className="shell fade-in">
      <Sparks active={showSparks} />

      {/* AI Explanation Modal */}
      {showExplain && (
        <ExplainModal
          question={q}
          subColor={sub.color}
          subjectId={subject}
          onClose={() => setShowExplain(false)}
        />
      )}

      <header className="topbar">
        <button className="topbar-back" onClick={() => setPage(subject)}>← Lectures</button>
        <span className="topbar-info">{sub.id} — Lec {lectureIndex + 1}</span>
      </header>

      <main className="page">
        {/* Progress bar + lives */}
        <div className="quiz-header">
          <div className="qh-top">
            <span className="qh-title">{lectureData.title || 'Lecture ' + (lectureIndex + 1)}</span>
            <span className="qh-count">{curQ + 1} / {total}</span>
          </div>
          <div className="qh-track">
            <div className="qh-fill" style={{ width: prog + '%', background: sub.color }} />
          </div>
          <div className="qh-meta">
            <div className="hearts">
              {Array.from({ length: MAX_LIVES }).map((_, i) => (
                <span key={i} className={`heart${i >= lives ? ' dead' : ''}`}>♥</span>
              ))}
            </div>
            <span className="qh-score">Score: <strong>{score}</strong></span>
          </div>
        </div>

        {/* Question card */}
        <div className="q-card">
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
            <span className={`diff-chip chip-${diff}`}>
              {diff.charAt(0).toUpperCase() + diff.slice(1)}
            </span>
            {/* 💡 Explain btn */}
            <button
              onClick={() => setShowExplain(true)}
              style={{
                display:'flex', alignItems:'center', gap:5,
                fontSize:12, fontWeight:600, color:'#6b7280',
                background:'#f3f4f6', border:'1px solid #e5e7eb',
                borderRadius:20, padding:'4px 12px', cursor:'pointer',
                fontFamily:'inherit', transition:'all 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='#eff6ff'; e.currentTarget.style.color='#2563eb'; e.currentTarget.style.borderColor='#bfdbfe'; }}
              onMouseLeave={e => { e.currentTarget.style.background='#f3f4f6'; e.currentTarget.style.color='#6b7280'; e.currentTarget.style.borderColor='#e5e7eb'; }}
            >
              💡 Explain
            </button>
          </div>
          <div className="q-text">{q.q}</div>
        </div>

        {/* Options */}
        <div className="opts">
          {options.map((opt, i) => (
            <button
              key={i}
              className={getOptClass(i, opt)}
              disabled={answered}
              onClick={() => handleSelect(opt, i)}
            >
              <span className="opt-badge">{LABELS[i]}</span>
              {opt.replace(/^[ABCD]\.\s*/, '')}
            </button>
          ))}
        </div>

        {/* Feedback + Next */}
        {answered && (
          <>
            <div className={`feedback ${isRight ? 'fb-correct' : 'fb-wrong'}`}>
              <span className="fb-icon">{isRight ? '✓' : '✗'}</span>
              <div className="fb-text">
                {isRight
                  ? <><strong>Correct!</strong> Well done, keep it up.</>
                  : <><strong>Incorrect.</strong> Correct answer: {q.answer.replace(/^[ABCD]\.\s*/,'')}</>
                }
              </div>
            </div>
            <button
              className={`btn-next${isLast ? ' btn-finish' : ''}`}
              onClick={handleNext}
            >
              {isLast ? 'Finish Quiz ✓' : 'Next Question →'}
            </button>
          </>
        )}
      </main>
    </div>
  );
}
