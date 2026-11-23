import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => {
      if (counter === 5) {
        throw new Error('I crashed!');
      }
      return { counter: counter + 1 };
    });
  }

  render() {
    return (
      <div>
        <h1
          onClick={this.handleClick}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          Counter: {this.state.counter} (click to increment)
        </h1>
        <p>⚠️ If counter reaches 5, this component crashes!</p>
      </div>
    );
  }
}

export default BuggyCounter;
