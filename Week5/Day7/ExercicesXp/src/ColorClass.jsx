import React, { Component } from 'react';
import Child from './Child';

class ColorClass extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red', show: true };
    this.timer = null;
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.setState({ favoriteColor: 'yellow' }), 1500);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('after update');
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  changeToBlue = () => {
    this.setState({ favoriteColor: 'blue' });
  }

  render() {
    return (
      <div style={{ border: '1px solid #e2e8f0', padding: '20px', borderRadius: '8px' }}>
        <h2>Exercise 2 &amp; 3 Lifecycle</h2>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeToBlue}>Change to Blue</button>
        {this.state.show && <Child />}
        <br />
        <button
          onClick={() => this.setState({ show: false })}
          style={{ marginTop: '10px', background: '#dc2626', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}
        >
          Delete Child
        </button>
      </div>
    );
  }
}

export default ColorClass;
