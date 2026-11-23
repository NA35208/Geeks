import React, { Component, createRef } from 'react';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { errorInfo: null };
    this.errorBoundaryRef = createRef();
  }

  triggerError = () => {
    if (this.errorBoundaryRef.current) {
      this.errorBoundaryRef.current.occurError();
    }
  }

  render() {
    return (
      <div style={{ fontFamily: 'Segoe UI, sans-serif', maxWidth: '600px', margin: '40px auto', padding: '20px', textAlign: 'center' }}>
        <h1>Day 7 - Exercise XP Gold</h1>
        <h2>Modal with Error Boundary</h2>
        <p>Click the button to trigger the error modal:</p>
        <ErrorBoundary ref={this.errorBoundaryRef}>
          <button
            onClick={this.triggerError}
            style={{ padding: '12px 24px', background: '#dc2626', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
          >
            Trigger Error Modal
          </button>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
