import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import ColorClass from './ColorClass';

function App() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
      <h1>Day 6 - Exercises XP</h1>

      <h2>Exercise 1: React Error Boundary Simulation</h2>

      <h3>Simulation 1: Both in ONE ErrorBoundary</h3>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h3>Simulation 2: Each in its OWN ErrorBoundary</h3>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h3>Simulation 3: NO ErrorBoundary (crashes whole page)</h3>
      <BuggyCounter />

      <hr />
      <h2>Exercise 2 &amp; 3: Lifecycle (Class Component)</h2>
      <ColorClass />
    </div>
  );
}

export default App;
