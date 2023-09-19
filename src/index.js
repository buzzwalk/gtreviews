import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirebaseTest from './FirebaseTest';
import ProfessorReviewTest from './ProfessorReviewTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseTest />
    <ProfessorReviewTest />
  </React.StrictMode>
);


