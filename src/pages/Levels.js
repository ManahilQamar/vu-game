import React, { useState, useEffect } from 'react';
import subjects from '../data/subjects';
import mcqs from '../data/mcqs';

export default function Levels({ subject, setPage }) {
  const sub = subjects.find(s => s.id === subject);
  const [unlocked, setUnlocked] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('vu_un_' + subject);
    if (saved) { setUnlocked(JSON.parse(saved)); }
    else {
      const def = { 0: true };
      setUnlocked(def);
      localStorage.setItem('vu_un_' + subject, JSON.stringify(def));
    }
  }, [subject]);

  const isUnlocked = i => !!unlocked[i];
  const hasData    = i => !!(mcqs[subject]?.[i + 1]?.questions?.length > 0);
  const isDone     = i => isUnlocked(i) && hasData(i) && !!localStorage.getItem('vu_best_' + subject + '_' + i);

  const doneCount = Object.keys(unlocked).filter(k => unlocked[k]).length;
  const pct = Math.round((doneCount / sub.total) * 100);

  const handleTile = idx => {
    if (!isUnlocked(idx)) { alert('Complete the previous lecture first to unlock this one.'); return; }
    if (!hasData(idx)) {
      setPage('upload-' + subject + '-' + idx);
      return;
    }
    setPage('quiz-' + subject + '-' + idx);
  };

  return (
    <div className="app-shell page-enter">
      <header className="topbar">
        <button className="topbar-back" onClick={() => setPage('home')}>&#8592; Back</button>
        <div className="topbar-right">{sub.id}</div>
      </header>

      <main className="page">
        <div className="subj-banner">
          <div className="subj-banner-icon" style={{ background: sub.bg, color: sub.color }}>{sub.icon}</div>
          <div className="subj-banner-info">
            <div className="subj-banner-name">{sub.id} &mdash; {sub.fullName}</div>
            <div className="subj-banner-full">{doneCount} of {sub.total} lectures completed</div>
            <div className="subj-banner-prog">
              <div className="prog-track">
                <div className="prog-fill" style={{ width: pct + '%', background: sub.color }} />
              </div>
              <div className="prog-label">{pct}% complete</div>
            </div>
          </div>
        </div>

        <div className="section-hd">Lectures</div>
        <div className="lec-grid">
          {Array.from({ length: sub.total }, (_, i) => {
            const un  = isUnlocked(i);
            const has = hasData(i);
            const dn  = isDone(i);
            const active = un && !dn;

            let tileCls = 'lec-tile';
            let dotCls  = 'lec-dot ';
            let statusTxt = '';
            let statusCls = '';

            if (dn)       { tileCls += ' lec-done';   dotCls += 'lec-dot-done';   statusTxt = 'Done';       statusCls = 'status-done'; }
            else if (un && has)  { tileCls += ' lec-active'; dotCls += 'lec-dot-active'; statusTxt = 'Play';       statusCls = 'status-active'; }
            else if (un && !has) { tileCls += ' lec-active'; dotCls += 'lec-dot-soon';   statusTxt = 'Add MCQs';   statusCls = 'status-soon'; }
            else          { tileCls += ' lec-locked';  dotCls += 'lec-dot-lock';   statusTxt = 'Locked';     statusCls = 'status-lock'; }

            const lecData = mcqs[subject]?.[i + 1];

            return (
              <div key={i} className={tileCls} onClick={() => handleTile(i)}>
                <div className={dotCls} />
                <div className="lec-num">{i + 1}</div>
                <div className="lec-title">{lecData?.title || 'Lecture ' + (i + 1)}</div>
                <div className={`lec-status ${statusCls}`}>{statusTxt}</div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
