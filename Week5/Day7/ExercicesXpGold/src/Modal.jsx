import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const overlayStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    };

    const modalBodyStyle = {
      background: 'white',
      padding: '40px',
      borderRadius: '12px',
      maxWidth: '400px',
      width: '90%',
      textAlign: 'center',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    };

    return (
      <div style={overlayStyle}>
        <div style={modalBodyStyle}>
          <h2 style={{ color: '#dc2626', marginBottom: '12px' }}>⚠️ An Error Occurred!</h2>
          <p style={{ color: '#64748b', marginBottom: '24px' }}>
            Something went wrong. Please try again.
          </p>
          <button
            onClick={this.props.onClose}
            style={{
              padding: '10px 24px',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 'bold',
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
