import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary';

class ColumnRight extends Component {
  constructor(props) {
    super(props);
    // Initial value is a stringified object – safe to render
    this.state = { text: JSON.stringify({ function: 'I live to crash' }) };
  }

  /**
   * Replaces the safe string with an actual JS object.
   * React cannot render plain objects → triggers a render error
   * which is caught by the inner ErrorBoundary wrapping this paragraph.
   */
  replaceWithObject = () => {
    this.setState({ text: { function: 'I live to crash' } });
  };

  /**
   * A regular event-handler error – NOT caught by ErrorBoundary.
   * It just logs to the developer console and doesn't crash the page.
   */
  invokeHandler = () => {
    console.log('Event handler invoked – this does NOT crash the page');
  };

  render() {
    return (
      <div
        style={{
          flex: 1,
          padding: '20px',
          background: '#f8fafc',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
        }}
      >
        <h3>Right Column</h3>
        <p>Some description text here – this paragraph is always safe.</p>

        {/* Only this paragraph is wrapped so the rest of ColumnRight survives a crash */}
        <ErrorBoundary>
          <p>Dynamic content: {this.state.text}</p>
        </ErrorBoundary>

        <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={this.replaceWithObject}
            style={{
              padding: '8px 16px',
              background: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Replace string with object
          </button>
          <button
            onClick={this.invokeHandler}
            style={{
              padding: '8px 16px',
              background: '#059669',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Invoke event handler
          </button>
        </div>
      </div>
    );
  }
}

export default ColumnRight;
