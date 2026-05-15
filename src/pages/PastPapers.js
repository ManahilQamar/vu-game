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
      title: 'PHY101 Mid Term Paper',
      type: 'Midterm',
      year: '2022',
      solved: true,
      path: '/papers/PHY101/phy101_mid_term_1_www.vu786.com.pdf',
    },
    {
      id: 2,
      title: 'PHY101  MIDTERM SOLVED MCQS By JUNAID',
      type: 'Midterm',
      year: '2022',
      solved: true,
      path: '/papers/PHY101/PHY101  MIDTERM SOLVED MCQS By JUNAID.pdf',
    },
    {
      id: 3,
      title: 'Phy101 Mid Notes By Conceptsbuilder',
      type: 'Midterm',
      year: '2022',
      solved: true,
      path: '/papers/PHY101/Phy101 Mid Notes By Conceptsbuilder.pdf',
    },
    {
      id: 4,
      title: 'PHY101 Midterm MCQs by Waqar Siddhu',
      type: 'Midterm',
      year: '2022',
      solved: true,
      path: '/papers/PHY101/PHY101 Midterm MCQs by Waqar Siddhu.pdf',
    },
    {
      id: 5,
      title: 'phy101-midterm-solved-1',
      type: 'Midterm',
      year: '2022',
      solved: true,
      path: '/papers/PHY101/phy101-midterm-solved-1.pdf',
    },

     ],
  MTH101: [
     {
      id: 1,
      title: 'MTH101 Mid Term — Paper',
      type: 'Midterm',
      year: '2006',
      solved: true,
      path: '/papers/MTH101/mth101_mid_term_3_www.vu786.com.pdf',
    },
     {
      id: 2,
      title: 'MTH101 -midterm-solved-mcqs-with-ref',
      type: 'Midterm',
      solved: true,
      path: '/papers/MTH101/-midterm-solved-mcqs-with-ref.pdf',
    },
     {
      id: 2,
      title: 'Mth101 subjective notes+practice exersises solution for mid term',
      type: 'Midterm',
      solved: true,
      path: '/papers/MTH101/Mth101 subjective notes+practice exersises solution for mid term.pdf',
    },
     {
      id: 3,
      title: 'mth101_Midterm_Solved_subjective',
      type: 'Midterm',
      solved: true,
      path: '/papers/MTH101/mth101_Midterm_Solved_subjective.pdf',
    },
     {
      id: 4,
      title: 'MTH101MidtersolvedMegafile',
      type: 'Midterm',
      solved: true,
      path: '/papers/MTH101/MTH101MidtersolvedMegafile.pdf',
    },
  ],
  MTH202: [
    {
      id: 1,
      title: 'MTH202 Mid Term — Paper',
      type: 'Midterm',
      year: '2006',
      solved: true,
      path: '/papers/MTH202/mth202_mid_term2_www.vu786.com.pdf',
    },
    {
      id: 2,
      title: 'MTH202 - Midterm MCQS Solved With References By Moaaz',
      type: 'Midterm',
      solved: true,
      path: '/papers/MTH202/MTH202 - Midterm MCQS Solved With References By Moaaz.pdf',
    },
    {
      id: 3,
      title: 'MTH202 MIDTERM SOLVED MCQS By JUNAID',
      type: 'Midterm',
      solved: true,
      path: '/papers/MTH202/MTH202 MIDTERM SOLVED MCQS By JUNAID.pdf',
    },
    {
      id: 3,
      title: 'MTH202 Midterm Subjectives by Waqar Siddhu',
      type: 'Midterm',
      solved: true,
      path: '/papers/MTH202/MTH202 Midterm Subjectives by Waqar Siddhu.pdf',
    },
  ],
  CS101: [
    {
      id: 1,
      title: 'CS101 Mid Term Papers',
      type: 'Midterm',
      year: '2009',
      solved: true,
      path: '/papers/CS101/cs101_mid_term_4_www.vu786.com.pdf',
    },
    {
      id: 2,
      title: 'CS101 Mid Term Paper',
      type: 'Midterm',
      year: '2010',
      solved: true,
      path: '/papers/CS101/cs101_mid_term_21_www.vu786.com.pdf',
    },
    
    {
      id: 3,
      title: 'CS101 Final short Notes',
      type: 'Short notes',
      solved: true,
      path: '/papers/CS101/CS101 Final Short Notes (VUAnswer.com).pdf',
    },
    {
      id: 4,
      title: 'CS101 Handout',
      type: 'Handout',
      solved: true,
      path: '/papers/CS101/CS101 Introduction to Computing - Handouts.pdf',
    },
    {
      id: 5,
      title: 'CS101 midterm important topic',
      type: 'Midterm importent topic',
      solved: true,
      path: '/papers/CS101/cs101 midterm important topic.pdf',
    },
    {
      id: 6,
      title: 'CS101 midterm subjective',
      type: 'Midterm midterm subjective',
      solved: true,
      path: '/papers/CS101/cs101 midterm subjective (1).pdf',
    },
    {
      id: 7,
      title: 'CS101 Midterm Subjectives by Waqar Siddhu',
      type: 'Midterm midterm subjective',
      solved: true,
      path: '/papers/CS101/CS101 Midterm Subjectives by Waqar Siddhu.pdf',
    },
    {
      id: 8,
      title: 'CS101 Old Midterm MCQs by Waqar Siddhu',
      type: 'Midterm midterm subjective',
      solved: true,
      path: '/papers/CS101/CS101 Old Midterm MCQs by Waqar Siddhu.pdf',
    },
    
    {
      id: 9,
      title: 'CS101-Imp-MCQs-Midterm',
      type: 'Midterm midterm subjective',
      solved: true,
      path: '/papers/CS101/Cs101-Imp-MCQs-Midterm.pdf',
    },
    {
      id: 10,
      title: 'CS101Midterm-Solved-papers-with-reference-by-faheem',
      type: 'Midterm midterm subjective',
      solved: true,
      path: '/papers/CS101/cs101-Midterm-Solved-papers-with-reference-by-faheem (1).pdf',
    },
    
  ],
  PAK101: [
    {
      id: 1,
      title: 'PAk301 Mid Term — Paper',
      type: 'Midterm',
      year: '2010',
      solved: true,
      path: '/papers/PAK101/pak301_mid_term_5_www.vu786.com.pdf',
    },
    {
      id: 2,
      title: 'PAK301-MidTerm-Solved-Mcqs-Mega-File-1',
      type: 'Midterm',
      year: '2010',
      solved: true,
      path: '/papers/PAK101/PAK301-MidTerm-Solved-Mcqs-Mega-File-1.pdf',
    },
    {
      id: 3,
      title: 'PAK301-Midterm-Solved-Quiz',
      type: 'Midterm',
      year: '2010',
      solved: true,
      path: '/papers/PAK101/PAK301-Midterm-Solved-Quiz.pdf',
    },
    {
      id: 4,
      title: 'PAK301-midterm-subjectives',
      type: 'Midterm',
      year: '2010',
      solved: true,
      path: '/papers/PAK101/PAK301-midterm-subjectives.pdf',
    },
    {
      id: 5,
      title: 'PAK301-Objective-file-for-Mid-Term',
      type: 'Midterm',
      year: '2010',
      solved: true,
      path: '/papers/PAK101/PAK301-Objective-file-for-Mid-Term.pdf',
    },
    {
      id: 5,
      title: 'PAK301-Solved-midterm-latest-paper-1-1',
      type: 'Midterm',
      year: '2010',
      solved: true,
      path: '/papers/PAK101/PAK301-Solved-midterm-latest-paper-1-1.pdf',
    },
  ],
  ENG101: [
     {
      id: 1,
      title: 'ENG101 Mid Term — Paper',
      type: 'Midterm',
      year: '2010',
      solved: true,
      path: '/papers/ENG101/eng101_mid_term_4_www.vu786.com.pdf',
    },
     {
      id: 2,
      title: 'ENG101 Mid Term — Paper',
      type: 'Midterm',
      year: '2006',
      solved: true,
      path: '/papers/ENG101/eng101_mid_term_5_www.vu786.com.pdf',
    },
     {
      id: 3,
      title: 'ENG101 Midterm Notes',
      type: 'Midterm Notes',
      solved: true,
      path: '/papers/ENG101/Eng101 Midterm Notes.pdf',
    },
     {
      id: 3,
      title: 'ENG101 MIDTERM SOLVED MCQS By JUNAID',
      type: 'Midterm Notes',
      solved: true,
      path: '/papers/ENG101/ENG101 MIDTERM SOLVED MCQS By JUNAID.pdf',
    },
     {
      id: 4,
      title: 'ENG101 Subjective file for Mid Term by Moaaz',
      type: 'Midterm Notes',
      solved: true,
      path: '/papers/ENG101/ENG101 Subjective file for Mid Term by Moaaz.pdf',
    },
     {
      id: 5,
      title: 'ENG101-midterm-solved-mcqs-with-ref',
      type: 'Midterm Notes',
      solved: true,
      path: '/papers/ENG101/eng101-midterm-solved-mcqs-with-ref.pdf',
    },
  ],
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