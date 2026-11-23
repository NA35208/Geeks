import React from 'react';

function FormComponent({ values, onChange, onSubmit }) {
  return (
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '300px' }}>
        <h3>Form</h3>
        <label>First Name: <input type="text" name="firstName" value={values.firstName} onChange={onChange} style={{ padding: '6px', marginLeft: '8px' }} /></label>
        <label>Last Name: <input type="text" name="lastName" value={values.lastName} onChange={onChange} style={{ padding: '6px', marginLeft: '8px' }} /></label>
        <label>Age: <input type="text" name="age" value={values.age} onChange={onChange} style={{ padding: '6px', marginLeft: '8px' }} /></label>
        <div>
          Gender:
          <label style={{ marginLeft: '12px' }}><input type="radio" name="gender" value="male" checked={values.gender === 'male'} onChange={onChange} /> Male</label>
          <label style={{ marginLeft: '12px' }}><input type="radio" name="gender" value="female" checked={values.gender === 'female'} onChange={onChange} /> Female</label>
        </div>
        <label>Destination: <select name="destination" value={values.destination} onChange={onChange} style={{ padding: '6px', marginLeft: '8px' }}>
          <option value="">Select...</option>
          <option value="Japan">Japan</option>
          <option value="France">France</option>
          <option value="Australia">Australia</option>
          <option value="USA">USA</option>
        </select></label>
        <label><input type="checkbox" name="lactoseFree" checked={values.lactoseFree === 'on'} onChange={onChange} /> Lactose Free</label>
        <button type="submit" style={{ padding: '10px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Submit</button>
      </form>

      <div style={{ minWidth: '250px' }}>
        <h3>Current Values</h3>
        <p><strong>First Name:</strong> {values.firstName}</p>
        <p><strong>Last Name:</strong> {values.lastName}</p>
        <p><strong>Age:</strong> {values.age}</p>
        <p><strong>Gender:</strong> {values.gender}</p>
        <p><strong>Destination:</strong> {values.destination}</p>
        <p><strong>Lactose Free:</strong> {values.lactoseFree === 'on' ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}
export default FormComponent;
