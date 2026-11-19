import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const tick = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div style={{ border: '1px solid #cbd5e1', padding: '20px', borderRadius: '12px', background: '#1e293b', color: '#38bdf8', textAlign: 'center', marginBottom: '24px' }}>
      <h2 style={{ margin: '0 0 10px', color: '#f8fafc' }}>Exercise 1: Live Clock</h2>
      <div style={{ fontSize: '32px', fontFamily: 'monospace', fontWeight: 'bold' }}>
        {currentDate.toLocaleTimeString()}
      </div>
      <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '6px' }}>
        {currentDate.toDateString()}
      </div>
    </div>
  );
}

export default Clock;
