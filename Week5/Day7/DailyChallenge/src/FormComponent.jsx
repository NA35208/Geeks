import React from 'react';

function FormComponent({ values, onChange, onSubmit }) {
  return (
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          minWidth: '320px',
          background: '#f8fafc',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}
      >
        <h3 style={{ margin: '0 0 8px 0' }}>Enter your info</h3>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          First Name
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={onChange}
            placeholder="First Name"
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          Last Name
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={onChange}
            placeholder="Last Name"
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          Age
          <input
            type="text"
            name="age"
            value={values.age}
            onChange={onChange}
            placeholder="Age"
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
        </label>

        <div>
          <span style={{ fontWeight: '500' }}>Gender:</span>
          <div style={{ display: 'flex', gap: '16px', marginTop: '6px' }}>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={values.gender === 'male'}
                onChange={onChange}
              />{' '}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={values.gender === 'female'}
                onChange={onChange}
              />{' '}
              Female
            </label>
          </div>
        </div>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          Destination
          <select
            name="destination"
            value={values.destination}
            onChange={onChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Japan">Japan</option>
            <option value="France">France</option>
            <option value="Australia">Australia</option>
            <option value="USA">USA</option>
            <option value="Italy">Italy</option>
          </select>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={values.lactoseFree === 'on'}
            onChange={onChange}
          />
          Lactose Free
        </label>

        <button
          type="submit"
          style={{
            padding: '10px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          Submit
        </button>
      </form>

      <div
        style={{
          minWidth: '260px',
          background: '#f8fafc',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}
      >
        <h3 style={{ margin: '0 0 16px 0' }}>Entered Information:</h3>
        <p><strong>Your first name:</strong> {values.firstName || <em style={{ color: '#94a3b8' }}>None</em>}</p>
        <p><strong>Your last name:</strong> {values.lastName || <em style={{ color: '#94a3b8' }}>None</em>}</p>
        <p><strong>Your age:</strong> {values.age || <em style={{ color: '#94a3b8' }}>None</em>}</p>
        <p><strong>Your gender:</strong> {values.gender || <em style={{ color: '#94a3b8' }}>None</em>}</p>
        <p><strong>Your destination:</strong> {values.destination || <em style={{ color: '#94a3b8' }}>None</em>}</p>
        <p><strong>Your dietary restrictions:</strong></p>
        <p style={{ paddingLeft: '16px' }}>**Lactose free:** {values.lactoseFree === 'on' ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default FormComponent;
