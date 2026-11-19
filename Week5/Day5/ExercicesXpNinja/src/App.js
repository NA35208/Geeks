import React from 'react';
import Clock from './Clock';
import Form from './Form';
import VotingApp from './VotingApp';

function App() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
      <h1>Day 5 - Exercises XP Ninja</h1>
      <Clock />
      <Form />
      <VotingApp />
    </div>
  );
}

export default App;
