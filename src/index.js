import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirebaseTest from './FirebaseTest';
import ProfessorReviewTest from './ProfessorReviewTest';
import QueryReviewsTest from './QueryReviewsTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryReviewsTest />
  </React.StrictMode>
);


