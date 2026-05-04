import React, { useState } from 'react';
import subjects from '../data/subjects';

export default function Upload({ subject, lectureIndex, setPage }) {
  const sub = subjects.find(s => s.id === subject);
  const [text,    setText]    = useState('');
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');

  const generate = async () => {
    if (text.trim().length < 80) {
      setError('Please paste more content (at least one paragraph from the handout).');
      return;
    }
    setError(''); setLoading(true);

    const prompt = `You are an expert educator creating MCQs for Virtual University Pakistan students.
Subject: ${subject}, Lecture ${lectureIndex + 1}.

From the handout text, create exactly 20 high-quality multiple choice questions.

Rules:
- Base every question ONLY on the provided text
- Each question has exactly 4 options labeled A, B, C, D
- Exactly one correct answer
- Mix: 7 easy, 8 medium, 5 hard
- Add a brief "explanation" field (1-2 sentences) explaining why the answer is correct
- Cover the full lecture content

Respond ONLY with valid JSON (no markdown, no code fences):
{"title":"Short lecture title","questions":[{"q":"question","options":["A. opt","B. opt","C. opt","D. opt"],"answer":"A. opt","diff":"easy","explanation":"Because..."}]}

Handout:
${text.slice(0, 4000)}`;

    try {
      const res  = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4000,
          messages: [{ role: 'user', content: prompt }],
        }),
      });
      const data   = await res.json();
      const raw    = data.content.map(c => c.text || '').join('');
      const clean  = raw.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
      if (!parsed.questions?.length) throw new Error('empty');

      localStorage.setItem('vu_ai_' + subject + '_' + lectureIndex, JSON.stringify(parsed));
      setLoading(false);
      setPage('quiz-' + subject + '-' + lectureIndex);
    } catch (e) {
      setLoading(false);
      setError('Failed to generate. Check your internet and try again.');
    }
  };

  return (
    <div className="shell fade-in">
      <header className="topbar">
        <button className="topbar-back" onClick={() => setPage(subject)}>← Back</button>
        <span className="topbar-info">{subject} — Lecture {lectureIndex + 1}</span>
      </header>
      <main className="page">
        <div className="upload-wrap">
          <div className="upload-card">
            <div className="upload-title">Generate MCQs with AI</div>
            <div className="upload-desc">
              Paste the handout text for <strong>{sub.id} Lecture {lectureIndex + 1}</strong>.
              AI will generate 20 exam-quality MCQs with explanations. Saved for future sessions.
            </div>
            <label className="upload-label">Handout Text</label>
            <textarea
              className="upload-ta"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Paste your lecture handout text here..."
              disabled={loading}
            />
            <div className="upload-actions">
              <span className="char-count">{text.length} characters</span>
              <button
                className="btn-ai"
                onClick={generate}
                disabled={loading || text.trim().length < 80}
              >
                {loading
                  ? <><div className="spin" style={{ borderColor:'rgba(255,255,255,0.3)', borderTopColor:'#fff' }} /> Generating...</>
                  : <>✦ Generate 20 MCQs</>
                }
              </button>
            </div>
          </div>

          {loading && (
            <div className="status-box status-loading">
              <div className="spin" /> Reading handout and creating questions with explanations...
            </div>
          )}
          {error && (
            <div className="status-box status-error">
              <span>⚠</span> {error}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
