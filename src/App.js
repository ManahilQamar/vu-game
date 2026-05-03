import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Levels from './pages/Levels';
import Upload from './pages/Upload';
import Quiz from './pages/Quiz';

export default function App() {
  const [page, setPage] = useState('home');

  if (page === 'home')
    return <Home setPage={setPage} />;

  if (page.startsWith('upload-')) {
    const [, subject, idx] = page.split('-');
    return <Upload subject={subject} lectureIndex={parseInt(idx)} setPage={setPage} />;
  }

  if (page.startsWith('quiz-')) {
    const parts = page.split('-');
    return <Quiz subject={parts[1]} lectureIndex={parseInt(parts[2])} setPage={setPage} />;
  }

  // subject id → levels
  return <Levels subject={page} setPage={setPage} />;
}
