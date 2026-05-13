import React, { useState } from 'react';
import subjects from '../data/subjects';



// ─────────────────────────────────────────────────────────────────
//  ADD YOUR PAST PAPERS HERE
//  path: put PDF file in public/papers/SUBJECT_ID/filename.pdf
// ─────────────────────────────────────────────────────────────────
const papers = {
  PHY101: [
    {
      id: 1,
      title: 'PHY101 Mid Term — Solved MCQs',
      type: 'Midterm',
      year: '2022',
      solved: true,
      path: '/papers/PHY101/PHY101_Midterm_Solved.pdf',
    },
    // Add more PHY101 papers here:
    // { id: 2, title: '...', type: 'Final', year: '2023', solved: false, path: '/papers/PHY101/...' },
  ],
  MTH101: [
    // { id: 1, title: 'MTH101 Mid Term', type: 'Midterm', year: '2023', solved: false, path: '/papers/MTH101/...' },
  ],
  MTH202: [],
  CS101: [],
  PAK101: [],
  ENG101: [],
};

const TYPE_COLORS = {
  Midterm: { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  Final:   { bg: '#f0fdf4', color: '#16a34a', border: '#86efac' },
  Quiz:    { bg: '#fff7ed', color: '#ea580c', border: '#fed7aa' },
};

export default function PastPapers({ setPage }) {
  const [selected, setSelected] = useState(null); // selected subject

  const totalPapers = Object.values(papers).flat().length;

  // Subject list view
  if (!selected) {
    return (
      <div className="shell fade-in">
        <header className="topbar">
          <button className="topbar-back" onClick={() => setPage('home')}>← Back</button>
          <span className="topbar-info">Past Papers</span>
        </header>

        <main className="page">
          <div className="home-hero">
            <p className="home-eyebrow">Exam Preparation</p>
            <h1 className="home-heading">Past Papers</h1>
            <p className="home-sub">
              Download and view past exam papers to prepare better. {totalPapers} paper{totalPapers !== 1 ? 's' : ''} available.
            </p>
          </div>

          <p className="sec-label">Select Subject</p>
          <div className="subj-list">
            {subjects.map(sub => {
              const count = papers[sub.id]?.length || 0;
              return (
                <button
                  key={sub.id}
                  className="subj-card"
                  onClick={() => setSelected(sub.id)}
                >
                  <div className="subj-icon" style={{ background: sub.bg, color: sub.color }}>
                    {sub.icon}
                  </div>
                  <div className="subj-info">
                    <div className="subj-name">{sub.id}</div>
                    <div className="subj-desc">{sub.fullName}</div>
                  </div>
                  <div className="subj-right">
                    <div style={{
                      fontSize: 13, fontWeight: 600,
                      color: count > 0 ? '#2563eb' : '#9ca3af',
                      background: count > 0 ? '#eff6ff' : '#f3f4f6',
                      border: `1px solid ${count > 0 ? '#bfdbfe' : '#e5e7eb'}`,
                      borderRadius: 8, padding: '3px 10px',
                    }}>
                      {count > 0 ? `${count} paper${count > 1 ? 's' : ''}` : 'Coming soon'}
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

  // Papers list for selected subject
  const sub      = subjects.find(s => s.id === selected);
  const subPapers = papers[selected] || [];

  return (
    <div className="shell fade-in">
      <header className="topbar">
        <button className="topbar-back" onClick={() => setSelected(null)}>← Subjects</button>
        <span className="topbar-info">{selected} — Past Papers</span>
      </header>

      <main className="page">
        <div className="subject-banner">
          <div className="banner-icon" style={{ background: sub.bg, color: sub.color }}>
            {sub.icon}
          </div>
          <div className="banner-text">
            <div className="banner-name">{sub.id} — {sub.fullName}</div>
            <div className="banner-full">{subPapers.length} past paper{subPapers.length !== 1 ? 's' : ''} available</div>
          </div>
        </div>

        {subPapers.length === 0 ? (
          <div className="empty-card">
            <div className="empty-icon">📂</div>
            <div className="empty-title">No Papers Yet</div>
            <div className="empty-desc">Past papers for {selected} will be added soon. Check back later!</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p className="sec-label">Available Papers</p>
            {subPapers.map(paper => {
              const typeStyle = TYPE_COLORS[paper.type] || TYPE_COLORS.Midterm;
              return (
                <div key={paper.id} className="paper-card">
                  <div className="paper-top">
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: 11, fontWeight: 600, padding: '2px 8px',
                          borderRadius: 6, letterSpacing: '0.3px',
                          background: typeStyle.bg, color: typeStyle.color,
                          border: `1px solid ${typeStyle.border}`,
                        }}>
                          {paper.type}
                        </span>
                        <span style={{ fontSize: 11, color: '#9ca3af', fontWeight: 500 }}>
                          {paper.year}
                        </span>
                        {paper.solved && (
                          <span style={{
                            fontSize: 11, fontWeight: 600, padding: '2px 8px',
                            borderRadius: 6, background: '#f0fdf4',
                            color: '#16a34a', border: '1px solid #86efac',
                          }}>
                            ✓ Solved
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#111827', lineHeight: 1.4 }}>
                        {paper.title}
                      </div>
                    </div>
                  </div>

                  <div className="paper-actions">
                    {/* View in browser */}
                    <a
                      href={paper.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="paper-btn paper-btn-view"
                    >
                      👁 View
                    </a>
                    {/* Download */}
                    <a
                      href={paper.path}
                      download
                      className="paper-btn paper-btn-download"
                    >
                      ⬇ Download
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}