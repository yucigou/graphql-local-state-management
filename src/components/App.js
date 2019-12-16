import React from 'react';
import '../css/app.css';
import QueryBox from './QueryBox';
import ResultBox from './ResultBox';

export default function App() {
  return (
    <div>
      <h1>Country Collector</h1>
      <QueryBox />
      <ResultBox />
    </div>
  );
}
