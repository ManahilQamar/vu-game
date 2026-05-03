import React, { useEffect, useState } from "react";
import data from "../data/data";
import subjects from "../data/subjects";

const NODE_COLORS = [
  "#6e3df5","#f5a623","#00c9a7","#ff6b6b",
  "#3498db","#ff69b4","#e67e22","#1abc9c",
  "#9b59b6","#e74c3c","#2ecc71","#f39c12",
];

const ROW_SIZE = 4;

const Levels = ({ subject, setPage }) => {
  const subInfo   = subjects.find((s) => s.id === subject);
  const lectures  = data[subject];
  const total     = lectures.length;

  const [unlocked, setUnlocked] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem(`vu_unlocked_${subject}`);
    if (saved) {
      setUnlocked(JSON.parse(saved));
    } else {
      const def = { 0: true };
      setUnlocked(def);
      localStorage.setItem(`vu_unlocked_${subject}`, JSON.stringify(def));
    }
  }, [subject]);

  const isUnlocked  = (i) => !!unlocked[i];
  const hasQuestions= (i) => lectures[i]?.questions?.length > 0;
  const isDone      = (i) => isUnlocked(i) && hasQuestions(i) &&
    !!localStorage.getItem(`vu_best_${subject}_${i}`);

  const handleNodeClick = (idx) => {
    if (!isUnlocked(idx)) return;
    if (!hasQuestions(idx)) {
      alert("🚧 Coming Soon! Handout abhi upload nahi hua.");
      return;
    }
    setPage(`quiz-${subject}-${idx}`);
  };

  // Build rows (winding left-right-left pattern)
  const rows = [];
  let i = 0;
  let rowNum = 0;
  while (i < total) {
    const items = [];
    for (let j = 0; j < ROW_SIZE && i < total; j++, i++) items.push(i);
    const isEven = rowNum % 2 === 0;
    rows.push({ items: isEven ? items : [...items].reverse(), isEven });
    rowNum++;
  }

  const doneCount = Object.keys(unlocked).filter(k => unlocked[k]).length;

  return (
    <div className="screen active">
      <div className="wrap">
        {/* Top Nav */}
        <div className="top-nav">
          <button
            className={`back-btn ${subInfo.color}`}
            onClick={() => setPage("home")}
          >
            ←
          </button>
          <div>
            <div className="nav-title">{subject}</div>
            <div className="nav-sub">{doneCount}/{total} lectures unlocked</div>
          </div>
        </div>

        {/* Candy Crush Map */}
        <div className="map-container">
          {rows.map(({ items, isEven }, rowIdx) => (
            <div key={rowIdx}>
              {/* Connector dots between rows */}
              {rowIdx > 0 && (
                <div className="row-connector">
                  {[0,1,2].map((d) => (
                    <div key={d} className={`pdot ${isDone(items[0]) ? "done" : ""}`} />
                  ))}
                </div>
              )}

              {/* Node row */}
              <div
                className="map-row"
                style={{
                  justifyContent: isEven ? "flex-end" : "flex-start",
                  paddingLeft:  isEven ? 0 : 16,
                  paddingRight: isEven ? 16 : 0,
                }}
              >
                {items.map((idx, pos) => {
                  const un  = isUnlocked(idx);
                  const has = hasQuestions(idx);
                  const dn  = isDone(idx);
                  const isCurrent = un && has && !dn;
                  const color = NODE_COLORS[idx % NODE_COLORS.length];

                  return (
                    <React.Fragment key={idx}>
                      {/* path dots between nodes in same row */}
                      {pos > 0 && (
                        <>
                          <div className={`pdot ${dn ? "done" : ""}`} />
                          <div className={`pdot ${dn ? "done" : ""}`} />
                        </>
                      )}

                      <button
                        className={`lv-node ${un ? `unlocked${isCurrent ? " current" : ""}` : "locked"} ${dn ? "done" : ""}`}
                        style={
                          un
                            ? {
                                background: dn
                                  ? `linear-gradient(145deg, ${color}, ${color}99)`
                                  : "linear-gradient(145deg, #ffd700, #ffaa00)",
                                boxShadow: dn
                                  ? `0 6px 18px ${color}66`
                                  : "0 6px 18px rgba(255,215,0,0.55)",
                              }
                            : {}
                        }
                        onClick={() => handleNodeClick(idx)}
                      >
                        <div className="lv-num">{idx + 1}</div>
                        <div className="lv-stars">
                          {dn ? "★★★" : un ? (has ? "○○○" : "🚧") : "···"}
                        </div>
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Levels;
