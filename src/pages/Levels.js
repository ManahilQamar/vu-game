import React, { useState, useEffect } from 'react';
import subjects from '../data/subjects';
import mcqs from '../data/mcqs';

export default function Levels({ subject, setPage }) {
  const sub = subjects.find(s => s.id === subject);
  const [unlocked, setUnlocked] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('vu_un_' + subject);
    if (saved) {
      setUnlocked(JSON.parse(saved));
    } else {
      const def = { 0: true };
      setUnlocked(def);
      localStorage.setItem('vu_un_' + subject, JSON.stringify(def));
    }
  }, [subject]);

  const isUnlocked = i => !!unlocked[i];
  const hasData    = i => {
    return mcqs[subject]?.[i + 1]?.questions?.length > 0
      || !!localStorage.getItem('vu_ai_' + subject + '_' + i);
  };
  const isDone = i => isUnlocked(i) && hasData(i) && !!localStorage.getItem('vu_best_' + subject + '_' + i);

  const doneCount = Object.keys(unlocked).filter(k => unlocked[k]).length;
  const pct = Math.round((doneCount / sub.total) * 100);

  const handleClick = i => {
    if (!isUnlocked(i)) {
      alert('Complete the previous lecture first to unlock this one.');
      return;
    }
    if (!hasData(i)) {
      setPage('upload-' + subject + '-' + i);
      return;
    }
    setPage('quiz-' + subject + '-' + i);
  };

  return (
    <div className="shell fade-in">
      <header className="topbar">
        <button className="topbar-back" onClick={() => setPage('home')}>
          ← Back
        </button>
        <span className="topbar-info">{sub.id} — {sub.fullName}</span>
      </header>

      <main className="page">
        <div className="subject-banner">
          <div className="banner-icon" style={{ background: sub.bg, color: sub.color }}>
            {sub.icon}
          </div>
          <div className="banner-text">
            <div className="banner-name">{sub.id} — {sub.fullName}</div>
            <div className="banner-full">{doneCount} of {sub.total} lectures completed</div>
            <div className="banner-prog">
              <div className="prog-track">
                <div className="prog-bar" style={{ width: pct + '%', background: sub.color }} />
              </div>
              <div className="prog-label">{pct}% complete</div>
            </div>
          </div>
        </div>

        <p className="sec-label">Lectures</p>
        <div className="lec-grid">
          {Array.from({ length: sub.total }, (_, i) => {
            const un  = isUnlocked(i);
            const has = hasData(i);
            const dn  = isDone(i);
            const active = un && !dn;

            let tileClass = 'lec-tile';
            let dotClass  = 'lec-dot ';
            let badgeTxt  = '';
            let badgeCls  = '';

            if (dn) {
              tileClass += ' lt-done';   dotClass += 'dot-done';
              badgeTxt = 'Done'; badgeCls = 'badge-done';
            } else if (un && has) {
              tileClass += ' lt-active'; dotClass += 'dot-active';
              badgeTxt = 'Play'; badgeCls = 'badge-play';
            } else if (un && !has) {
              tileClass += ' lt-soon';   dotClass += 'dot-soon';
              badgeTxt = 'Add MCQs'; badgeCls = 'badge-soon';
            } else {
              tileClass += ' lt-locked'; dotClass += 'dot-locked';
              badgeTxt = 'Locked'; badgeCls = 'badge-locked';
            }

            const title = mcqs[subject]?.[i + 1]?.title || ('Lecture ' + (i + 1));

            return (
              <div key={i} className={tileClass} onClick={() => handleClick(i)}>
                <div className={dotClass} />
                <div className="lec-num">{i + 1}</div>
                <div className="lec-name">{title}</div>
                <span className={`lec-badge ${badgeCls}`}>{badgeTxt}</span>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
