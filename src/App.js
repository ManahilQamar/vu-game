import React, { useState } from "react";
import Home   from "./pages/Home";
import Levels from "./pages/Levels";
import Quiz   from "./pages/Quiz";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  // ── Home ──
  if (page === "home") {
    return <Home setPage={setPage} />;
  }

  // ── Quiz: format  "quiz-SUBJECT-INDEX" ──
  if (page.startsWith("quiz-")) {
    const parts        = page.split("-");
    const subject      = parts[1];
    const lectureIndex = parseInt(parts[2], 10);
    return <Quiz subject={subject} lectureIndex={lectureIndex} setPage={setPage} />;
  }

  // ── Level map: page === subject id ──
  return <Levels subject={page} setPage={setPage} />;
}

export default App;
