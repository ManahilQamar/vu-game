import React, { useState, useCallback, useEffect } from 'react';
import subjects from '../data/subjects';
import mcqs from '../data/mcqs';

const MAX_LIVES   = 3;
const PASS_PCT    = 70;
const LABELS      = ['A', 'B', 'C', 'D'];

function getLectureData(subject, lectureIndex) {
  const lecNum = lectureIndex + 1;
  // First check hardcoded data
  if (mcqs[subject]?.[lecNum]?.questions?.length > 0) return mcqs[subject][lecNum];
  // Then check AI-generated localStorage
  const stored = localStorage.getItem('vu_mcq_' + subject + '_' + lectureIndex);
  if (stored) return JSON.parse(stored);
  return null;
}

export default function Quiz({ subject, lectureIndex, setPage }) {
  const sub = subjects.find(s => s.id === subject);
  const lectureData = getLectureData(subject, lectureIndex);
  const questions   = lectureData?.questions || [];
  const total       = questions.length;

  const [curQ,      setCurQ]      = useState(0);
  const [score,     setScore]     = useState(0);
  const [lives,     setLives]     = useState(MAX_LIVES);
  const [selected,  setSelected]  = useState(null);   // option index chosen
  const [answered,  setAnswered]  = useState(false);
  const [finished,  setFinished]  = useState(false);
  const [unlockNext,setUnlockNext]= useState(false);

  const finishQuiz = useCallback((finalScore) => {
    const pct    = (finalScore / total) * 100;
    const passed = pct >= PASS_PCT;
    const bestKey = 'vu_best_' + subject + '_' + lectureIndex;
    const prev    = parseInt(localStorage.getItem(bestKey) || '0');
    if (finalScore > prev) localStorage.setItem(bestKey, String(finalScore));
    if (passed) {
      const unKey = 'vu_un_' + subject;
      const unMap = JSON.parse(localStorage.getItem(unKey) || '{"0":true}');
      const nx    = lectureIndex + 1;
      const subInfo = subjects.find(s => s.id === subject);
      if (nx < subInfo.total && !unMap[nx]) {
        unMap[nx] = true;
        localStorage.setItem(unKey, JSON.stringify(unMap));
        setUnlockNext(true);
      }
    }
    setFinished(true);
  }, [subject, lectureIndex, total]);

  const handleSelect = (optStr, optIdx) => {
    if (answered) return;
    setSelected(optIdx);
    setAnswered(true);
    const correct = questions[curQ].answer;
    const isRight = optStr === correct;
    if (!isRight) setLives(l => l - 1);
    else setScore(s => s + 1);
  };

  const handleNext = () => {
    const nextQ = curQ + 1;
    const noLives = lives - (answered && questions[curQ].answer !== questions[curQ].options[selected] ? 1 : 0);
    // check if game over after this next move
    const curLivesLeft = answered
      ? (questions[curQ].options[selected] === questions[curQ].answer ? lives : lives - 1)
      : lives;
    if (nextQ >= total || curLivesLeft <= 0) {
      finishQuiz(score + (answered && questions[curQ].options[selected] === questions[curQ].answer ? 0 : 0));
    } else {
      setCurQ(nextQ);
      setSelected(null);
      setAnswered(false);
    }
  };

  // simpler: track score and lives from state directly
  const [localLives, setLocalLives] = useState(MAX_LIVES);
  const [localScore, setLocalScore] = useState(0);

  useEffect(() => {
    setLocalLives(MAX_LIVES);
    setLocalScore(0);
  }, []);

  const handleSelectFinal = (optStr, optIdx) => {
    if (answered) return;
    setSelected(optIdx);
    setAnswered(true);
    const correct = questions[curQ].answer;
    const isRight = optStr === correct;
    if (!isRight) setLocalLives(l => l - 1);
    else setLocalScore(s => s + 1);
  };

  const handleNextFinal = () => {
    const isRight = questions[curQ].options[selected] === questions[curQ].answer;
    const newLives = isRight ? localLives : localLives - 1;
    const newScore = isRight ? localScore + 1 : localScore;
    const nextQ = curQ + 1;
    if (nextQ >= total || newLives <= 0) {
      // save best
      const pct    = (newScore / total) * 100;
      const passed = pct >= PASS_PCT;
      const bestKey = 'vu_best_' + subject + '_' + lectureIndex;
      const prev    = parseInt(localStorage.getItem(bestKey) || '0');
      if (newScore > prev) localStorage.setItem(bestKey, String(newScore));
      if (passed) {
        const unKey = 'vu_un_' + subject;
        const unMap = JSON.parse(localStorage.getItem(unKey) || '{"0":true}');
        const nx    = lectureIndex + 1;
        const subInfo = subjects.find(s => s.id === subject);
        if (nx < subInfo.total && !unMap[nx]) {
          unMap[nx] = true;
          localStorage.setItem(unKey, JSON.stringify(unMap));
          setUnlockNext(true);
        }
      }
      setLocalScore(newScore);
      setLocalLives(newLives);
      setFinished(true);
    } else {
      setLocalScore(newScore);
      setLocalLives(newLives);
      setCurQ(nextQ);
      setSelected(null);
      setAnswered(false);
    }
  };

  const retry = () => {
    setCurQ(0); setSelected(null); setAnswered(false);
    setFinished(false); setUnlockNext(false);
    setLocalLives(MAX_LIVES); setLocalScore(0);
  };

  if (!lectureData || total === 0) {
    return (
      <div className="app-shell page-enter">
        <header className="topbar">
          <button className="topbar-back" onClick={() => setPage(subject)}>&#8592; Back</button>
          <div className="topbar-right">{subject} — Lecture {lectureIndex + 1}</div>
        </header>
        <main className="page">
          <div className="coming-soon-card">
            <div className="cs-icon">📋</div>
            <div className="cs-title">No MCQs Yet</div>
            <div className="cs-sub">MCQs for this lecture haven't been added yet. Come back after the handout is uploaded.</div>
            <button className="btn-outline" onClick={() => setPage('upload-' + subject + '-' + lectureIndex)}>
              Upload Handout &amp; Generate MCQs
            </button>
          </div>
        </main>
      </div>
    );
  }

  if (finished) {
    const pct    = Math.round((localScore / total) * 100);
    const passed = pct >= PASS_PCT;
    return (
      <div className="app-shell page-enter">
        <header className="topbar">
          <button className="topbar-back" onClick={() => setPage(subject)}>&#8592; Lectures</button>
          <div className="topbar-right">Result</div>
        </header>
        <main className="page">
          <div className="result-card">
            <div className="result-icon-wrap" style={{ background: passed ? '#dcfce7' : '#fee2e2' }}>
              {passed ? '✓' : '✗'}
            </div>
            <div className="result-title">{pct >= 90 ? 'Excellent!' : passed ? 'Good Work!' : 'Keep Trying'}</div>
            <div className="result-subtitle">{sub.id} — Lecture {lectureIndex + 1}</div>
            <div className="result-stats">
              <div className="rs-tile"><div className="rs-num">{localScore}</div><div className="rs-lbl">Correct</div></div>
              <div className="rs-tile"><div className="rs-num">{pct}%</div><div className="rs-lbl">Score</div></div>
              <div className="rs-tile"><div className="rs-num">{localLives}</div><div className="rs-lbl">Lives left</div></div>
            </div>
            {passed
              ? <div className="result-banner banner-pass">
                  {unlockNext ? `✓  Lecture ${lectureIndex + 2} is now unlocked!` : '✓  Well done! Keep going.'}
                </div>
              : <div className="result-banner banner-fail">
                  ⚠ You need 70% to advance. Review the lecture and try again.
                </div>
            }
          </div>
          <div className="result-actions">
            <button className="btn-primary" onClick={retry}>Try Again</button>
            <button className="btn-outline" onClick={() => setPage(subject)}>Back to Lectures</button>
            <button className="btn-outline" onClick={() => setPage('home')}>Home</button>
          </div>
        </main>
      </div>
    );
  }

  const q        = questions[curQ];
  const progress = Math.round(((curQ + 1) / total) * 100);
  const diff     = q.diff || 'medium';
  const isLast   = curQ + 1 >= total;
  const isRight  = selected !== null && q.options[selected] === q.answer;

  const getOptClass = (idx, optStr) => {
    if (!answered) return 'opt-btn';
    if (optStr === q.answer) return 'opt-btn opt-correct';
    if (idx === selected && !isRight) return 'opt-btn opt-wrong';
    return 'opt-btn';
  };

  return (
    <div className="app-shell page-enter">
      <header className="topbar">
        <button className="topbar-back" onClick={() => setPage(subject)}>&#8592; Lectures</button>
        <div className="topbar-right">{sub.id} — Lec {lectureIndex + 1}</div>
      </header>

      <main className="page">
        {/* Progress topbar */}
        <div className="quiz-topbar">
          <div className="quiz-topbar-row">
            <span className="quiz-lec-label">{lectureData.title || 'Lecture ' + (lectureIndex + 1)}</span>
            <span className="quiz-counter">{curQ + 1} / {total}</span>
          </div>
          <div className="quiz-prog-track">
            <div className="quiz-prog-fill" style={{ width: progress + '%', background: sub.color }} />
          </div>
          <div className="quiz-meta-row">
            <div className="hearts-row">
              {Array.from({ length: MAX_LIVES }).map((_, i) => (
                <span key={i} className={`heart${i >= localLives ? ' lost' : ''}`}>♥</span>
              ))}
            </div>
            <span className="quiz-score-lbl">Score: <span className="quiz-score-val">{localScore}</span></span>
          </div>
        </div>

        {/* Question */}
        <div className="q-card">
          <div className={`q-diff-tag diff-${diff}`}>
            {diff.charAt(0).toUpperCase() + diff.slice(1)}
          </div>
          <div className="q-text">{q.q}</div>
        </div>

        {/* Options */}
        <div className="opts-grid">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={getOptClass(i, opt)}
              disabled={answered}
              onClick={() => handleSelectFinal(opt, i)}
            >
              <span className="opt-circle">{LABELS[i]}</span>
              {opt.replace(/^[ABCD]\.\s*/, '')}
            </button>
          ))}
        </div>

        {/* Feedback + Next button (shown after answering) */}
        {answered && (
          <>
            <div className={`feedback-strip ${isRight ? 'fb-correct' : 'fb-wrong'}`}>
              <span className="feedback-icon">{isRight ? '✓' : '✗'}</span>
              {isRight
                ? 'Correct! Well done.'
                : `Correct answer: ${q.answer.replace(/^[ABCD]\.\s*/, '')}`
              }
            </div>
            <div className="next-btn-wrap">
              <button
                className={`btn-next ${isLast ? 'btn-next-last' : ''}`}
                onClick={handleNextFinal}
              >
                {isLast ? 'Finish Quiz ✓' : 'Next Question →'}
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
