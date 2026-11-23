import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert('The component named Child is unmounted.');
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

export default Child;
