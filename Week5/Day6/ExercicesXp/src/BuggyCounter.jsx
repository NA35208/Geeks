import React from 'react';

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      const newCounter = prevState.counter + 1;
      if (newCounter === 5) {
        throw new Error('I crashed!');
      }
      return { counter: newCounter };
    });
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick} style={{ cursor: 'pointer' }}>
          {this.state.counter}
        </h1>
        <p>Click 5 times to crash</p>
      </div>
    );
  }
}

export default BuggyCounter;
