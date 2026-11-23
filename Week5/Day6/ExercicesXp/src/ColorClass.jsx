import React from 'react';
import Child from './Child';

class ColorClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red', show: true };
    this.changeToBlue = this.changeToBlue.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1500);
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

  changeToBlue() {
    this.setState({ favoriteColor: 'blue' });
  }

  render() {
    const { favoriteColor, show } = this.state;
    return (
      <div>
        <h1>My Favorite Color is {favoriteColor}</h1>
        <button onClick={this.changeToBlue}>Change to Blue</button>
        {show && <Child />}
        <button onClick={() => this.setState({ show: false })}>Delete</button>
      </div>
    );
  }
}

export default ColorClass;
