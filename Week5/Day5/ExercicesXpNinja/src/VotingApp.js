import React, { useState } from 'react';

function VotingApp() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const vote = (index) => {
    setLanguages(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], votes: updated[index].votes + 1 };
      return updated;
    });
  };

  return (
    <div style={{ border: '1px solid #cbd5e1', padding: '24px', borderRadius: '12px', background: '#ffffff' }}>
      <h2>Exercise 3: React Voting App</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px', margin: 'auto' }}>
        {languages.map((lang, index) => (
          <div
            key={lang.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 18px',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              background: '#f8fafc'
            }}
          >
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b' }}>
              {lang.name} ({lang.votes} votes)
            </span>
            <button
              onClick={() => vote(index)}
              style={{
                background: '#10b981',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Vote +1
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VotingApp;
