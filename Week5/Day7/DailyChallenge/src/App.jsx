import React, { Component } from 'react';
import FormComponent from './FormComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      lactoseFree: ''
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target.checked ? 'on' : '') : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, age, gender, destination, lactoseFree } = this.state;
    const params = new URLSearchParams();
    if (firstName) params.set('firstName', firstName);
    if (lastName) params.set('lastName', lastName);
    if (age) params.set('age', age);
    if (gender) params.set('gender', gender);
    if (destination) params.set('destination', destination);
    if (lactoseFree) params.set('lactoseFree', lactoseFree);

    window.history.pushState({}, '', `/?${params.toString()}`);
    alert(`Form Submitted! URL updated:\nhttp://localhost:3000/?${params.toString()}`);
  };

  render() {
    return (
      <div style={{ fontFamily: 'Segoe UI, sans-serif', maxWidth: '850px', margin: '40px auto', padding: '20px' }}>
        <h1 style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '12px' }}>
          Day 7 - Daily Challenge: Sample Form Container
        </h1>
        <p style={{ color: '#64748b', marginBottom: '24px' }}>
          Process form data as you enter or select options. On submit, data is reflected in the URL parameters.
        </p>
        <FormComponent
          values={this.state}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
