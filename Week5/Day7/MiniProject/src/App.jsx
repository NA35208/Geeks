import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import ColumnLeft from './columns/ColumnLeft';
import ColumnRight from './columns/ColumnRight';

/**
 * Day 7 – Mini Project : Error Boundary
 *
 * Layout:
 *   • Header
 *   • Two columns side by side
 *       – ColumnLeft  : fetches images (always safe)
 *       – ColumnRight : wrapped in an ErrorBoundary at the App level
 *                       AND has an inner ErrorBoundary around the crashing <p>
 *
 * Clicking "Replace string with object" in ColumnRight triggers a render
 * error (React cannot render a plain JS object).  The inner ErrorBoundary
 * catches it and shows the fallback UI while the rest of the page stays intact.
 */
function App() {
  return (
    <div
      style={{
        fontFamily: 'Segoe UI, sans-serif',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '16px',
          marginBottom: '24px',
        }}
      >
        Day 7 – Error Boundary Mini Project
      </h1>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
        {/* Left column – always safe, no ErrorBoundary needed */}
        <ColumnLeft />

        {/* Right column – wrapped at page level; inner paragraph has its own boundary */}
        <ErrorBoundary>
          <ColumnRight />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
