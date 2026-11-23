import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary';

class ColumnRight extends Component {
  constructor(props) {
    super(props);
    this.state = { text: JSON.stringify({ function: 'I live to crash' }) };
  }

  replaceWithObject = () => {
    this.setState({ text: { function: 'I live to crash' } });
  }

  invokeHandler = () => {
    console.log('Event handler invoked - this does NOT crash the page');
  }

  render() {
    return (
      <div style={{ flex: 1, padding: '20px', background: '#f8fafc', borderRadius: '8px' }}>
        <h3>Right Column</h3>
        <p>Some description text here.</p>
        <ErrorBoundary>
          <p>Dynamic content: {this.state.text}</p>
        </ErrorBoundary>
        <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
          <button onClick={this.replaceWithObject} style={{ padding: '8px 16px', background: '#dc2626', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Replace string with object
          </button>
          <button onClick={this.invokeHandler} style={{ padding: '8px 16px', background: '#059669', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Invoke event handler
          </button>
        </div>
      </div>
    );
  }
}
export default ColumnRight;
