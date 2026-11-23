import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { errorInfo: null };
    this.errorBoundaryRef = React.createRef();
  }

  triggerError = () => {
    if (this.errorBoundaryRef.current) {
      this.errorBoundaryRef.current.occurError();
    }
  }

  render() {
    return (
      <div style={{ fontFamily:'Segoe UI, sans-serif', maxWidth:'600px', margin:'40px auto', padding:'20px', textAlign:'center' }}>
        <h1>Day 6 - Exercise XP Gold</h1>
        <h2>React Modal with Error Boundary</h2>
        <ErrorBoundary ref={this.errorBoundaryRef}>
          <div>
            <p>Click the button below to trigger the error modal:</p>
            <button onClick={this.triggerError} style={{ padding:'10px 20px', background:'#dc2626', color:'white', border:'none', borderRadius:'6px', cursor:'pointer', fontSize:'16px' }}>
              Click to show error modal
            </button>
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
