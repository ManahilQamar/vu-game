import React, { useState } from 'react';
import './App.css';
import Home    from './pages/Home';
import Levels  from './pages/Levels';
import Upload  from './pages/Upload';
import Quiz    from './components/Quiz';
import Summary from './pages/Summary';

export default function App() {
  const [page, setPage] = useState('home');

  if (page === 'home')
    return <Home setPage={setPage} />;

  if (page.startsWith('upload-')) {
    const [, subj, idx] = page.split('-');
    return <Upload subject={subj} lectureIndex={parseInt(idx)} setPage={setPage} />;
  }

  if (page.startsWith('quiz-')) {
    const [, subj, idx] = page.split('-');
    return <Quiz subject={subj} lectureIndex={parseInt(idx)} setPage={setPage} />;
  }

  if (page.startsWith('summary-')) {
    const [, subj, idx] = page.split('-');
    return <Summary subject={subj} lectureIndex={parseInt(idx)} setPage={setPage} />;
  }

  return <Levels subject={page} setPage={setPage} />;
}