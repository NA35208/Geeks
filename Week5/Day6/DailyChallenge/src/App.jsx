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
      lactoseFree: '',
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target.checked ? 'on' : '') : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, age, gender, destination, lactoseFree } = this.state;
    const params = new URLSearchParams({ firstName, lastName, age, gender, destination, ...(lactoseFree ? { lactoseFree } : {}) });
    window.history.pushState({}, '', `/?${params.toString()}`);
    alert(`Form submitted! Check the URL.`);
  }

  render() {
    return (
      <div style={{ fontFamily: 'Segoe UI, sans-serif', maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
        <h1>Day 6 - Daily Challenge: Form Container</h1>
        <FormComponent values={this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default App;
