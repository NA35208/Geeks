import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import ColumnLeft from './columns/ColumnLeft';
import ColumnRight from './columns/ColumnRight';

function App() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', borderBottom: '2px solid #e2e8f0', paddingBottom: '16px' }}>Error Boundary Mini Project</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <ColumnLeft />
        <ErrorBoundary>
          <ColumnRight />
        </ErrorBoundary>
      </div>
    </div>
  );
}
export default App;
