import React, { useState, useEffect } from 'react';
import subjects from '../data/subjects';
import mcqs from '../data/mcqs';

export default function Levels({ subject, setPage }) {
  const sub = subjects.find(s => s.id === subject);

  const hasData = i => {
    return mcqs[subject]?.[i + 1]?.questions?.length > 0
      || !!localStorage.getItem('vu_ai_' + subject + '_' + i);
  };

  const isDone = i => {
    return hasData(i) && !!localStorage.getItem('vu_best_' + subject + '_' + i);
  };

  const doneCount = Array.from({ length: sub.total }, (_, i) => i)
    .filter(i => isDone(i)).length;
  const pct = Math.round((doneCount / sub.total) * 100);

  const handleClick = i => {
    if (!hasData(i)) {
      setPage('upload-' + subject + '-' + i);
      return;
    }
    setPage('quiz-' + subject + '-' + i);
  };

  return (
    <div className="shell fade-in">
      <header className="topbar">
        <button className="topbar-back" onClick={() => setPage('home')}>← Back</button>
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
            const has = hasData(i);
            const dn  = isDone(i);

            let tileClass = 'lec-tile';
            let dotClass  = 'lec-dot ';
            let badgeTxt  = '';
            let badgeCls  = '';

            if (dn) {
              tileClass += ' lt-done';   dotClass += 'dot-done';
              badgeTxt = 'Done'; badgeCls = 'badge-done';
            } else if (has) {
              tileClass += ' lt-active'; dotClass += 'dot-active';
              badgeTxt = 'Play'; badgeCls = 'badge-play';
            } else {
              tileClass += ' lt-soon';   dotClass += 'dot-soon';
              badgeTxt = 'Soon'; badgeCls = 'badge-soon';
            }

            const title = mcqs[subject]?.[i + 1]?.title || ('Lecture ' + (i + 1));

            return (
              <div
                key={i}
                className={tileClass}
                onClick={() => handleClick(i)}
                style={{ cursor: has ? 'pointer' : 'default' }}
              >
                <div className={dotClass} />
                <div className="lec-num">{i + 1}</div>
                <div className="lec-name">{title}</div>
                <span className={`lec-badge ${badgeCls}`}>{badgeTxt}</span>

                {/* Summary button — only if data exists */}
                {has && (
                  <button
                    className="lec-summary-btn"
                    onClick={e => {
                      e.stopPropagation();
                      setPage('summary-' + subject + '-' + i);
                    }}
                    title="AI Summary & Chat"
                  >
                    📖
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}