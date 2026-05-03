import React from 'react';
import subjects from '../data/subjects';
import mcqs from '../data/mcqs';

function getProgress(subId) {
  const sub = subjects.find(s => s.id === subId);
  const saved = localStorage.getItem('vu_un_' + subId);
  const unlocked = saved ? JSON.parse(saved) : { 0: true };
  const done = Object.keys(unlocked).filter(k => {
    const idx = parseInt(k);
    return unlocked[k]
      && mcqs[subId]?.[idx + 1]?.questions?.length > 0
      && localStorage.getItem('vu_best_' + subId + '_' + idx);
  }).length;
  return { done, total: sub.total };
}

export default function Home({ setPage }) {
  const totalDone = subjects.reduce((a, s) => a + getProgress(s.id).done, 0);
  const totalLec  = subjects.reduce((a, s) => a + s.total, 0);

  return (
    <div className="app-shell page-enter">
      <header className="topbar">
        <div className="topbar-left">
          <span className="topbar-logo">VU Study</span>
          <span className="topbar-badge">Beta</span>
        </div>
        <span className="topbar-right">Virtual University of Pakistan</span>
      </header>

      <main className="page">
        <div className="home-hero">
          <div className="home-greeting">Study Smart</div>
          <h1 className="home-title">Choose a Subject</h1>
          <p className="home-subtitle">Complete lecture MCQs to unlock next levels and track your exam preparation.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-tile">
            <div className="stat-tile-num">{subjects.length}</div>
            <div className="stat-tile-lbl">Subjects</div>
          </div>
          <div className="stat-tile">
            <div className="stat-tile-num">{totalDone}</div>
            <div className="stat-tile-lbl">Completed</div>
          </div>
          <div className="stat-tile">
            <div className="stat-tile-num">{totalLec}</div>
            <div className="stat-tile-lbl">Total Lectures</div>
          </div>
        </div>

        <div className="section-hd">Subjects</div>
        <div className="subj-list">
          {subjects.map(sub => {
            const { done, total } = getProgress(sub.id);
            const pct = Math.round((done / total) * 100);
            return (
              <button key={sub.id} className="subj-card" onClick={() => setPage(sub.id)}>
                <div className="subj-icon-wrap" style={{ background: sub.bg, color: sub.color }}>
                  {sub.icon}
                </div>
                <div className="subj-info">
                  <div className="subj-name">{sub.id}</div>
                  <div className="subj-full">{sub.fullName} &mdash; {total} lectures</div>
                </div>
                <div className="subj-right">
                  <div className="subj-count">{done}/{total}</div>
                  <div className="mini-bar">
                    <div className="mini-fill" style={{ width: pct + '%', background: sub.color }} />
                  </div>
                  <div className="subj-arrow">›</div>
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
