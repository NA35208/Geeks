import React, { Component } from 'react';
import Modal from './Modal';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  occurError() {
    this.setState({ hasError: true });
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Modal onClose={() => this.setState({ hasError: false })} />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
