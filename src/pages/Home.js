import React from "react";
import subjects from "../data/subjects";
import data from "../data/data";

const Home = ({ setPage }) => {
  const getProgress = (subId) => {
    const sub = subjects.find((s) => s.id === subId);
    const saved = localStorage.getItem(`vu_unlocked_${subId}`);
    const unlocked = saved ? JSON.parse(saved) : { 0: true };
    const doneCount = Object.keys(unlocked).filter((k) => {
      const idx = parseInt(k);
      return unlocked[k] && data[subId][idx]?.questions?.length > 0;
    }).length;
    return { done: doneCount, total: sub.total };
  };

  return (
    <div className="screen active" id="screen-home">
      <div className="wrap">
        <div className="home-header">
          <div className="game-logo">VU QUEST</div>
          <div className="game-tagline">Virtual University of Pakistan</div>
          <div className="home-stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
        </div>

        <div className="subject-grid">
          {subjects.map((sub) => {
            const { done, total } = getProgress(sub.id);
            const pct = Math.round((done / total) * 100);
            return (
              <button
                key={sub.id}
                className={`subj-card ${sub.color}`}
                onClick={() => setPage(sub.id)}
              >
                <span className="subj-icon">{sub.icon}</span>
                <div className="subj-name">{sub.name}</div>
                <div className="subj-done">{done}/{total} levels</div>
                <div className="subj-pbar">
                  <div className="subj-pfill" style={{ width: `${pct}%` }} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
