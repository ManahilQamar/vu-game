import React from 'react';
import subjects from '../data/subjects';
import mcqs from '../data/mcqs';

function getProgress(subId) {
  const sub   = subjects.find(s => s.id === subId);
  const saved = localStorage.getItem('vu_un_' + subId);
  const un    = saved ? JSON.parse(saved) : { 0: true };
  const done  = Object.keys(un).filter(k => {
    const i   = parseInt(k);
    const has = mcqs[subId]?.[i + 1]?.questions?.length > 0
      || !!localStorage.getItem('vu_ai_' + subId + '_' + i);
    return un[k] && has && !!localStorage.getItem('vu_best_' + subId + '_' + i);
  }).length;
  return { done, total: sub.total };
}

export default function Home({ setPage }) {
  const totalDone = subjects.reduce((a, s) => a + getProgress(s.id).done, 0);
  const totalLec  = subjects.reduce((a, s) => a + s.total, 0);

  return (
    <div className="shell fade-in">
      <header className="topbar">
        <div className="topbar-brand">
          <span className="topbar-logo">VU Study</span>
          <span className="topbar-pill">Pakistan</span>
        </div>
        <span className="topbar-info">Virtual University MCQ Practice</span>
      </header>

      <main className="page">
        <div className="home-hero">
          <p className="home-eyebrow">Study Smart</p>
          <h1 className="home-heading">Choose a Subject</h1>
          <p className="home-sub">
            Complete lecture MCQs to unlock the next level and prepare for your exams.
          </p>
        </div>

        {/* Stats row + Past Papers button in same row */}
        <div className="stats-papers-row">
          <div className="stats-row-inner">
            <div className="stat-box">
              <div className="stat-num">{subjects.length}</div>
              <div className="stat-lbl">Subjects</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">{totalDone}</div>
              <div className="stat-lbl">Done</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">{totalLec}</div>
              <div className="stat-lbl">Lectures</div>
            </div>
          </div>

          {/* Small Past Papers button */}
          <button className="papers-btn-sm" onClick={() => setPage('papers')}>
            <span>📄</span>
            <span>Past Papers</span>
          </button>
        </div>

        <p className="sec-label" style={{ marginTop: 24 }}>Subjects</p>
        <div className="subj-list">
          {subjects.map(sub => {
            const { done, total } = getProgress(sub.id);
            const pct = Math.round((done / total) * 100);
            return (
              <button key={sub.id} className="subj-card" onClick={() => setPage(sub.id)}>
                <div className="subj-icon" style={{ background: sub.bg, color: sub.color }}>
                  {sub.icon}
                </div>
                <div className="subj-info">
                  <div className="subj-name">{sub.id}</div>
                  <div className="subj-desc">{sub.fullName} — {total} lectures</div>
                </div>
                <div className="subj-right">
                  <div className="subj-count">{done}/{total}</div>
                  <div className="pbar">
                    <div className="pbar-fill" style={{ width: pct + '%', background: sub.color }} />
                  </div>
                  <span className="subj-chevron">›</span>
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}