import React, { useState, useEffect, useCallback } from "react";
import data from "../data/data";

const PASS_PERCENT = 70;
const MAX_LIVES    = 3;

const Quiz = ({ subject, lectureIndex, setPage }) => {
  const lectureData = data[subject][lectureIndex];
  const questions   = lectureData?.questions || [];
  const total       = questions.length;

  const [current,  setCurrent]  = useState(0);
  const [score,    setScore]    = useState(0);
  const [lives,    setLives]    = useState(MAX_LIVES);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [unlockedNext, setUnlockedNext] = useState(false);
  const [selected, setSelected] = useState(null); // index of chosen option

  const progress = total > 0 ? ((current + 1) / total) * 100 : 0;

  const finishQuiz = useCallback(
    (finalScore, finalLives) => {
      const pct    = (finalScore / total) * 100;
      const passed = pct >= PASS_PERCENT;

      // save best score
      const bestKey = `vu_best_${subject}_${lectureIndex}`;
      const prev    = parseInt(localStorage.getItem(bestKey) || "0");
      if (finalScore > prev)
        localStorage.setItem(bestKey, String(finalScore));

      // unlock next level
      if (passed) {
        const unKey   = `vu_unlocked_${subject}`;
        const saved   = localStorage.getItem(unKey);
        const unMap   = saved ? JSON.parse(saved) : { 0: true };
        const nextIdx = lectureIndex + 1;
        if (
          nextIdx < data[subject].length &&
          !unMap[nextIdx]
        ) {
          unMap[nextIdx] = true;
          localStorage.setItem(unKey, JSON.stringify(unMap));
          setUnlockedNext(true);
        }
      }
      setFinished(true);
    },
    [subject, lectureIndex, total]
  );

  const handleAnswer = (optionStr, optionIdx) => {
    if (answered) return;
    setAnswered(true);
    setSelected(optionIdx);

    const isCorrect = optionStr === questions[current].answer;
    const newScore  = isCorrect ? score + 1 : score;
    const newLives  = isCorrect ? lives : lives - 1;

    if (isCorrect) setScore(newScore);
    setLives(newLives);

    setTimeout(() => {
      const nextQ = current + 1;
      if (nextQ >= total || newLives <= 0) {
        finishQuiz(newScore, newLives);
      } else {
        setCurrent(nextQ);
        setSelected(null);
        setAnswered(false);
      }
    }, 950);
  };

  if (!questions.length) {
    return (
      <div className="screen active">
        <div className="wrap">
          <div className="top-nav">
            <button className="back-btn c0" onClick={() => setPage(subject)}>←</button>
            <div>
              <div className="nav-title">{subject} — Lecture {lectureIndex + 1}</div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 60, color: "#bb88ff" }}>
            <div style={{ fontSize: "3rem", marginBottom: 16 }}>🚧</div>
            <h2>Coming Soon!</h2>
            <p style={{ marginTop: 10, fontSize: "0.9rem" }}>
              Is lecture ke MCQs abhi upload nahi hue. Jald aa rahe hain!
            </p>
            <button
              className="r-btn r-btn-primary"
              style={{ marginTop: 30, padding: "12px 28px", border: "none", cursor: "pointer" }}
              onClick={() => setPage(subject)}
            >
              ← Level Map Par Wapas Jao
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct    = (score / total) * 100;
    const passed = pct >= PASS_PERCENT;
    const stars  = pct >= 90 ? "⭐⭐⭐" : pct >= 70 ? "⭐⭐" : "⭐";
    const emoji  = pct >= 90 ? "🏆" : passed ? "🌟" : "😢";

    return (
      <div className="screen active">
        <div className="result-wrap">
          <span className="result-burst">{emoji}</span>
          <div className="result-title">
            {pct >= 90 ? "Zabardast!" : passed ? "Level Passed!" : "Dobara Try Karein!"}
          </div>
          <div className="result-score">
            {score} / {total} correct ({Math.round(pct)}%)
          </div>
          <div className="result-stars">{stars}</div>

          {unlockedNext && (
            <div className="result-unlock">
              🔓 Lecture {lectureIndex + 2} Unlock Ho Gaya!
            </div>
          )}

          <div className="result-msg">
            {passed
              ? "Shukriya! Aap ne 70% se zyada score kiya."
              : "Himmat mat haro! 70% chahiye pass hone ke liye. Dobara try karein."}
          </div>

          <div className="result-btns">
            <button
              className="r-btn r-btn-primary"
              onClick={() => {
                setCurrent(0); setScore(0); setLives(MAX_LIVES);
                setAnswered(false); setFinished(false);
                setUnlockedNext(false); setSelected(null);
              }}
            >
              🔄 Retry
            </button>
            <button className="r-btn r-btn-secondary" onClick={() => setPage(subject)}>
              🗺️ Level Map
            </button>
            <button className="r-btn r-btn-secondary" onClick={() => setPage("home")}>
              🏠 Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q    = questions[current];
  const labs = ["A", "B", "C", "D"];

  const getOptClass = (idx, optStr) => {
    if (!answered || selected === null) return "opt-btn";
    if (optStr === q.answer) return "opt-btn correct";
    if (idx === selected)    return "opt-btn wrong";
    return "opt-btn";
  };

  return (
    <div className="screen active">
      <div className="wrap">
        {/* Top nav */}
        <div className="top-nav">
          <button className="back-btn c0" onClick={() => setPage(subject)}>←</button>
          <div>
            <div className="nav-title">{subject} — Lecture {lectureIndex + 1}</div>
            <div className="nav-sub">{lectureData.title}</div>
          </div>
        </div>

        {/* Quiz topbar */}
        <div className="quiz-topbar">
          <div className="lives-row">
            {Array.from({ length: MAX_LIVES }).map((_, i) => (
              <span key={i} className={`heart ${i >= lives ? "lost" : ""}`}>❤</span>
            ))}
          </div>
          <div className="prog-bar">
            <div className="prog-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="q-counter">{current + 1}/{total}</div>
        </div>

        {/* Question card */}
        <div className="q-card">
          <div className="q-meta">
            {subject}
            <span className={`diff-badge diff-${q.diff || "medium"}`}>
              {q.diff ? q.diff.charAt(0).toUpperCase() + q.diff.slice(1) : "Medium"}
            </span>
          </div>
          <div className="q-text">{q.q}</div>
        </div>

        {/* Options */}
        <div className="opts-list">
          {q.options.map((opt, i) => {
            const cleanOpt = opt.replace(/^[ABCD]\.\s*/, "");
            return (
              <button
                key={i}
                className={getOptClass(i, opt)}
                disabled={answered}
                onClick={() => handleAnswer(opt, i)}
              >
                <span className="opt-letter">{labs[i]}</span>
                {cleanOpt}
              </button>
            );
          })}
        </div>

        {/* Score strip */}
        <div className="score-strip">
          <span>Score</span>
          <span className="score-val">{score}</span>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
