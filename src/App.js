import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import Home       from './pages/Home';
import Levels     from './pages/Levels';
import Upload     from './pages/Upload';
import Quiz       from './components/Quiz';
import Summary    from './pages/Summary';
import PastPapers from './pages/PastPapers';
import Practice   from './pages/Practice';
import MockExams  from './pages/MockExams';
import ExamPaper  from './pages/ExamPaper';

function getPageFromHash() {
  return window.location.hash.replace(/^#/, '') || 'home';
}

export default function App() {
  const [page, setPageState] = useState(getPageFromHash);
  const [dark, setDark] = useState(() => localStorage.getItem('vu_theme') === 'dark');
  const isPopRef = useRef(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('vu_theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home');
    }
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      isPopRef.current = true;
      setPageState(getPageFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const setPage = useCallback((next) => {
    if (window.location.hash.replace(/^#/, '') === next) return;
    window.location.hash = next;
    setPageState(next);
    window.scrollTo(0, 0);
  }, []);

  const toggleDark = () => setDark(d => !d);
  const sharedProps = { setPage, toggleDark, dark };

  if (page === 'home')   return <Home {...sharedProps} />;
  if (page === 'papers') return <PastPapers {...sharedProps} />;
  if (page === 'exams')  return <MockExams {...sharedProps} />;

  if (page.startsWith('upload-')) {
    const [, subj, idx] = page.split('-');
    return <Upload subject={subj} lectureIndex={parseInt(idx)} {...sharedProps} />;
  }
  if (page.startsWith('quiz-')) {
    const [, subj, idx] = page.split('-');
    return <Quiz subject={subj} lectureIndex={parseInt(idx)} {...sharedProps} />;
  }
  if (page.startsWith('summary-')) {
    const [, subj, idx] = page.split('-');
    return <Summary subject={subj} lectureIndex={parseInt(idx)} {...sharedProps} />;
  }
  if (page.startsWith('practice-')) {
    const [, subj, idx] = page.split('-');
    return <Practice subject={subj} lectureIndex={parseInt(idx)} {...sharedProps} />;
  }
  if (page.startsWith('exam-')) {
    // exam-MTH101-mid  or  exam-PHY101-final
    const parts = page.split('-');
    const subj  = parts[1];
    const type  = parts[2];
    return <ExamPaper subject={subj} paperType={type} {...sharedProps} />;
  }

  return <Levels subject={page} {...sharedProps} />;
}