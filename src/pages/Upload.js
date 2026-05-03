import React, { useState } from 'react';
import subjects from '../data/subjects';

export default function Upload({ subject, lectureIndex, setPage }) {
  const sub = subjects.find(s => s.id === subject);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generate = async () => {
    if (text.trim().length < 80) {
      setError('Please paste more content (at least one paragraph from the handout).');
      return;
    }
    setError('');
    setLoading(true);

    const prompt = `You are an expert educator creating exam MCQs for Virtual University Pakistan students.
Subject: ${subject}, Lecture ${lectureIndex + 1}.

From the handout text below, create exactly 20 high-quality multiple choice questions covering ALL major topics.

Rules:
- Base every question ONLY on the provided text
- Each question has exactly 4 options labeled A, B, C, D
- Exactly one correct answer per question
- Mix difficulty: 7 easy, 8 medium, 5 hard
- Make distractors plausible but clearly wrong
- Cover the full lecture, not just one section
- Questions should prepare students for final exams

Respond with ONLY valid JSON (no markdown, no extra text, no code fences):
{"title":"Short lecture title (max 5 words)","questions":[{"q":"question text","options":["A. option","B. option","C. option","D. option"],"answer":"A. option","diff":"easy"},{"q":"...","options":["A. ...","B. ...","C. ...","D. ..."],"answer":"B. ...","diff":"medium"}]}

Handout text:
${text.slice(0, 4000)}`;

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4000,
          messages: [{ role: 'user', content: prompt }],
        }),
      });
      const data = await res.json();
      const raw  = data.content.map(c => c.text || '').join('');
      const clean = raw.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
      if (!parsed.questions || parsed.questions.length < 1) throw new Error('No questions returned');

      // Save to localStorage with lecture number as key
      const storeKey = 'vu_mcq_' + subject + '_' + lectureIndex;
      localStorage.setItem(storeKey, JSON.stringify({ title: parsed.title, questions: parsed.questions }));

      setLoading(false);
      setPage('quiz-' + subject + '-' + lectureIndex);
    } catch (e) {
      setLoading(false);
      setError('Failed to generate MCQs. Please check your internet connection and try again.');
    }
  };

  return (
    <div className="app-shell page-enter">
      <header className="topbar">
        <button className="topbar-back" onClick={() => setPage(subject)}>&#8592; Back</button>
        <div className="topbar-right">{subject} — Lecture {lectureIndex + 1}</div>
      </header>

      <main className="page">
        <div className="upload-card">
          <div className="upload-header">
            <div className="upload-title">Generate MCQs with AI</div>
            <div className="upload-sub">
              Paste the handout text for <strong>{sub.id} Lecture {lectureIndex + 1}</strong> below.
              AI will generate 20 exam-quality MCQs automatically. This is a one-time step — MCQs are saved for future sessions.
            </div>
          </div>

          <textarea
            className="upload-textarea"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Paste your lecture handout text here... (copy from VU LMS or your PDF)"
            disabled={loading}
          />

          <div className="upload-footer">
            <span className="upload-tip">
              {text.length > 0 ? text.length + ' characters' : 'Minimum one paragraph required'}
            </span>
            <button className="btn-generate" onClick={generate} disabled={loading || text.trim().length < 80}>
              {loading ? (
                <><div className="spinner" style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff' }} /> Generating...</>
              ) : (
                <>'✦ Generate 20 MCQs'</>
              )}
            </button>
          </div>
        </div>

        {loading && (
          <div className="ai-status">
            <div className="spinner" />
            AI is reading the handout and creating 20 exam-quality questions...
          </div>
        )}

        {error && (
          <div className="ai-error">
            <span>⚠</span> {error}
          </div>
        )}
      </main>
    </div>
  );
}
