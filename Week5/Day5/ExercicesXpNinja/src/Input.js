import React from 'react';

function Input({ label, type = 'text', name, value, onChange, error }) {
  return (
    <div style={{ marginBottom: '14px', textAlign: 'left' }}>
      <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '4px', color: '#334155' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        noValidate
        style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '10px',
          borderRadius: '6px',
          border: error ? '1px solid #ef4444' : '1px solid #cbd5e1',
          outline: 'none',
          fontSize: '15px'
        }}
      />
      {error && <span style={{ color: '#ef4444', fontSize: '13px', marginTop: '2px', display: 'block' }}>{error}</span>}
    </div>
  );
}

export default Input;
