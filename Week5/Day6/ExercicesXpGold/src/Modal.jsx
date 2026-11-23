import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const modalBackground = {
      position: 'fixed',
      display: 'flex',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      background: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center'
    };

    const modalBody = {
      padding: '10px',
      background: 'white',
      borderRadius: '5px',
      minWidth: '300px',
      textAlign: 'center'
    };

    return (
      <div style={modalBackground}>
        <div style={modalBody}>
          <p>An error has occurred!</p>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
